import {BasePage } from './BasePage.js';

export class InventoryPage extends BasePage{
    constructor(page){
        super(page);
        this.title = page.locator('[data-test="title"]');
        this.productList = page.locator('[data-test="inventory-list"]');

    }
    async isLoaded(){
        try{
            await this.productList.waitFor({ state: 'visible', timeout: 5000});
            return true;

        } catch {
            return false;

        }

    
    }
}