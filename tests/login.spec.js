import { test, expect } from '@playwright/test';
import fs from 'fs';
import { LoginPage } from '../pages/LoginPage.js';
import { InventoryPage } from '../pages/InventoryPage.js';

const users = JSON.parse(
  fs.readFileSync(new URL('../data/users.json', import.meta.url), 'utf-8')
);

for (const user of users) {
  test(`login: ${user.username} / ${user.password} -> ${user.expected}`, async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.open();
    await loginPage.login(user.username, user.password);

    if (user.expected === 'success') {
      expect(await inventoryPage.isLoaded()).toBe(true);
    } else {
      const errorText = await loginPage.getErrorMessage();
      expect(errorText).not.toBe('');
    }
  });
}