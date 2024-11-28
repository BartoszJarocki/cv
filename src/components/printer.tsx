"use client";

import { Button } from "./ui/button";
import { PrinterIcon } from "lucide-react";

export const Printer = () => {
  return (
    <Button
      className="fixed transform-none bottom-4 right-4 size-16 rounded-full shadow-2xl print:hidden"
      onClick={() => window.print()}
    >
      <PrinterIcon />
    </Button>
  );
};
