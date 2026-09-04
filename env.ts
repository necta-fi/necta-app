import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {},
  client: {
    NEXT_PUBLIC_APP_URL: z.string().default("https://nectafi.xyz"),
    NEXT_PUBLIC_API_URL: z.string().default(""),
    NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID: z.string().default(""),
    NEXT_PUBLIC_ALCHEMY_ID: z.string().default(""),
    NEXT_PUBLIC_USDC_ADDRESS: z.string().default(""),
    NEXT_PUBLIC_CONSOLE_API_KEY: z.string().default(""),
  },
  runtimeEnv: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID:
      process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID,
    NEXT_PUBLIC_ALCHEMY_ID: process.env.NEXT_PUBLIC_ALCHEMY_ID,
    NEXT_PUBLIC_USDC_ADDRESS: process.env.NEXT_PUBLIC_USDC_ADDRESS,
    NEXT_PUBLIC_CONSOLE_API_KEY: process.env.NEXT_PUBLIC_CONSOLE_API_KEY,
  },
})
