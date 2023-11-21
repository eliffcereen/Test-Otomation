/// <reference types="cypress" />



describe('Testimiz',()=>{
    before('siteye git',()=>{
        cy.visit('https://www.tebportfoy.com.tr/')

    })

    it('displays two todo items by default', () => {
        //section1
        cy.title().as('Title').should('eq','TEB Portföy Yönetimi')
        cy.xpath('//a[@title="Dil Seçimi"]').as('Language Menu').should('have.text','English')
        cy.xpath('//a[@title="Arama"]').as('Search Icon').click().should('have.attr', 'href')
        cy.xpath('//input[@id="searchInput"]').as("Search Input").should('be.visible').type('Fon{enter}')
        cy.xpath('//span[text() = "Kapat"]').click().as('Close')
        cy.xpath('//div[@id="lottie"]').as('scroll icon').should('be.visible')
        //cy.xpath('//div[@class="fon__info"]').scrollIntoView({ duration: 2000 })
        cy.scrollTo(0,500,{duration:1000})

        //section2
        cy.xpath('//h2/a[@title="Yatırım Fonları"]').should('have.attr', 'href').as('Fon Info')
        cy.xpath('//div[@aria-label="6 / 11"]').should('have.attr', 'role').as('Info 1')
        cy.xpath('//div[@aria-label="10 / 11"]').should('have.attr', 'role').as('Info 2')
        cy.xpath('//div[@aria-label="3 / 11"]').should('have.attr', 'role').as('Info 3')
        cy.xpath('//div[@aria-label="9 / 11"]').should('have.attr', 'role').as('Info 4')
        cy.xpath('//div[@aria-label="11 / 11"]').should('have.attr', 'role').as('Info 5')
        cy.scrollTo(0,1500,{duration:1000})

        //section3
        cy.xpath('//h2[@class="calculate__header-title"]').should('have.text', "Fon Getiri Hesaplama").as('section title')
        cy.xpath('//p[@class="calculate__header-description"]').should('be.visible').as('description')
        cy.xpath('//div[@data-val="para-piyasasi-fonlari"]').click()
        cy.xpath('//div[@data-val="kiymetli-maden-fonlari"]').click()
        cy.xpath('//div[@data-val="sureli-serbest-doviz-fonlar"]').click()
        cy.xpath('//div[@data-val="serbest-doviz-fonlar"]').click()
        cy.xpath('//div[@data-val="serbest-fonlar"]').click()
        cy.xpath('//div[@data-val="hisse-senedi-fonlari"]').click()
        cy.xpath('//div[@data-val="katilim-fonlari-faizsiz-yatirim-araclari"]').click()
        cy.xpath('//div[@data-val="borclanma-araclari-fonlari"]').click()
        cy.xpath('//div[@data-val="coklu-varlik-sinifi-fonlari"]').click()
        cy.xpath('//div[@data-val="tematik-fonlar"]').click()
        cy.xpath('//div[@data-val="fon-sepeti-fonlari"]').click()
        cy.xpath('//span[@class="selection"]').should("be.visible").as('selection').click().click()
        cy.xpath('//input[@name="alis_tarihi"]').should('have.attr', 'placeholder').as('buying date')
        cy.xpath('//input[@name="satis_tarihi"]').should('have.attr', 'placeholder').as('sales date')
        cy.xpath('//input[@name="yatirim_tutari"]').should('have.attr', 'placeholder').as('budget')
        cy.xpath('//button[@id="calcBtn"]').should('be.visible')
        cy.scrollTo(0,1850,{duration:1000})

        //section4
        cy.xpath('//h2[@class="bulletin__header-title"]').should('have.text','Fon Bülteni').as('section title')
        cy.xpath('//a[@title="Tüm Bültenler"]').as('all news')//.click()
        cy.xpath('//li[@data-year="2023"]').should('have.text','2023')
        cy.xpath('//li[@data-year="2022"]').should('have.text','2022').click()
        cy.xpath('//li[@data-year="2021"]').should('have.text','2021').click()
        cy.xpath('//h3/a[@href="/medium/Document-File-89.vsf"]')//.click()
        //cy.scrollTo(0,500,{duration:1000})

        //section5
        cy.xpath('//div[@class="videos__header"]').scrollIntoView({ duration: 1000 }).should("be.visible")
        cy.xpath('//div[@class="videos__left"]').should('be.visible').click()
        cy.xpath('//i[@aria-hidden="true"]').click({force: true})
        cy.xpath('//div[@aria-label="2 / 3"]').should('be.visible')
        cy.xpath('//div[@aria-label="3 / 3"]').should('be.visible')

        //section6
        cy.xpath('//h2[@class="news__header-title"]').scrollIntoView({ duration: 1000 }).should('have.text', 'Haberler')
        cy.xpath('//a[@class="news__header-link"]').should('be.visible')
        //cy.scrollTo(0,200,{duration:1000})

        //section7
        cy.xpath('//h2[@class="announcements__header-title"]').scrollIntoView({ duration: 1000 })
        cy.xpath('//h2[@class="announcements__header-title"]').should('have.text', 'Duyurular').as('announcement title')
        cy.xpath('//a[@class="announcements__header-link"]').should('have.text', 'Tüm Duyurular')
        cy.xpath('//div[@class="announcements__list"]').should('be.visible')

        //section8
        cy.xpath('//footer').scrollIntoView({ duration: 1000 })
        cy.xpath('//footer').should('be.visible').as('footer')
        cy.xpath('//ul[@class="footer-nav"]').should('be.visible')
        cy.xpath('//div[@class="copyright"]').should('be.visible')
        cy.xpath('//li//a[@title="Facebook"]').should('have.text', 'Facebook')//.click()
        cy.xpath('//li//a[@title="Linkedin"]').should('have.text', 'Linkedin')
        cy.xpath('//li//a[@title="Twitter"]').should('have.text', 'Twitter')
        cy.xpath('//li//a[@title="Instagram"]').should('have.text', 'Instagram')
        cy.xpath('//li//a[@title="Youtube"]').should('have.text', 'Youtube')

    })


    

})
