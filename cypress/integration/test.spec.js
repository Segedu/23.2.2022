describe('Junior SW Engineer Position', () => {
    it('Home Assignment', () => {
        cy.visit('https://www.hiredscore.com/');

        cy.contains('About').trigger('hover');

        cy.contains('Careers').click({ force: true });

        cy.url() !== 'https://www.hiredscore.com/careers#career-listing' ? cy.visit('https://www.hiredscore.com/careers#career-listing') : ""

        cy.contains('Full Stack Engineer').click();

        cy.get('h1').should('have.text', 'Full Stack Engineer');

        cy.contains('Back to careers page').click();

        cy.contains('Resources').trigger('hover');

        cy.contains('Press & Awards').click({ force: true });

        cy.url() !== 'https://www.hiredscore.com/press' ? cy.visit('https://www.hiredscore.com/press') : '';

        cy.get('.featured-posts').then(container => {
            cy.log(container.text());
            cy.writeFile('/cypress/fixtures/hiredScoreNews.txt', container.text())
            cy.readFile('/cypress/fixtures/hiredScoreNews.txt').then((text) => {
                cy.log(text)
            })
        })
    })
})
