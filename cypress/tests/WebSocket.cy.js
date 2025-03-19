describe("WebSocket Closure Test", () => {
	it("should close the WebSocket properly", () => {
		cy.window().then(win => {
			const ws = new WebSocket(
				"wss://api.dev2.delineate.pro/socket.io/?userId=1e7d6ef0-ffb1-40c9-9b71-ab27fb476343&EIO=4&transport=websocket"
			)
			ws.onopen = () => {
				ws.close()
			}
			ws.onclose = event => {
				expect(event.code).to.equal(1000) // Normal Closure
			}
		})
	})
})
