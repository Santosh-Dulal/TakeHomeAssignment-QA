import CreateEmployee_PO from "../support/POM/CreateEmployee_PO"

describe('Employee record creation functionality via DDT', () => {
beforeEach(() => {
     cy.login() // login is a command
})
   let ce=new CreateEmployee_PO()
    it('Create Employee Records', () => {
        cy.fixture('employeeData').then((data)=>{
            data.forEach((emp)=>{
                ce.verifyEmployeeRecordCreation(emp)
                cy.contains('Employee record added successfully').should('be.visible')
            })
            
        })

        
    })

    it('Check Duplicate Emails', () => {
        cy.fixture('employeeData').then((data) => {

            const emp = data[0]   

           
            ce.verifyEmployeeRecordCreation(emp)
            cy.contains('Employee record added successfully')
                .should('be.visible')

            
            ce.verifyEmployeeRecordCreation(emp)

            cy.contains('Email already exists')
                .should('be.visible')

        })
    })
    
});