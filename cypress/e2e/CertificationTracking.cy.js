import CertificationTracking_PO from "../support/POM/CertificationTracking_PO"

describe('Certification Tracking functionality with ddt approach', () => {

    let cert = new CertificationTracking_PO()

    beforeEach(() => {
        cy.login('employee')
        cy.visit('https://workforcepro.base44.app/alerts')   
    })

    it('Verify certification tracking alert is visible', () => {

        cert.verifyCertificationAlert()

    })

})