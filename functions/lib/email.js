"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendBookingEmail = sendBookingEmail;
const mail_1 = __importDefault(require("@sendgrid/mail"));
async function sendBookingEmail(data) {
    // Set SendGrid API key
    if (!process.env.SENDGRID_API_KEY) {
        throw new Error("SENDGRID_API_KEY environment variable is not set");
    }
    mail_1.default.setApiKey(process.env.SENDGRID_API_KEY);
    const receivingEmail = process.env.RECEIVING_EMAIL || process.env.FROM_EMAIL;
    const fromEmail = process.env.FROM_EMAIL;
    if (!fromEmail) {
        throw new Error("FROM_EMAIL environment variable is not set");
    }
    if (!receivingEmail) {
        throw new Error("RECEIVING_EMAIL environment variable is not set");
    }
    const msg = {
        to: receivingEmail,
        from: fromEmail,
        subject: "New Booking Request - DoorToAirport",
        html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #6A5AE0; padding-bottom: 10px;">
          New Booking Request
        </h2>
        
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin-top: 20px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555; width: 150px;">Airline:</td>
              <td style="padding: 8px 0; color: #333;">${data.airline || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Flying From:</td>
              <td style="padding: 8px 0; color: #333;">${data.flyingFrom || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Flying To:</td>
              <td style="padding: 8px 0; color: #333;">${data.flyingTo || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Date:</td>
              <td style="padding: 8px 0; color: #333;">${data.date || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Flight Time:</td>
              <td style="padding: 8px 0; color: #333;">${data.flightTime || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Number of Bags:</td>
              <td style="padding: 8px 0; color: #333;">${data.bags || "1"}</td>
            </tr>
          </table>
        </div>
        
        <p style="margin-top: 20px; color: #666; font-size: 14px;">
          Please review this request and contact the customer if you can handle their booking.
        </p>
      </div>
    `,
        text: `
New Booking Request - DoorToAirport

Airline: ${data.airline || "Not provided"}
Flying From: ${data.flyingFrom || "Not provided"}
Flying To: ${data.flyingTo || "Not provided"}
Date: ${data.date || "Not provided"}
Flight Time: ${data.flightTime || "Not provided"}
Number of Bags: ${data.bags || "1"}

Please review this request and contact the customer if you can handle their booking.
    `,
    };
    await mail_1.default.send(msg);
}
//# sourceMappingURL=email.js.map