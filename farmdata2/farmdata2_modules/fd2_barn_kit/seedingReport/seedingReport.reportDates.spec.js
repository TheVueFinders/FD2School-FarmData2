describe("Test report dates", () => {
	beforeEach(() => {
		cy.login("manager1", "farmdata2")
		cy.visit("/farm/fd2-barn-kit/seedingReport")
	})

// Remember, try to only edit lines inside the it() you are working on! AND change it("") contents

	it("Check that first date in table is in range", () => {
                const startDate = '2019-01-01';
                const endDate = '2019-01-05';
                cy.get('[data-cy=start-date-select]').type(startDate);
                cy.get('[data-cy=end-date-select]').type(endDate);
                cy.get('[data-cy=generate-rpt-btn]').click();

                cy.get('[data-cy="loader"]').should('not.exist');
                cy.get('[data-cy="report-table"]').should('exist');

                cy.get('[data-cy="report-table"] tbody tr').first().find('td').eq(1).invoke('text').then(dateText => {
                        const rowDate = new Date(dateText.trim());
                        expect(rowDate).to.be.within(new Date(startDate), new Date(endDate));
                });
	})



        it("Check that last date in table is in range", () => {
                const startDate = '2019-01-01';
                const endDate = '2019-01-05';
                cy.get('[data-cy=start-date-select]').type(startDate);
                cy.get('[data-cy=end-date-select]').type(endDate);
                cy.get('[data-cy=generate-rpt-btn]').click();

                cy.get('[data-cy="loader"]').should('not.exist');
                cy.get('[data-cy="report-table"]').should('exist');

                cy.get('[data-cy="report-table"] tbody tr').last().find('td').eq(1).invoke('text').then(dateText => {
                        const rowDate = new Date(dateText.trim());
                        expect(rowDate).to.be.within(new Date(startDate), new Date(endDate));
                });
        })



        it("Check that rows in the table appear in sorted order", () => {
                const startDate = '2019-01-01';
                const endDate = '2019-01-05';

		cy.get('[data-cy=start-date-select]').type(startDate);
                cy.get('[data-cy=end-date-select]').type(endDate);
                cy.get('[data-cy=generate-rpt-btn]').click();
                
                cy.get('[data-cy="loader"]').should('not.exist');
                cy.get('[data-cy="report-table"]').should('exist');
                
                var nrows = 0;
                cy.get('[data-cy="report-table"]')
                        .find("tr")
                        .then((row) => {
                                nrows = row.length;
                        })
                var oldDate = new Date(startDate);
                for( n in nrows) 
                {
                        cy.get('[data-cy="report-table"] tbody tr').eq(n).find('td').eq(1).invoke('text').then(dateText => {
                                const rowDate = new Date(dateText.trim());
                        });
                        cy.wrap(rowDate).should("be.gte", oldDate)
                        oldDate = rowDate;
                }
                
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
