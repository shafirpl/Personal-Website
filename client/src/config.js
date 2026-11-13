// Base URL for the Express API. Empty means same origin (the dev server proxies /api).
// Set VITE_API_BASE_URL in .env.production when the API is hosted elsewhere.
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "";
