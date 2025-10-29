import { onRequest } from "firebase-functions/v2/https";
import { sendBookingEmail } from "./email";

export const submitBooking = onRequest(
  {
    cors: true,
  },
  async (req, res) => {
    // Only allow POST requests
    if (req.method !== "POST") {
      res.status(405).json({ error: "Method not allowed" });
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

