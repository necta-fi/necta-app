"use client"

import { useState } from "react"
import { AppHeader } from "@/components/app/app-header"
import { AppFooter } from "@/components/app/app-footer"
import { AlertTriangle } from "lucide-react"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [dismissed, setDismissed] = useState(false)

  return (
    <div className="relative min-h-screen bg-[#111111]">
      {!dismissed && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0,0,0,0.85)",
          }}
        >
          <div className="mx-4 w-full max-w-md rounded-lg border border-white/[0.08] bg-zinc-900 p-6 shadow-2xl">
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10">
                <AlertTriangle className="h-6 w-6 text-red-500" />
              </div>
              <h2 className="text-xl font-semibold text-white">
                Necta Has Been Discontinued
              </h2>
              <p className="mt-1 text-sm text-white/60">
                Necta ceased operations in November 2025.
              </p>
            </div>

            <div className="mt-4 space-y-3">
              <div className="rounded-lg bg-red-500/10 p-4">
                <p className="text-sm font-medium text-red-400">
                  Do not deposit any funds. All services have been permanently
                  shut down.
                </p>
              </div>

              <div className="space-y-2 rounded-lg bg-white/[0.05] p-4 text-sm leading-relaxed text-white/60">
                <p>
                  Please withdraw any remaining funds from your account
                  immediately. Smart contracts may still be accessible, but no
                  further development, support, or maintenance will be provided.
                </p>
                <p>
                  Necta and its team are not liable for any loss of assets.
                  Continued interaction with these contracts is entirely at your
                  own risk.
                </p>
              </div>

              <p className="text-center text-xs text-white/40">
                This is not financial advice. Please consult a qualified
                professional regarding your assets.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setDismissed(true)}
              className="mt-4 w-full rounded-md bg-[#F29600] py-3 text-sm font-medium text-white hover:bg-[#F29600]/80"
            >
              I Understand, Continue
            </button>
          </div>
        </div>
      )}

      <div className="flex min-h-screen flex-col">
        <AppHeader />
        <div className="flex-1">{children}</div>
        <AppFooter />
      </div>
    </div>
  )
}
