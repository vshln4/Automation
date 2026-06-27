const { expect } = require('@playwright/test');
class products{
    constructor(page){
        /** @type {import('@playwright/test').Page} page */
        
        this.page=page
        this.pageTitle=this.page.locator("[data-test='title']")
        this.cartButton =this.page.locator('#add-to-cart-sauce-labs-backpack')
        this.cartlink =this.page.locator("[data-test='shopping-cart-link']")
        this.sort=this.page.locator("[data-test='product-sort-container']")
        this.cartBadge = this.page.locator("[data-test='shopping-cart-badge']")
    
    }
    async loaded(){
        await expect(this.pageTitle).toHaveText('Products')
    }

    async addtocart(){
        await this.cartButton.click()
    }
    async sorting(option){
        await this.sort.selectOption(option)
    }
    async goToCart() {
    await this.cartlink.click();
  }
}

module.exports = { Products };

