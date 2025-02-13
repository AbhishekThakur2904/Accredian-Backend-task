"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Express error-handling middleware that logs error details and sends a
 * standardized JSON response with a 500 status code.
 *
 * @param err - The error object that was thrown in the application.
 * @param req - The Express request object.
 * @param res - The Express response object.
 * @param next - The Express next function, to pass control to the next middleware.
 */
const errorHandler = (err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error", error: err.message });
};
exports.default = errorHandler;
