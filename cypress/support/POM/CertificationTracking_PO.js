class CertificationTracking_PO
{
    lblCertTracking='#cert-alert'

    verifyCertificationAlert() {
        cy.get(this.lblCertTracking).should('be.visible')
    }
}

export default CertificationTracking_PO