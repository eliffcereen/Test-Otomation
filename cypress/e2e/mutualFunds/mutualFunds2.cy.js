/// <reference types="cypress" />



describe('Testimiz',()=>{
    before('siteye git',()=>{
        cy.visit('https://www.tebportfoy.com.tr/yatirim-fonlari/fon-videolari')

    })

    it('mutualFunds2', () => {
        cy.xpath('//h1["Fon Videoları"]').should('be.visible').as("title")
        cy.xpath('//a[@class="active"]').should("be.visible").click()
       // cy.scrollTo(0,1400,{duration:1000})
        cy.xpath('//a[@href="#menu83"]').should('be.visible').click()
        cy.xpath('//a[@href="#menu84"]').should('be.visible').click()
    })
    

})