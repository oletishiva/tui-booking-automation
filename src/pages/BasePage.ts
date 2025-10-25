import { Page } from "@playwright/test";

export abstract class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Navigate to a specific URL
   */
  async navigateTo(url: string): Promise<void> {
    await this.page.goto(url, {
      waitUntil: "domcontentloaded",
      timeout: 30000,
    });
    await this.page.waitForTimeout(2000); // Wait for dynamic content
  }

  /**
   * Wait for page to be fully loaded
   */
  async waitForPageLoad(): Promise<void> {
    try {
      await this.page.waitForLoadState("networkidle", { timeout: 10000 });
    } catch (error) {
      console.log("⚠️ Network idle timeout, continuing...");
    }
  }

  /**
   * Take a screenshot for debugging
   */
  async takeScreenshot(filename: string): Promise<void> {
    await this.page.screenshot({
      path: `screenshots/${filename}`,
      fullPage: true,
    });
  }

  /**
   * Save page source for debugging
   */
  async savePageSource(filename: string): Promise<void> {
    const content = await this.page.content();
    const fs = await import("fs");
    fs.writeFileSync(filename, content);
  }
}
