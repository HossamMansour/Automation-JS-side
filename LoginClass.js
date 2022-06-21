 class LoginClass
{

Navigate(){

cy.visit('/login')
return this;

}

EnterUserName(username){

cy.get('.css-1n6f2sr')
.clear()
.type(username);

return this;
}

EnterPassword(password){

    cy.get('.css-1xmsobw')
    .clear()
    .type(password);

return this; 
}
Submit(){

   cy.get('.css-14ghl4e')
   .click();

 return this;
 }
}

export default LoginClass



