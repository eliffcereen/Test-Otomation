//  //h1["Yatırım Fonları"]

/// <reference types="cypress" />



describe('Testimiz',()=>{
    before('siteye git',()=>{
        cy.visit('https://www.tebportfoy.com.tr/yatirim-fonlari')

    })

    it('mutualFunds', () => {
        cy.xpath('//h1["Yatırım Fonları"]').should('be.visible').as('title')
        cy.xpath('//input[@id="searchFunds"]').should('be.visible').click()
        cy.xpath('//span[@title="Fon Grubu Seçin"]').should("be.visible").click()
        cy.xpath('//span[@id="select2-fundFilter-container"]').should("be.visible").click().click()
        cy.xpath('//img[@alt="Detail Filter"]').should("be.visible").as('filter button')
        cy.xpath('//label[@class="label-container"]').should("be.visible")//.click()
        cy.xpath('//a[@id="ContentPlaceHolder1_ctl00_rptFund_linkFund_0"]').should('have.text', 'Tematik Fonlar')
       // cy.scrollTo(0,650,{duration:1000})
       cy.xpath('//a[@id="ContentPlaceHolder1_ctl00_rptFund_linkFund_1"]').should('have.text', 'Para Piyasası Fonları')
       cy.xpath('//a[@id="ContentPlaceHolder1_ctl00_rptFund_linkFund_2"]').should('have.text', 'Kıymetli Maden Fonları')
       cy.xpath('//a[@id="ContentPlaceHolder1_ctl00_rptFund_linkFund_3"]').should('have.text', 'Süreli Serbest Döviz Fonlar')
       cy.xpath('//a[@id="ContentPlaceHolder1_ctl00_rptFund_linkFund_4"]').should('have.text', 'Serbest Döviz Fonlar')
       cy.xpath('//a[@id="ContentPlaceHolder1_ctl00_rptFund_linkFund_5"]').should('have.text', 'Serbest Fonlar')
       cy.xpath('//a[@id="ContentPlaceHolder1_ctl00_rptFund_linkFund_6"]').should('have.text', 'Hisse Senedi Fonları')
       cy.xpath('//a[@id="ContentPlaceHolder1_ctl00_rptFund_linkFund_7"]').should('be.visible')
       cy.xpath('//a[@id="ContentPlaceHolder1_ctl00_rptFund_linkFund_8"]').should('be.visible')
       cy.xpath('//a[@id="ContentPlaceHolder1_ctl00_rptFund_linkFund_9"]').should('be.visible')
       cy.xpath('//a[@id="ContentPlaceHolder1_ctl00_rptFund_linkFund_10"]').should('be.visible')
    })
    

})
