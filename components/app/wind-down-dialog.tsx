"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"

export function WindDownDialog() {
  const [open, setOpen] = useState(true)

  return (
    <Dialog open={open} onOpenChange={() => {}}>
      <DialogContent
        className="border-white/[0.08] bg-zinc-900/95 backdrop-blur-md sm:max-w-md [&>button:last-child]:hidden"
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogHeader className="items-center text-center">
          <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10">
            <AlertTriangle className="h-6 w-6 text-red-500" />
          </div>
          <DialogTitle className="text-xl text-white">
            Necta Has Been Discontinued
          </DialogTitle>
          <DialogDescription className="text-white/60">
            Necta ceased operations in November 2025.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 py-2">
          <div className="rounded-lg bg-red-500/10 p-4">
            <p className="text-sm font-medium text-red-400">
              Do not deposit any funds. All services have been permanently shut
              down.
            </p>
          </div>

          <div className="space-y-2 rounded-lg bg-white/[0.05] p-4 text-sm leading-relaxed text-white/60">
            <p>
              Please withdraw any remaining funds from your account immediately.
              Smart contracts may still be accessible, but no further
              development, support, or maintenance will be provided.
            </p>
            <p>
              Necta and its team are not liable for any loss of assets. Continued
              interaction with these contracts is entirely at your own risk.
            </p>
          </div>

          <p className="text-center text-xs text-white/40">
            This is not financial advice. Please consult a qualified professional
            regarding your assets.
          </p>
        </div>

        <DialogFooter className="sm:justify-center">
          <Button
            className="w-full bg-[#F29600] py-5 text-white hover:bg-[#F29600]/80"
            onClick={() => setOpen(false)}
          >
            I Understand, Continue
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
