import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// API URL configuration for development and production
export const API_URL = import.meta.env.PROD
  ? "https://portfolio-backend-njrm.onrender.com"
  : "http://localhost:5000";
