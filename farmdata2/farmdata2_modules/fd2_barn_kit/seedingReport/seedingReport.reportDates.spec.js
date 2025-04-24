describe("Test report dates", () => {
	beforeEach(() => {
		cy.login("manager1", "farmdata2")
		cy.visit("/farm/fd2-barn-kit/seedingReport")
	})

// Remember, try to only edit lines inside the it() you are working on! AND change it("") contents

	it("Check that element for Tray is enabled", () => {
                 
	})



        it("Check that element for Direct is enabled", () => {
                
        })



        it("Check that neither Tray nor Element is selected", () => {
		
                

        })



        it("Check message appears when no logs are returned", () => {
			cy.get('[data-cy=start-date-select]')
		       	.type('2025-01-01')
            cy.get('[data-cy=end-date-select]')
                .type('2025-01-02')
            cy.get('[data-cy=generate-rpt-btn]')
                .click()

			cy.get('[data-cy=no-logs-message]')
				.should('be.visible')
            
        })



        it("Check table is hidden when no logs are returned", () => {
			cy.get('[data-cy=start-date-select]')
		       	.type('2025-01-01')
            cy.get('[data-cy=end-date-select]')
                .type('2025-01-02')
            cy.get('[data-cy=generate-rpt-btn]')
                .click()

			cy.wait(5000) // Ensures enough time for the table to appear, in case the API is taking a while

            cy.get('[data-cy=report-table]') 
            	.should('not.exist')   
        })




})
