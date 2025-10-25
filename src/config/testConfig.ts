export const TestConfig = {
  baseUrl: process.env.BASE_URL || "https://www.tui.co.uk/flight/",
  navigationTimeout: process.env.CI
    ? parseInt(process.env.CI_NAVIGATION_TIMEOUT || "45000")
    : parseInt(process.env.NAVIGATION_TIMEOUT || "30000"),
  actionTimeout: process.env.CI
    ? parseInt(process.env.CI_ACTION_TIMEOUT || "90000")
    : parseInt(process.env.ACTION_TIMEOUT || "60000"),
  globalTimeout: process.env.CI
    ? parseInt(process.env.CI_GLOBAL_TIMEOUT || "180000")
    : parseInt(process.env.GLOBAL_TIMEOUT || "120000"),
  networkIdleTimeout: process.env.CI
    ? parseInt(process.env.CI_NETWORK_IDLE_TIMEOUT || "15000")
    : parseInt(process.env.NETWORK_IDLE_TIMEOUT || "10000"),
};
