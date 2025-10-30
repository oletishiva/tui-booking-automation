import { Locator, Page } from "@playwright/test";

export class ResultsPage {
  constructor(private readonly page: Page) {}

  // Locators first
  private get _continueButton(): Locator {
    return this.page.getByRole("button", { name: /continue/i }).first();
  }

  private get _firstResultCard(): Locator {
    return this.page
      .locator('[class*="result" i], [data-testid*="result" i]')
      .first();
  }

  // Actions
  async pickFirstHotelAndContinue(): Promise<void> {
    await this._continueButton
      .waitFor({ state: "visible", timeout: 15000 })
      .catch(() => {});
    if (await this._firstResultCard.isVisible()) {
      await this._firstResultCard.click({ delay: 50 }).catch(() => {});
    }
    if (await this._continueButton.isVisible()) {
      await this._continueButton.click({ force: true });
    }
  }
}
