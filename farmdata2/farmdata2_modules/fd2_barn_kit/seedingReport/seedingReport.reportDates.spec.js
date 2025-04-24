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



        it("Check no logs message", () => {
		
        })



        it("", () => {
                
                
        })




})
