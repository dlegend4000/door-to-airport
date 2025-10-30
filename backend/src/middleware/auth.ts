import { Request, Response, NextFunction } from "express";
import { getAuth } from "firebase-admin/auth";
import { getAdminApp } from "../firebaseAdmin";

getAdminApp(); // Ensure admin is initialized

export async function requireAuth(req: Request, res: Response, next: NextFunction) {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : null;
  if (!token) {
    return res.status(401).json({ error: "Missing or invalid Authorization header" });
  }
  try {
    const decoded = await getAuth().verifyIdToken(token);
    (req as any).user = decoded;
    return next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
}
