export const dynamic = "force-dynamic"

import { AppHeader } from "@/components/app/app-header"
import { AppFooter } from "@/components/app/app-footer"
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation"
import { WindDownDialog } from "@/components/app/wind-down-dialog"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BackgroundGradientAnimation
        containerClassName="min-h-screen"
        className="relative z-10"
      >
        <div className="flex min-h-screen flex-col">
          <AppHeader />
          <div className="flex-1">{children}</div>
          <AppFooter />
        </div>
      </BackgroundGradientAnimation>
      <WindDownDialog />
    </>
  )
}
