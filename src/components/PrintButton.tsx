"use client";

import { Printer } from "lucide-react";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="no-print inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-3 via-accent to-accent-2 px-5 py-2.5 text-sm font-semibold text-[#04060c] shadow-lg shadow-accent/20 transition hover:shadow-accent/40"
    >
      <Printer size={16} /> Print / Save as PDF
    </button>
  );
}
