
"use client";

import { ReactNode } from "react";
import { ConvexProvider, ConvexReactClient } from "convex/react";

// Use the same Convex URL as the main app
// In dev: VITE_CONVEX_URL usually found in .env.local of main app
// For now, allow it to fallback or expect env var
const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL || "https://witty-wombat-187.convex.cloud"; // Hardcoding dev URL for MVP speed if env missing in marketing site

const convex = new ConvexReactClient(convexUrl);

export default function ConvexClientProvider({ children }: { children: ReactNode }) {
    return <ConvexProvider client={convex}>{children}</ConvexProvider>;
}
