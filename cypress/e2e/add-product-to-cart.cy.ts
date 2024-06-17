describe('add product to cart', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should be able to navigate to the product page and add it to the cart', () => {
    cy.get('a[href^="/product"]').first().click()

    cy.url().should('include', '/product')

    cy.contains('Add to cart').click()

    cy.contains('Cart (1)').should('exist')
  })

  it('should not count duplicated products', () => {
    cy.get('a[href^="/product"]').first().click()

    cy.url().should('include', '/product')

    cy.contains('Add to cart').click()
    cy.contains('Add to cart').click()

    cy.contains('Cart (1)').should('exist')
  })

  it('should search a product and add to cart', () => {
    cy.get('input[name=q]').type('moletom').parent('form').submit()

    cy.get('a[href^="/product"]').first().click()

    cy.url().should('include', '/product')

    cy.contains('Add to cart').click()

    cy.contains('Cart (1)').should('exist')
  })
})
