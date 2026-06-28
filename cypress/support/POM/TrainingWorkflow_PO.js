class TrainingWorkflow_PO
{
    lnkTraningModule='#traning-module'
    drpnEmployee='#emp-dropdown'
    drpnTrainingModule='#train-mod'
    drpnDueDate='#due-date'
    btnAssign='btn-assign'

    verifyTrainingModuleAssignment(data)
    {
        
        cy.get(this.menuTrainingModule).click()
        cy.get(this.drpEmployee).select(data.employee)
        cy.get(this.drpTrainingModule).select(data.trainingModule)
        cy.get(this.datePickerDueDate).click()
        cy.get(this.datePickerDueDate).type(data.dueDate)
        cy.get(this.datePickerDueDate).type('{enter}')
        cy.get(this.btnAssign).click()

    }



}
export default TrainingWorkflow_PO