class CreateEmployee_PO
{
// locator

btnCreateNewEmployee='#btn-newemployee'
txtEmployeeName='#name'
txtEmployeeId='#empID'
txtEmail='#email'
drpnDepartment='#depart'
drpnSupervisor='#supervisor'
btnSave='#save-button'

verifyEmployeeRecordCreation(employee) {
    cy.get(this.btnCreateNewEmployee).click()
    
    cy.get(this.txtEmployeeName).clear().type(employee.name)
    cy.get(this.txtEmployeeId).clear().type(employee.employeeId)
    cy.get(this.txtEmail).clear().type(employee.email)
    cy.get(this.drpnDepartment).select(employee.department)
    cy.get(this.drpnSupervisor).select(employee.supervisor)
    cy.get(this.btnSave).click()
}


}
export default CreateEmployee_PO