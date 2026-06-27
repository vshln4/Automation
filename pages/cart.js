const {expect} =require('@playwright/test')
class carts{
    constructor(page){
        /** @type {import('@playwright/test').Page} page */
        this.page=page
        this.cartTitle=this.page.locator("[data-test='title']")
        this.removebutton=this.page.getByRole('button',{name:'Remove'})
        this.checkout=this.page.getByRole('button',{name:'Checkout'})
        this.continue_button=this.page.getByRole('button',{name:'Continue Shopping'})
        this.itemName=this.page.locator("[data-test='inventory-item-name']")
    }
    async cartUrl(){
        await expect(this.page).toHaveURL('https://www.saucedemo.com/cart.html')

    }

    async remove(){
        await (this.removebutton).click()
    }
    async checkout_page(){
        await (this.checkout).click()
    }
    async continue_shopping(){
        await (this.continue_button).click()
}
  async verifyItem(name) {
    await expect(this.itemName).toHaveText(name);
}
}

module.exports={carts}