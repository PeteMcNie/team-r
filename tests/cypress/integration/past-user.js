/* global cy */

describe('Past User visits site', () => {
  beforeEach(() => {
    // reset and seed the database prior to every test
    cy.exec('npm run db:reset && npm run db:seed')
  })
  it('home page loads successfully', () => {
    cy.visit('/')
  })
  it('visits the create teams page', () => {
    cy.contains('Create Teams')
      .click()

    cy.get('p')
      .contains('Pick team members')

    cy.contains('Create Teams!')
      .should('be.visible')
  })
  it('clicks Select / Deselect All button', () => {
    cy.get('input[type=button]')
      .click()

    cy.get('input[type=button]')
      .click()
  })
  it('Lists the correct number of li elements', () => {
    cy.get('[data-cy=peopleList]')
      .children()
      .should('have.length', 10)
  })

  it('Drop down list number 4 is selected', () => {
    cy.get('[data-cy=teamNumber')
      .select('4')
  })
  it('can select all checkboxes individually', () => {
    cy.get('form').find('[name=Pete]').click({ force: true })
    cy.get('form').find('[name=Nigel]').click({ force: true })
    cy.get('form').find('[name=Andre]').click({ force: true })
    cy.get('form').find('[name=Sergio]').click({ force: true })
    cy.get('form').find('[name=Basti]').click({ force: true })
    cy.get('form').find('[name=Jovan]').click({ force: true })
    cy.get('form').find('[name=Jeff]').click({ force: true })
    cy.get('form').find('[name=Atlas]').click({ force: true })
    cy.get('form').find('[name=Joe]').click({ force: true })
    cy.get('form').find('[name=Sam]').click({ force: true })
  })
  it('Clicks Create Teams! button', () => {
    cy.get('[data-cy=submit]')
      .click()
  })
})
