import { onRequest } from "firebase-functions/v2/https";
import { defineSecret } from "firebase-functions/params";
import { sendBookingEmail } from "./email";
import { getAuth } from "firebase-admin/auth";
import { getApps, initializeApp } from "firebase-admin/app";

if (!getApps().length) {
  initializeApp();
}

const receivingEmail = defineSecret("RECEIVING_EMAIL");

export const submitBooking = onRequest(
  {
    cors: true,
    secrets: [receivingEmail],
  },
  async (req, res) => {
    // Only allow POST requests
    if (req.method !== "POST") {
      res.status(405).json({ error: "Method not allowed" });
      return;
    }

    // Verify Firebase ID token
    const header = (req.headers.authorization as string) || "";
    const token = header.startsWith("Bearer ") ? header.slice(7) : null;
    if (!token) {
      res.status(401).json({ error: "Missing or invalid Authorization header" });
      return;
    }
    try {
      await getAuth().verifyIdToken(token);
    } catch {
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

      await sendBookingEmail({
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
    } catch (error) {
      console.error("Error processing booking request:", error);
      res.status(500).json({
        error: "Failed to process booking request",
        details: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }
);

export const health = onRequest(
  {
    cors: true,
  },
  async (_req, res) => {
    res.json({ ok: true });
  }
);

