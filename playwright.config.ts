import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testDir: "./tests",
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  reporter: [["html", { outputFolder: "test-report" }]],
  use: {
    viewport: { width: 1280, height: 720 },
    baseURL: "https://the-internet.herokuapp.com",
    headless: true,
    screenshot: "only-on-failure",
  },
};

export default config;
