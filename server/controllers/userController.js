const User = require("../models/UserModel");
const ErrorHandler = require("../utilities/errorHandler");
const catchAsyncError = require("../middlewares/catchAsyncError");
const sendToken = require("../utilities/jwtToken");
const sendEmail = require("../utilities/sendEmail");
const ApiFeatures = require("../utilities/apiFeatures");
const crypto = require("crypto");

// In-memory mock database for OTPs and users

const otps = new Map();

// Register account --> Public Route

exports.registerUser = catchAsyncError (
    async (req, res, next) => {
        const { name, email, password } = req.body;

        if (!email || !name || !password) {
            return next(new ErrorHandler("Email, username, and password are required", 400));
        }

        if(name.length < 4) {
            return next(new ErrorHandler("Name can't be shorter than 4 characters", 400));
        }

        if(!email.includes("@gmail.com")) {
            return next(new ErrorHandler("Please enter a valid email", 400));
        }

        if(password.length < 8) {
            return next(new ErrorHandler("Password must contain 8 characters", 400));
        }
        
        const otp = crypto.randomInt(100000, 999999).toString();
        const expiresAt = Date.now() + 5 * 60 * 1000; // OTP expires in 5 minutes
        otps.set(email, { otp, expiresAt, name, password }); // Store OTP and user data temporarily

        // Send OTP email

        try {
            await sendEmail({
                email: email,
                subject: "AHO CRMS",
                message: `Your registration code is ${otp}`
            })

            res.status(200).json({
                success: true,
                message: `Email sent to ${email} successfully`
            })
        } catch (error) {
            otps.delete(email);
            return next(new ErrorHandler(error.message, 500));
        }
    }
)

// Verify your code --> Public Route

exports.verifyOTP = catchAsyncError (
    async (req, res, next) => {
        const { email, otp } = req.body;
        const otpData = otps.get(email);
      
        if (!otpData) {
            return next(new ErrorHandler("OTP not found", 400));
        }
      
        if (Date.now() > otpData.expiresAt) {
            otps.delete(email);
            return next(new ErrorHandler("OTP expired", 400));
        }
      
        if (otpData.otp === otp) {
            const user = await User.create({
                name: otpData.name, 
                email, 
                password: otpData.password
            })

            otps.delete(email); // Clear OTP data after successfull registration
            sendToken(user, 200, res);
        } else {
            return res.status(400).json({ error: 'Invalid OTP' });
        }
    }
)

// Login into account --> Public Route

exports.login = catchAsyncError (
    async (req, res, next) => {
        const { email, password } = req.body;
        if (!email || !password) {
            return next(new ErrorHandler("Please enter email and password", 400));
        }

        const user = await User.findOne({ email }).select("+password");
        if (!user) {
            return next(new ErrorHandler("Invalid email or password", 404));
        }

        const isPasswordMatched = await user.comparePassword(password);
        if (!isPasswordMatched) {
            return next(new ErrorHandler("Invalid email or password", 401));
        }

        sendToken(user, 200, res);
    }
)

// Logout your account --> Public Route

exports.logout = catchAsyncError (
    async (req, res, next) => {
        res.cookie("token", null, {
            expires: new Date(Date.now()),
            httpOnly: true
        })

        res.status(200).json({
            success: true,
            message: "Logget out successfully"
        })
    }
)

// Get user details --> User route

exports.getUserDetails = catchAsyncError (
    async (req, res, next) => {
        const user = await User.findById(req.user._id);

        res.status(200).json({
            success: true,
            user
        })
    }
)

// Update user profile --> User Route

exports.updateProfile = catchAsyncError (
    async (req, res, next) => {
        const data = {
            name: req.body.name,
            email: req.body.email
        }

        const user = await User.findByIdAndUpdate(req.user._id, data, {
            new: true,
            runValidators: true
        })
        await user.save();

        res.status(200).json({
            success: true,
            user
        })
    }
)

// Get all users --> Admin Route

exports.getAllUsers = catchAsyncError (
    async (req, res, next) => {
        const apiFeature = new ApiFeatures(User.find({}), req.query)
        .search()
        .pagination(Number(process.env.NO_OF_RESULTS_IN_TABLE));

        const users = await apiFeature.query.clone(); 

        res.status(200).json({
            success: true,
            users
        })
    }
)

// Get single user --> Admin Route

exports.getSingleUser = catchAsyncError (
    async (req, res, next) => {
        const user = await User.findById(req.params.id);
        if (!user) {
            return next(new ErrorHandler("User not found", 404));
        }

        res.status(200).json({
            success: true,
            user
        })
    }
)

// Update user role --> Admin Route

exports.updateUserRole = catchAsyncError (
    async (req, res, next) => {
        const data = {
            role: req.body.role
        }

        const user = await User.findByIdAndUpdate(req.params.id, data, {
            new: true,
            runValidators: true
        })

        if (!user) {
            return next(new ErrorHandler("User not found", 404));
        }

        res.status(200).json({
            success: true,
            user
        })
    }
)

// Delete user --> Admin Route

exports.deleteUser = catchAsyncError (
    async (req, res, next) => {
        const user = await User.findById(req.params.id);

        if (!user) {
            return next(new ErrorHandler("User not found", 404));
        }

        await cloudinary.v2.uploader.destroy(user.avatar.public_id);
        await user.deleteOne();

        res.status(200).json({
            success: true,
            message: "User deleted successfully"
        })
    }
)

// Delete my profile --> User Route

exports.deleteMyProfile = catchAsyncError (
    async (req, res, next) => {
        const user = await User.findById(req.user._id);

        await cloudinary.v2.uploader.destroy(user.avatar.public_id);
        await user.deleteOne();

        res.status(200).json({
            success: true,
            message: "Your profile deleted successfully"
        })
    }
)