/// <reference types="cypress" />



describe('Testimiz',()=>{
    before('siteye git',()=>{
        cy.visit('https://www.tebportfoy.com.tr/teb-portfoy-yonetimi/hakkimizda/sermaye-yapisi')

    })

    it('sermayeYapisi', () => {
        cy.xpath('//h1["Sermaye Yapısı"]').should('be.visible').as('title')
        cy.xpath('//div[@class="simple-table"]').should('be.visible').as("table")
        cy.scrollTo(0,650,{duration:1000})
      
    })
    

})
