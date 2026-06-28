class SupervisorApproval_PO
{
    employeeRows = '.employee-row'
    drpAction = '#approval-action'
    btnSubmit = '#submit-approval'

    verifySupervisorApproval(employee)
    {

        cy.contains(this.employeeRows, employee.name).click()

        const action = employee.score < 65 ? 'Reject' : 'Approve'

        cy.get(this.drpAction).select(action)

        cy.get(this.btnSubmit).click()
    }

}
export default SupervisorApproval_PO