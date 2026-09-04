"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { AlertTriangle } from "lucide-react"

export function WindDownDialog() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (pathname?.startsWith("/app")) {
      setOpen(true)
    }
  }, [pathname])

  if (!open) return null

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.85)",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "28rem",
          margin: "0 1rem",
          padding: "1.5rem",
          borderRadius: "0.75rem",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          backgroundColor: "rgba(24, 24, 27, 0.98)",
          color: "white",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              width: "3rem",
              height: "3rem",
              margin: "0 auto 0.75rem",
              borderRadius: "50%",
              backgroundColor: "rgba(239, 68, 68, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AlertTriangle style={{ width: "1.5rem", height: "1.5rem", color: "#ef4444" }} />
          </div>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 600 }}>
            Necta Has Been Discontinued
          </h2>
          <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.6)", marginTop: "0.25rem" }}>
            Necta ceased operations in November 2025.
          </p>
        </div>

        <div style={{ marginTop: "1rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <div
            style={{
              padding: "1rem",
              borderRadius: "0.5rem",
              backgroundColor: "rgba(239, 68, 68, 0.1)",
            }}
          >
            <p style={{ fontSize: "0.875rem", fontWeight: 500, color: "#f87171" }}>
              Do not deposit any funds. All services have been permanently shut down.
            </p>
          </div>

          <div
            style={{
              padding: "1rem",
              borderRadius: "0.5rem",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              fontSize: "0.875rem",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.6,
            }}
          >
            <p>
              Please withdraw any remaining funds from your account immediately.
              Smart contracts may still be accessible, but no further development,
              support, or maintenance will be provided.
            </p>
            <p style={{ marginTop: "0.5rem" }}>
              Necta and its team are not liable for any loss of assets. Continued
              interaction with these contracts is entirely at your own risk.
            </p>
          </div>

          <p style={{ textAlign: "center", fontSize: "0.75rem", color: "rgba(255,255,255,0.4)" }}>
            This is not financial advice. Please consult a qualified professional
            regarding your assets.
          </p>
        </div>

        <div style={{ marginTop: "1rem" }}>
          <button
            type="button"
            onClick={() => setOpen(false)}
            style={{
              width: "100%",
              padding: "0.75rem",
              borderRadius: "0.5rem",
              border: "none",
              backgroundColor: "#F29600",
              color: "white",
              fontSize: "0.875rem",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            I Understand, Continue
          </button>
        </div>
      </div>
    </div>
  )
}
