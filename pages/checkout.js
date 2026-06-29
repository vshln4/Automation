const {expect} =require('@playwright/test')
class checkout{
    constructor(page){
        /** @type {import('@playwright/test').Page} page */
        this.page=page
        this.firstName=this.page.getByPlaceholder("First Name")
        this.lastName=this.page.getByPlaceholder("Last Name")
        this.zip=this.page.getByPlaceholder("Zip/Postal Code")
        this.continueBtn=this.page.getByRole('button',{name:'Continue'})
        this.cancelBtn=this.page.getByRole('button',{name:'Cancel'})
        this.finishBtn=this.page.getByRole('button',{name:'Finish'})
        this.successMsg=this.page.locator("[data-test='complete-header']")
        

    }
    async details(firstName,lastName,zip){
        this.firstName.fill(firstName)
        this.lastName.fill(lastName)
        this.zip.fill(zip)
    }
    async finishOrder() {
    await this.finishBtn.click();
  }

  async isOrderComplete() {
    await expect(this.successMsg).toHaveText('Thank you for your order!');
  }
}

module.exports = { Checkout };

