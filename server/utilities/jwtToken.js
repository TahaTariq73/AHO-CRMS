// Creating token and saving in cookie

const sendToken = (user, statusCode, res) => {
    const token = user.getJwtToken();

    // Options for cookie

    const options = {
        maxAge: 3600000 * 24 * 7, // 1 hour in milliseconds
        httpOnly: true,  // Prevents client-side access to the cookie
        secure: false,   // Set to true if using HTTPS
        sameSite: 'Lax', // Adjust as needed
        path: '/'
    }

    res.status(statusCode).cookie("token", token, options).json({
        success: true,
        user,
        token
    })
}

module.exports = sendToken;