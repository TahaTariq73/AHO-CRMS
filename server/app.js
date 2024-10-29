const express = require("express");
const errorMiddleware = require("./middlewares/error");
const userRoute = require("./routes/userRoute");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");

// Configure express app

const app = express();

// Configuring environment variables

if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: "server/config/config.env" });
}

// Rejecting node TLS - Used only for development mode

// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

// Using utilities

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({
    extended: true
}))

// Using cors for preventing api errors in client

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

// Routes

app.use("/api/v1", userRoute);

// Sending Vite React File to server

// app.use(express.static(path.resolve(__dirname, "../client/build")));

// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../client/build/index.html"));
// })

// Middleware for errors

app.use(errorMiddleware);

module.exports = app;