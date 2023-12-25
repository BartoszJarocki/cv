"use client";

import { Button } from "./ui/button";
import { PrinterIcon } from "lucide-react";

export function PrintButton() {
  return (
    <Button
      className="rounded-full h-16 w-16 fixed bottom-4 right-4 shadow-2xl print:hidden"
      onClick={() => window.print()}
    >
      <PrinterIcon />
    </Button>
  );
}
