import { Locator } from "@playwright/test";

export class Assertions {
  static async visible(locator: Locator, errorMessage: string): Promise<void> {
    if (!(await locator.isVisible())) {
      throw new Error(errorMessage);
    }
  }

  static async enabled(locator: Locator, errorMessage: string): Promise<void> {
    if (!(await locator.isEnabled())) {
      throw new Error(errorMessage);
    }
  }

  static async hasText(
    locator: Locator,
    expected: RegExp | string,
    errorMessage: string,
  ): Promise<void> {
    const text = await locator.textContent();
    const ok =
      typeof expected === "string"
        ? text?.includes(expected)
        : expected.test(text || "");
    if (!ok) {
      throw new Error(errorMessage);
    }
  }
}
