describe("JS signup page", function(){
    it("Submit Empty Fields",function(){
        /*
            Prerequisit:
            Go to the JS sign up page
        */
        cy.visit('/register')

        /*
            Action:
            Submit Sign up form While fields are Empty
        */
            cy.get('.css-6lejne').click()
        /*
        Assertion:
          - Validation messages appeared on Firstname - Lastname - Email - Password Fieds
          - Page kept on JS sign up page and not redirected to any page
        */
          cy.get(':nth-child(1) > .css-y0dsrb').should('have.text','Please enter your first name.')
          cy.get('.css-1w6b0ve > :nth-child(2) > .css-y0dsrb').should('have.text','Please enter your last name.')
          cy.get('.eepjrh81 > .css-y0dsrb').should('have.text','Please enter your email address')
          cy.get('.eepjrh80 > .css-y0dsrb').should('have.text','Please enter your password .')
    })

    it("Submit with Fname length less than 2",function(){
        /*
            Prerequisit:
            Go to the JS sign up page
        */
        cy.visit('/register')

        /*
            Action:
            Submit Sign up form While user entering char less than 2 in Fname field
        */
            cy.get('#firstname').type('H')
            cy.get('#lastname').type('World')
            cy.get('#email').type(Math.floor(Math.random() * 100) + 1+'auto_Cy@learning.com')
            cy.get('.css-1xmsobw').type('12345678')
            cy.get('.css-6lejne').click()
        /*
        Assertion:
          - Validation messages appeared on Firstname
          - Page kept on JS sign up page and not redirected to any page
        */
          cy.get('.css-y0dsrb').should('have.text','Name must be 2 characters at least')
          
    })

    it("Submit with Entering speical char on Fname",function(){
        /*
            Prerequisit:
            Go to the JS sign up page
        */
        cy.visit('/register')

        /*
            Action:
            Submit Sign up form While user entering special char on Fname field
        */
            cy.get('#firstname').type('!@#$%&')
            cy.get('#lastname').type('World')
            cy.get('#email').type(Math.floor(Math.random() * 100) + 1+'auto_Cy@learning.com')
            cy.get('.css-1xmsobw').type('12345678')
            cy.get('.css-6lejne').click()
        /*
        Assertion:
          - Validation messages appeared on Firstname
          - Page kept on JS sign up page and not redirected to any page
        */
          cy.get('.css-y0dsrb').should('have.text','Name must not have special characters')
          
    })

    it("Submit with Lname length less than 2",function(){
        /*
            Prerequisit:
            Go to the JS sign up page
        */
        cy.visit('/register')

        /*
            Action:
            Submit Sign up form While user entering char less than 2 in Lname field
        */
            cy.get('#firstname').type('Hello')
            cy.get('#lastname').type('W')
            cy.get('#email').type(Math.floor(Math.random() * 100) + 1+'auto_Cy@learning.com')
            cy.get('.css-1xmsobw').type('12345678')
            cy.get('.css-6lejne').click()
        /*
        Assertion:
          - Validation messages appeared on Lastname
          - Page kept on JS sign up page and not redirected to any page
        */
          cy.get(':nth-child(2) > .css-y0dsrb').should('have.text','Name must be 2 characters at least')
          
    })

    it("Submit with  entering special char on Lname ",function(){
        /*
            Prerequisit:
            Go to the JS sign up page
        */
        cy.visit('/register')

        /*
            Action:
            Submit Sign up form While user entering special char on Lname field
        */
            cy.get('#firstname').type('Hello')
            cy.get('#lastname').type('*&^%$#@!')
            cy.get('#email').type(Math.floor(Math.random() * 100) + 1+'auto_Cy@learning.com')
            cy.get('.css-1xmsobw').type('12345678')
            cy.get('.css-6lejne').click()
        /*
        Assertion:
          - Validation messages appeared on Lastname
          - Page kept on JS sign up page and not redirected to any page
        */
          cy.get(':nth-child(2) > .css-y0dsrb').should('have.text','Name must not have special characters')
          
    })

    it("Submit with Invalid Email",function(){
        /*
            Prerequisit:
            Go to the JS sign up page
        */
        cy.visit('/register')

        /*
            Action:
            Submit Sign up form While user entering invalid Email
        */
            cy.get('#firstname').type('Hello')
            cy.get('#lastname').type('World')
            cy.get('#email').type('Cypress@automation')
            cy.get('.css-1xmsobw').type('12345678')
            cy.get('.css-6lejne').click()
        /*
        Assertion:
          - Validation messages appeared on Email field
          - Page kept on JS sign up page and not redirected to any page
        */
          cy.get('.eepjrh81 > .css-y0dsrb').should('have.text','Please enter a valid email address')
          
    })

    it("Submit with an existing Email",function(){
        /*
            Prerequisit:
            Go to the JS sign up page
        */
        cy.visit('/register')

        /*
            Action:
            Submit Sign up form While user entering an existing Email
        */
            cy.get('#email').type('hossam.alfcih@yahoo.com')
            cy.get('.css-1xmsobw').type('12345678')
            cy.get('.css-6lejne').click()
        /*
        Assertion:
          - Validation messages appeared on Email field
          - Page kept on JS sign up page and not redirected to any page
        */
          cy.get('.eepjrh81 > .css-y0dsrb').should('have.text','This email already exists. Sign in here')
          
    })

    it("Submit with Password length less than 8",function(){
        /*
            Prerequisit:
            Go to the JS sign up page
        */
        cy.visit('/register')

        /*
            Action:
            Submit Sign up form While user entering password length less than 8
        */
            cy.get('#firstname').type('Hello')
            cy.get('#lastname').type('World')
            cy.get('#email').type(Math.floor(Math.random() * 100) + 1+'auto_Cy@learning.com')
            cy.get('.css-1xmsobw').type('123456')
            cy.get('.css-6lejne').click()
        /*
        Assertion:
          - Validation messages appeared on password field
          - Page kept on JS sign up page and not redirected to any page
        */
          cy.get('.eepjrh80 > .css-y0dsrb').should('have.text','Please enter at least 8 characters')
          
    })


    it("Submit with valid Fields",function(){
        /*
            Prerequisit:
            Go to the JS sign up page
        */
        cy.visit('/register')

        /*
            Action:
            Submit Sign up form While all fields are valid
        */
            cy.get('#firstname').type('Hello')
            cy.get('#lastname').type('World')
            cy.get('#email').type(Math.floor(Math.random() * 100) + 1+'auto_Cyp@learning.eg')
            cy.get('.css-1xmsobw').type('12345678')
            cy.get('.css-6lejne').click()
        /*
        Assertion:
          page redirects to the 1st page in JS profile creation (career interests page)
          
        */
          cy.url().should('contain','https://testing.wuzzuf.basharsys.com/setup/career-interests')
    })


})