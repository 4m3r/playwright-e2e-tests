import { expect, test } from "../../custom-fixtures/baseFixture";
import { RealWorldApp } from "../../page-objects/RealWorldApp";

test.describe("Register new user", function () {
  test("Should be able to register new user", async ({ page }) => {
    const app = new RealWorldApp(page);
    await app.RegisterPage.visit();
    await expect(page).toHaveTitle("Sign up — Conduit");
  });
});
