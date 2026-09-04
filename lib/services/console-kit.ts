import { ConsoleKit } from "brahma-console-kit"
import { env } from "@/env"
import type { Address } from "viem"

export class ConsoleKitService {
  private static instance: ConsoleKitService
  private consoleKit: ConsoleKit

  private constructor() {
    if (!env.NEXT_PUBLIC_CONSOLE_API_KEY) {
      throw new Error("CONSOLE_API_KEY is required")
    }
    this.consoleKit = new ConsoleKit(
      env.NEXT_PUBLIC_CONSOLE_API_KEY,
      "https://console.brahma.fi/api",
    )
  }

  static getInstance(): ConsoleKitService {
    if (!ConsoleKitService.instance) {
      ConsoleKitService.instance = new ConsoleKitService()
    }
    return ConsoleKitService.instance
  }

  get kit(): ConsoleKit {
    return this.consoleKit
  }

  async deployBrahmaAccount(userAddress: Address): Promise<Address> {
    throw new Error(
      "NectaFi has been discontinued. Account deployment is no longer available.",
    )
  }

  async getAccountStatus(
    _accountAddress: Address,
  ): Promise<{ isDeployed: boolean; isActive: boolean }> {
    throw new Error(
      "NectaFi has been discontinued. Account status checks are no longer available.",
    )
  }
}
