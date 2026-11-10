 import { BasePage } from './BasePage.js';

export class LoginPage extends BasePage {
    constructor(page) {
        super(page);
        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('[data-test="login-button"]');
        this.errorMessage = page.locator('[data-test="error"]');

    }
    async login(username, password){
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();

    }
    async getErrorMessage(){
        try {
            await this.errorMessage.waitFor({ state: 'visible', timeout: 5000 });
            return (await this.errorMessage.textContent()).trim();

           
        }
        catch {
            return '';

        }

    }

}