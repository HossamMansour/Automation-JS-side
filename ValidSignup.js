class ValidSignup
{

  navigate(){

    cy.visit('/register')
    return this;
    
    }
    
    EnterFname(Fname){
    
    cy.get('#firstname')
    .clear()
    .type(Fname);
    
    return this;
    }
    
    EnterLastname(Lastname){
    
        cy.get('#lastname')
        .clear()
        .type(Lastname);
    
    return this; 
    }

    EnterEmail(Email){
    
        cy.get('#email')
        .clear()
        .type(Email);
    
    return this; 
    }

    EnterValidPassword(Password){
    
        cy.get('.css-1xmsobw')
        .clear()
        .type(Password);
    
    return this; 
    }

    SignupSubmit(){
    
       cy.get('.css-6lejne')
       .click();
    
     return this;
     }


}

export default ValidSignup