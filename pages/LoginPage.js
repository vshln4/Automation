class Login{
    constructor(page){
        /** @type {import('@playwright/test').Page} page */
        this.page=page
        this.userName=this.page.locator("[data-test='username']")
        this.password=this.page.locator("#password")
        this.button=this.page.getByRole('button',{name:login-button})
    }

    async url(){
        await page.goto('https://www.saucedemo.com/')

    }
    async login_details(userName,password){
       await this.userName.fill(userName)
       await this.password.fill(password)
       await this.button.click()

    }
}
module.exports={Login}