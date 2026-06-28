import TrainingWorkflow_PO from "../support/POM/TrainingWorkflow_PO";

describe('Training Module Assignment functioanlity with DDT approach', () => {

    beforeEach(() => {
        cy.login()
        cy.visit('https://workforcepro.base44.app/trainings')
    })

    let twf=new TrainingWorkflow_PO()

    it('Assign training module to the employee by the supervisor', () => {
        cy.fixture('trainingData').then((data) => {

            data.forEach((record) => {

                twf.verifyTrainingModuleAssignment(record)

                cy.contains('Training assigned successfully')
                    .should('be.visible')

                //Verify assignment appears in employee record 
                cy.contains(record.trainingMoudule).should('be.visible')
               

            })

        })

    
    })
})