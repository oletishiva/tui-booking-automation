import { Locator, Page } from "@playwright/test";

export class FlightsPage {
  constructor(private readonly page: Page) {}

  // Locators first
  private get _selectButton(): Locator {
    return this.page.getByRole("button", { name: /select/i }).first();
  }

  private get _continueButton(): Locator {
    return this.page.getByRole("button", { name: /continue/i }).first();
  }

  // Actions
  async selectAvailableFlightsAndContinue(): Promise<void> {
    if (await this._selectButton.isVisible()) {
      await this._selectButton.click({ force: true }).catch(() => {});
    }
    await this._continueButton
      .waitFor({ state: "visible", timeout: 15000 })
      .catch(() => {});
    if (await this._continueButton.isVisible()) {
      await this._continueButton.click({ force: true });
    }
  }
}
