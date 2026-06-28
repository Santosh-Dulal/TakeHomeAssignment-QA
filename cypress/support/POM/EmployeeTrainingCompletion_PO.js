class EmployeeTrainingCompletion_PO
{
    drpnCompletionDate='#completion-date'
    txtEmployeeNote='#notes'
    btnSubmit='#submit'

    verifyEmployeecCompleteTraining(record) {

        cy.get(this.drpEmployee).select(record.employee)
        cy.get(this.drpTraining).select(record.trainingModule)

        
        cy.get(this.drpCompletionDate).click()
        cy.get(this.drpCompletionDate).type(record.completionDate)
        cy.get(this.drpCompletionDate).type('{enter}')

        cy.get(this.txtEmployeeNote).clear().type(record.note)

        cy.get(this.btnSubmit).click()
    }
}

export default EmployeeTrainingCompletion_PO