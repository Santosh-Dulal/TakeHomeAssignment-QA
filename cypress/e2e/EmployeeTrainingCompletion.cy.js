import TrainingWorkflow_PO from "../support/POM/TrainingWorkflow_PO";

describe('Employee Training Completion funcnatlity with ddt', () => {

    beforeEach(() => {
        cy.login()
        cy.visit('https://workforcepro.base44.app/trainings-completion')
    })
    it('Complete training by the employee', () => {
        cy.fixture('trainingCompletionData').then((data) => {

            data.forEach((record) => {

                training.completeTraining(record)

                cy.contains('Training marked as completed')
                    .should('be.visible')

            })

        })

    
    })
});