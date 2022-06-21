import LoginClass from '../support/PageObjects/LoginClass'
import ValidSignup from '../support/PageObjects/ValidSignup'

describe("Career intersets page validations using page objects modal", function(){

    it("Check Empty Fields validations",function(){
     
         const S =  new LoginClass();

         S.Navigate()
                   .EnterUserName("hossam@cypress.net")
                   .EnterPassword("12345678")
                   .Submit();

         cy.get('.css-1kqwv1a').click()

         cy.get(':nth-child(2) > .css-tukd06 > .css-1mk5lo3').should('have.text','This is a required field')
         cy.get(':nth-child(3) > .css-tukd06 > .css-1mk5lo3').should('have.text','This is a required field')
         cy.get(':nth-child(4) > .custom-selectbox > .date-picker-wrapper__error').should('contains.text','This is a required field')
         cy.get(':nth-child(5) > .custom-selectbox > .date-picker-wrapper__error').should('contains.text','This is a required field')
         cy.get('.css-1mrz7hs').should('have.text','This is a required field')
         cy.get(':nth-child(7) > .custom-selectbox > .date-picker-wrapper__error').should('contains.text','This is a required field')
         

    })

    it("Select all job type with no errors",function(){
     
        const S =  new LoginClass();

        S.Navigate()
                  .EnterUserName("hossam@cypress.net")
                  .EnterPassword("12345678")
                  .Submit()

       cy.get('.css-3dejfc > :nth-child(1)').click()
       cy.get(':nth-child(2) > .css-1lylxjf').click()
       cy.get(':nth-child(3) > .css-1lylxjf').click()
       cy.get(':nth-child(4) > .css-1lylxjf').click()
       cy.get(':nth-child(5) > .css-1lylxjf').click()
       cy.get(':nth-child(6) > .css-1lylxjf').click()
       cy.get(':nth-child(7) > .css-1lylxjf').click()
       cy.get('.css-3dejfc > :nth-child(8)').click()

       cy.get('.css-1kqwv1a').click()

       cy.get(':nth-child(3) > .css-tukd06 > .css-1mk5lo3').should('not.exist')

                })


    it("Add at least 2 items on job titles",function(){
                    
        const S =  new LoginClass();

        S.Navigate()
                  .EnterUserName("hossam@cypress.net")
                  .EnterPassword("12345678")
                  .Submit()

        cy.get('#react-select-2--value > .Select-placeholder').type('software tester{Enter}')
        cy.get('.css-1kqwv1a').click()

        cy.get(':nth-child(4) > .custom-selectbox > .date-picker-wrapper__error').should('contains.text','Add at least 2.')
      


                })


         it.skip("Add more than 10 items on job titles",function(){
                    
              const S =  new LoginClass();
            
             S.Navigate()
            .EnterUserName("hossam@cypress.net")
            .EnterPassword("12345678")
            .Submit()

        cy.get(':nth-child(4) > .custom-selectbox > .Select > .Select-control').click().type('software tester{enter}')
             .type('Call center{enter}')
             .type('Accountant{enter}')
             .type('Teacher{enter}')
             .type('PHP developer')
             .type('Social media specialist')
             .type('Front end developer')
             .type('software Engineer')
             .type('Scrum master')
             .type('Civil Engineer')
             .type('Graphic Designer')

        cy.get('.css-1kqwv1a').click()
            
       cy.get(':nth-child(4) > .custom-selectbox > .date-picker-wrapper__error').should('contains.text',' You have reached the job titles limit (10).')
                  
            
            
                            })   

   it("Add more than 10 items on job categories",function(){
                    
        const S =  new LoginClass();

        S.Navigate()
                  .EnterUserName("hossam@cypress.net")
                  .EnterPassword("12345678")
                  .Submit()

        cy.get(':nth-child(5) > .custom-selectbox > .Select > .Select-control').click().type('And{downArrow}{enter}')
            .type('mar{downArrow}{enter}')
            .type('cust{downArrow}{enter}')
            .type('qua{downArrow}{enter}')
            .type('dev{downArrow}{enter}')
            .type('wr{downArrow}{enter}')  
            .type('Ba{downArrow}{enter}')          
            .type('crea{downArrow}{enter}')          
            .type('Edu{downArrow}{enter}')          
            .type('Eng{downArrow}{enter}')          
            .type('Admin{downArrow}{enter}')          

        cy.get('.css-1kqwv1a').click()

        cy.get(':nth-child(5) > .custom-selectbox > .date-picker-wrapper__error').should('contains.text','You have reached the job categories limit (10).')
      
                })

    it("Add Zero OR String on a Salary field",function(){
                    
        const S =  new LoginClass();

        S.Navigate()
                  .EnterUserName("hossam@cypress.net")
                  .EnterPassword("12345678")
                  .Submit()
                  cy.wait(5000)

        cy.get('.css-15r58nl').type('0')
        cy.get('.css-1kqwv1a').click()
        cy.get('.css-1mrz7hs').should('contains.text', 'This doesn\'t look right. Your salary must be a number larger than 0.')
        cy.get('.css-p538by').clear()

        cy.get('.css-p538by').type('hello')
        //cy.get('.css-1kqwv1a').click()
        cy.get('.css-1mrz7hs').should('contains.text', 'This doesn\'t look right. Your salary must be a number larger than 0.')

      
                })

    it("Hide Minimum salary",function(){
                    
        const S =  new LoginClass();

        S.Navigate()
                  .EnterUserName("hossam@cypress.net")
                  .EnterPassword("12345678")
                  .Submit()
                  cy.wait(5000)
        
        cy.get('.checkbox__input').check()
        .should('be.checked')

                })
        
   it("Select current job search status",function(){
                    
        const S =  new LoginClass();

        S.Navigate()
                  .EnterUserName("hossam@cypress.net")
                  .EnterPassword("12345678")
                  .Submit()
                  cy.wait(5000)
        
        cy.get('.css-1kqwv1a').click()
        cy.get('#react-select-6--value > .Select-placeholder').click().type('I am actively{enter}')
        cy.get(':nth-child(7) > .custom-selectbox > .date-picker-wrapper__error').should('not.exist')

                })
                
                     
   it("Uncheck Toggle",function(){
                    
        const S =  new LoginClass();

        S.Navigate()
              .EnterUserName("hossam@cypress.net")
              .EnterPassword("12345678")
              .Submit()
              cy.wait(5000)
    
        cy.get(':nth-child(3) > .switch-button > .switch-button__container').click()
       //.should('be.checked')

        cy.get(':nth-child(4) > .switch-button > .switch-button__container > .switch-button__circle').click()
        //.should('be.checked')


            })  

    it("Complete Step 1 with valid inputs",function(){
                    
        const S =  new ValidSignup();

        S.navigate()
              .EnterFname("Hossam")
              .EnterLastname("Ahmed")
              .EnterEmail(Math.floor(Math.random() * 650) + 1+'Hello_Cyp@learning.eg')
              .EnterValidPassword("12345678")
              .SignupSubmit()
              cy.wait(5000) 
              /************************************* */
              cy.get('body').then($body => {
                if ($body.find('.ReactModal__Overlay').length) {
                    cy.log('modal is here')
                   
                  cy.get('.css-l322kb > svg > path').click();

            
                }
                else
                {
                       cy.log('hello');
                }
            })
            /********************************************** */

            cy.get(':nth-child(3) > [tabindex="0"] > .panel-body').click()

            cy.get('.css-3dejfc > :nth-child(1)').click()
            cy.get('.css-3dejfc > :nth-child(6)').click()

            cy.get(':nth-child(3) > .custom-selectbox > .Select > .Select-control').click()
             .type('software tester{enter}')
             .type('Quality control{enter}')
             .type('Automation tester{enter}')

             cy.get(':nth-child(4) > .custom-selectbox > .Select > .Select-control').click().type('it/{downArrow}{enter}')
            .type('qual{downArrow}{enter}')
            .type('engineering - tel{downArrow}{enter}')

            cy.get('.css-15r58nl').type('5000')
            cy.get('.checkbox__input').check()

            cy.get('#react-select-6--value > .Select-placeholder').click().type('I am actively{enter}')

            cy.get(':nth-child(3) > .switch-button > .switch-button__container').click()
            cy.get(':nth-child(4) > .switch-button > .switch-button__container > .switch-button__circle').click()

            /*cy.get('.css-1hwfws3').click()
            .type('Automation testing{downArrow}{enter}')
            .type('API testing{downArrow}{enter}')*/

            cy.get('.css-aq49v0 > :nth-child(1)').click()
            cy.get('.css-aq49v0 > :nth-child(2)').click()

            cy.get('.css-1kqwv1a').click()

            cy.wait(15000)

            cy.url().should('contain','https://testing.wuzzuf.basharsys.com/setup/general-info')
              
                         })        
                            
})
