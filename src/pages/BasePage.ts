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
    try {
      await this.page.goto(url, {
        timeout: process.env.CI ? 30000 : 15000, // Longer timeout in CI
        waitUntil: 'networkidle',
      });
      await this.page.waitForTimeout(2000); // Wait for dynamic content
    } catch (error) {
      console.log("⚠️ Navigation failed, trying alternative approach...");
      // Try without waitUntil in case of network issues
      await this.page.goto(url, {
        timeout: process.env.CI ? 45000 : 20000,
      });
      await this.page.waitForTimeout(3000);
    }
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
