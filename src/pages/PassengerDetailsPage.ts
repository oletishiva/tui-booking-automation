import { Locator, Page } from "@playwright/test";

export class PassengerDetailsPage {
  constructor(private readonly page: Page) {}

  // Locators first
  private get _continueButton(): Locator {
    return this.page.getByRole("button", { name: /continue/i }).first();
  }

  // Error message locators (subset commonly seen)
  get titleError(): Locator {
    return this.page.getByText(/Please select a title\./i).first();
  }
  get firstNameError(): Locator {
    return this.page.getByText(/Please fill in your first name\./i).first();
  }
  get surnameError(): Locator {
    return this.page.getByText(/Please fill in your surname\./i).first();
  }
  get dobError(): Locator {
    return this.page.getByText(/Please fill in your date of birth/i).first();
  }
  get postcodeError(): Locator {
    return this.page.getByText(/Please enter a valid UK postcode\./i).first();
  }
  get phoneError(): Locator {
    return this.page.getByText(/Please enter a valid UK phone number/i).first();
  }
  get emailError(): Locator {
    return this.page.getByText(/Please enter a valid email address/i).first();
  }

  // Actions
  async continueToTriggerValidations(): Promise<void> {
    await this._continueButton
      .waitFor({ state: "visible", timeout: 15000 })
      .catch(() => {});
    await this._continueButton.click({ force: true }).catch(() => {});
  }

  // Expose a bundle of common validation locators for test-side assertions
  getValidationErrorLocators(): Record<string, Locator> {
    return {
      title: this.titleError,
      firstName: this.firstNameError,
      surname: this.surnameError,
      dob: this.dobError,
      postcode: this.postcodeError,
      phone: this.phoneError,
      email: this.emailError,
    };
  }
}
