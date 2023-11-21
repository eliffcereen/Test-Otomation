/// <reference types="cypress" />



describe('Testimiz',()=>{
    before('siteye git',()=>{
        cy.visit('https://www.tebportfoy.com.tr/yatirim-fonlari/yatirim-fonunu-nereden-alabilirim')

    })

    it('mutualFunds1', () => {
        cy.xpath('//img[@class="wow fadeInUp animate__animated"]').should('be.visible')
        cy.scrollTo(0,650,{duration:1000})
        cy.xpath('//div[@class="video-item-inner"]').should("be.visible")
        cy.scrollTo(0,1400,{duration:1000})
        cy.xpath('//ul[@class="list-default"]').should('be.visible')//.scrollIntoView({ duration: 1000 })
    })
    

})
