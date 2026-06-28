import SupervisorApproval_PO from "../support/POM/SupervisorApproval_PO";

describe('', () => {
    describe('Supervisor Approval with ddt approach', () => {

    let appvr=new SupervisorApproval_PO()

    beforeEach(() => {
        cy.login('supervisor')
        cy.visit('')
    })

    it('Approval or Rejection by the supervisor', () => {

        cy.fixture('approvalData').then((data) => {

            data.forEach((employee) => {

                appvr.verifySupervisorApproval(employee)

                const expectedMessage =
                    employee.score < 65
                        ? 'Employee rejected successfully'
                        : 'Employee approved successfully'

                cy.contains(expectedMessage).should('be.visible')

            })

        })

    })

})
})