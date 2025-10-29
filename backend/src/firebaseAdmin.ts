import dotenv from "dotenv";
import { initializeApp, cert, getApps, getApp, ServiceAccount } from "firebase-admin/app";

dotenv.config({ path: process.env.NODE_ENV === "production" ? ".env" : ".env.local" });

const serviceAccount: ServiceAccount | undefined = process.env.FIREBASE_PRIVATE_KEY && process.env.FIREBASE_CLIENT_EMAIL ? {
  projectId: process.env.FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey: (process.env.FIREBASE_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
} : undefined;

export function getAdminApp() {
  if (getApps().length) return getApp();
  if (serviceAccount) {
    return initializeApp({ credential: cert(serviceAccount) });
  }
  // Fallback to ADC if no explicit service account provided
  return initializeApp();
}
