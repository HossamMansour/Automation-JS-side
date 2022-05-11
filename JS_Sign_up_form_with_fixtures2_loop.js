
describe("JS signup page-Empty fields", function(){

    before(function(){
        cy.fixture("Sign_up_data.json").then(function(data){
                this.data=data
            }
        )
    })


    it("Check Empty Fields validations",function(){

        cy.visit('/register')

        
            cy.get('.css-6lejne').click()
        
          cy.get(':nth-child(1) > .css-y0dsrb').should('have.text',this.data.Empty_Fname_errormessage)
          cy.get('.css-1w6b0ve > :nth-child(2) > .css-y0dsrb').should('have.text',this.data.Empty_Lname_errormessage)
          cy.get('.eepjrh81 > .css-y0dsrb').should('have.text',this.data.Empty_Email_errormessage)
          cy.get('.eepjrh80 > .css-y0dsrb').should('have.text',this.data.Empty_Password_errormessage)
    })
})

describe("JS signup page- Fields Validations", function(){

    before(function(){
        cy.fixture("Validations_data_using_loop.json").then(function(data){
                this.data=data
            }
        )
    })


    it("Check Error valdiation messages",function(){
       
      
                cy.visit('/register')

                this.data.forEach(signupData => {   

            cy.get('#firstname').clear().type(signupData.firstname)
            cy.get('#lastname').clear().type(signupData.lastName)
            cy.get('#email').clear().type(signupData.email)
            cy.get('.css-1xmsobw').clear().type(signupData.password)
            //cy.get('.css-6lejne').click()

          cy.get('.css-y0dsrb').should('have.text',signupData.errormessage)

        })
    })

})



describe("JS signup page-Success sign up", function(){

    before(function(){
        cy.fixture("Sign_up_data.json").then(function(data){
                this.data=data
            }
        )
    })
    
    it("Submit with valid inputs",function(){
        
        cy.visit('/register')

        
            cy.get('#firstname').type(this.data.firstName)
            cy.get('#lastname').type(this.data.lastName)
            cy.get('#email').type(Math.floor(Math.random() * 1000) + 1+this.data.email)
            cy.get('.css-1xmsobw').type(this.data.password)
            cy.get('.css-6lejne').click()
            cy.wait(10000)
        
          cy.url().should('contain',this.data.Career_interset_URL)
    })

})
