"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.health = exports.submitBooking = void 0;
const https_1 = require("firebase-functions/v2/https");
const params_1 = require("firebase-functions/params");
const email_1 = require("./email");
const auth_1 = require("firebase-admin/auth");
const app_1 = require("firebase-admin/app");
if (!(0, app_1.getApps)().length) {
    (0, app_1.initializeApp)();
}
const receivingEmail = (0, params_1.defineSecret)("RECEIVING_EMAIL");
exports.submitBooking = (0, https_1.onRequest)({
    cors: true,
    secrets: [receivingEmail],
}, async (req, res) => {
    // Only allow POST requests
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Headers", "Authorization, Content-Type");
    res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    if (req.method === "OPTIONS") {
        res.status(204).send("");
        return;
    }
    if (req.method !== "POST") {
        res.status(405).json({ error: "Method not allowed" });
        return;
    }
    // Verify Firebase ID token
    const header = req.headers.authorization || "";
    const token = header.startsWith("Bearer ") ? header.slice(7) : null;
    if (!token) {
        res.status(401).json({ error: "Missing or invalid Authorization header" });
        return;
    }
    try {
        await (0, auth_1.getAuth)().verifyIdToken(token);
    }
    catch {
        res.status(401).json({ error: "Invalid or expired token" });
        return;
    }
    try {
        const { airline, flyingFrom, flyingTo, date, flightTime, bags } = req.body;
        // Validate required fields
        if (!airline || !flyingFrom || !flyingTo || !date || !flightTime || !bags) {
            res.status(400).json({
                error: "Missing required fields",
                details: "Please fill in all fields",
            });
            return;
        }
        // Environment variables are set via Firebase Functions config
        await (0, email_1.sendBookingEmail)({
            airline,
            flyingFrom,
            flyingTo,
            date,
            flightTime,
            bags,
        });
        res.json({
            success: true,
            message: "Booking request submitted successfully",
        });
    }
    catch (error) {
        console.error("Error processing booking request:", error);
        res.status(500).json({
            error: "Failed to process booking request",
            details: error instanceof Error ? error.message : "Unknown error",
        });
    }
});
exports.health = (0, https_1.onRequest)({
    cors: true,
}, async (_req, res) => {
    res.set("Access-Control-Allow-Origin", "*");
    res.json({ ok: true });
});
//# sourceMappingURL=index.js.map