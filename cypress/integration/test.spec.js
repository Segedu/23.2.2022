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

        cy.get('div').should('have.class', 'featured-posts__card w-dyn-item')

    })
})
