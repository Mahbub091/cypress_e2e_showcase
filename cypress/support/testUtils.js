const testUtils = {
	runnerLog(Logger) {
		return cy.log(Logger)
	},

	eleByContains(elementText) {
		return cy.contains(elementText)
	},
}

export default testUtils
