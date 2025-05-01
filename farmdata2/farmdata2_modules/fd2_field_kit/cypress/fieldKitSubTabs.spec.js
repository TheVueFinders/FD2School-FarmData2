describe("Field kit sub-tabs", () => {
	beforeEach(() => {
		cy.login("manager1", "farmdata2")
		cy.visit("/farm/fd2-field-kit")
	})

// Remember, try to only edit lines inside the it() you are working on :)

        it("Check that the FieldKit tab contains sub-tabs for Info and Seeding Input.", () => {
			cy.get('.pagination-sm').contains('Info').should('exist')
			cy.get('.pagination-sm').contains('Seeding Input').should('exist')

                
        })



        it("Check that the order of the tabs is Info and then Seeding Input.", () => {
		
                
        })



        it("Check that there are the correct number of sub-tabs (2 at this time).", () => {
		

        })

})
