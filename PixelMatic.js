describe('PixelMatic Regression Test Suit', function () {

    it('Hit the URL', function () {
        // Hitting URL

        cy.visit('http://192.168.95.73:8080')
        cy.wait(5000)
    })

    it('Has a logo', function Logo() {
        cy.get('#if_logo').should('have.attr', 'src', 'assets/img/infinitefleet.jpeg')
    })


    it('Click On Home', function () {

        cy.get('#home').click({ force: true });
        cy.wait(3000)

        cy.get('#if_logo').should('have.attr', 'src', 'assets/img/infinitefleet.jpeg')

    })

    it('Click On Form', function () {


        cy.get('#form').click({ force: true });
        cy.wait(500)

        cy.url().should('include', '/form.html');
        cy.log('URL Changed to /form Successfully');
        cy.wait(3000)
        cy.get('#if_logo').should('have.attr', 'src', 'assets/img/infinitefleet.jpeg')
    })

    it('Click On Error', function () {


        cy.get('#error').click({ force: true });
        cy.wait(1000)

        cy.url().should('include', '/error.html');
        cy.log('URL Changed to /error Successfully');
        cy.wait(3000)
        cy.go('back')
    })


    it('Check <h1> Tag', function () {

        //cy.reload(true);
        cy.get('#home').dblclick({ force: true });
        cy.wait(2000)
        cy.get('body > div > div.ui-test').should('include.text', 'Welcome to Pixelmatic QA department');
        cy.wait(1000)
        cy.log('Checked <h1> Tag text');
        cy.get('#if_logo').should('have.attr', 'src', 'assets/img/infinitefleet.jpeg')
    })

    it('Check <p> Tag', function () {

        //cy.reload(true);
        cy.get('#home').dblclick({ force: true });
        cy.wait(2000)
        cy.get('body > div > div.ui-test > p').should('include.text', 'This site is dedicated to perform some exercises and demonstrate automated web testing.');
        cy.wait(1000)
        cy.log('Checked <p> Tag text');
        cy.get('#if_logo').should('have.attr', 'src', 'assets/img/infinitefleet.jpeg')
    })

    it('Input Text', function () {

        cy.get('#form').click({ force: true });
        cy.wait(5000)
        cy.get('#hello-input').click({ force: true }).type('Bilal');
        cy.wait(1000)

        cy.get('#hello-submit').click({ force: true });
        cy.url().should('include', '/hello.html?myName=Bilal');
        cy.get('#if_logo').should('have.attr', 'src', 'assets/img/infinitefleet.jpeg')

    })

    it('Verify Welcome Message', function () {

        cy.get('#hello-text').should('include.text', 'Hello Bilal!');
        cy.get('#if_logo').should('have.attr', 'src', 'assets/img/infinitefleet.jpeg')

    })

})