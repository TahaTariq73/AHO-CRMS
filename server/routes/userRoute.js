const express = require("express");
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");
const {
    registerUser,
    login,
    logout,
    getUserDetails,
    updateProfile,
    getAllUsers,
    getSingleUser,
    updateUserRole,
    deleteUser,
    verifyOTP,
    deleteMyProfile
} = require("../controllers/userController");

const router = express.Router();

// User routes

router.route("/register").post(registerUser);

router.route("/verifyotp").post(verifyOTP);

router.route("/login").post(login);

router.route("/logout").get(logout);

router.route("/me").get(isAuthenticatedUser, getUserDetails);

router.route("/me/update").put(isAuthenticatedUser, updateProfile);

router.route("/me/delete").delete(isAuthenticatedUser, deleteMyProfile);

// Admin routes

router.route("/admin/users").get(isAuthenticatedUser, authorizeRoles("admin"), getAllUsers);

router.route("/admin/user/:id")
.get(isAuthenticatedUser, authorizeRoles("admin"), getSingleUser)
.put(isAuthenticatedUser, authorizeRoles("admin"), updateUserRole)
.delete(isAuthenticatedUser, authorizeRoles("admin"), deleteUser);

module.exports = router;