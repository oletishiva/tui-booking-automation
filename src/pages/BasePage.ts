import { Page } from "@playwright/test";
import { TestConfig } from "../config/testConfig";

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
        timeout: TestConfig.navigationTimeout,
        // waitUntil: 'networkidle', // Removed due to proxy/network issues
      });
      await this.page.waitForTimeout(2000); // Wait for dynamic content
    } catch {
      console.log("⚠️ Navigation failed, trying alternative approach...");
      // Try without waitUntil in case of network issues
      await this.page.goto(url, {
        timeout: TestConfig.navigationTimeout + 15000,
      });
      await this.page.waitForTimeout(3000);
    }
  }

  /**
   * Wait for page to be fully loaded
   */
  async waitForPageLoad(): Promise<void> {
    // Commented out due to proxy/network issues
    // try {
    //   await this.page.waitForLoadState("networkidle", { timeout: TestConfig.networkIdleTimeout });
    // } catch (error) {
    //   console.log("⚠️ Network idle timeout, continuing...");
    // }
    console.log("⚠️ Skipping network idle wait due to proxy issues");
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
