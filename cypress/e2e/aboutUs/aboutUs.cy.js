/// <reference types="cypress" />



describe('Testimiz',()=>{
    before('siteye git',()=>{
        cy.visit('https://www.tebportfoy.com.tr/teb-portfoy-yonetimi/hakkimizda')

    })

    it('hakkımızda', () => {
        cy.xpath('//h1["Hakkımızda"]').should('be.visible').as('title')
        cy.xpath('//img[@alt="Hakkımızda"]').should('be.visible')
        cy.scrollTo(0,650,{duration:1000})
        cy.xpath('//div[@class="history-bar-content"]').should("be.visible").as("hist-bar")
        cy.scrollTo(0,1270,{duration:1000})
        cy.xpath('//div[@class="big-icon-list"]').should("be.visible")
    })
    

})
