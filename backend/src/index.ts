import express from "express";
import cors from "cors";
import { getAdminApp } from "./firebaseAdmin";
import { sendBookingEmail } from "./functions/email";
import { requireAuth } from "./middleware/auth";

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Admin app lazily
getAdminApp();

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

app.post("/api/submit-booking", requireAuth, async (req, res) => {
  try {
    const { airline, flyingFrom, flyingTo, date, flightTime, bags } = req.body;

    // Validate required fields
    if (!airline || !flyingFrom || !flyingTo || !date || !flightTime || !bags) {
      return res.status(400).json({ 
        error: "Missing required fields",
        details: "Please fill in all fields" 
      });
    }

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
      message: "Booking request submitted successfully" 
    });
  } catch (error) {
    console.error("Error processing booking request:", error);
    res.status(500).json({ 
      error: "Failed to process booking request",
      details: error instanceof Error ? error.message : "Unknown error"
    });
  }
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
