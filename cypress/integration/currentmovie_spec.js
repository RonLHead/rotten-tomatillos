describe('Current movie flow happy path', () => {
    it('Should be able to visit the movie page for Money Plane and render the correct elements', () => {
        cy.visit('http://localhost:3000/718444')
            .contains('Rancid Tomatillos')
            .get('h2')
                .contains('The second most trusted measurer of movie quality!')
            .get('div')
                .should('have.class', 'current-movie')
            .get('img')
                .should('have.class', 'backdrop')
                .and('be.visible')
            .get('img')
                .should('have.class', 'current-poster')
                .and('be.visible')
            .get('div')
                .should('have.class', 'movie-info')
                .and('be.visible')
            .get('h3')
                .should('have.class', 'current-movie-title')
                .contains('Rogue')
            .get('div')
                .should('have.class', 'current-movie-stats')
            .get('p')
                .contains('When the hunter becomes the prey.')
            .get('p')
                .contains('2020, Action, 106m')
            .get('p')
                .contains('🍅 Average Rating: 7')
            .get('div')
                .should('have.class', 'current-movie-wtk')
            .get('h3')
                .contains('WHAT TO KNOW')
            .get('p')
                .contains('Battle-hardened O’Hara leads a lively mercenary team of soldiers on a daring mission: rescue hostages from their captors in remote Africa. But as the mission goes awry and the team is stranded, O’Hara’s squad must face a bloody, brutal encounter with a gang of rebels.')
            .get('p')
                .contains('Budget: $0.00')
            .get('p')
                .contains('Revenue: $0.00')
            .get('button')
                .contains('Back').click()
    })
})