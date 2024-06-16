describe('add product to cart', () => {
  it('should be able to navigate to the product page and add it to the cart', () => {
    cy.visit('http://localhost:3000')

    cy.get('a[href^="/product"]').first().click()

    cy.url().should('include', '/product')

    cy.contains('Add to cart').click()

    cy.contains('Cart (1)').should('exist')
  })

  it('should not count duplicated products', () => {
    cy.visit('http://localhost:3000')

    cy.get('a[href^="/product"]').first().click()

    cy.url().should('include', '/product')

    cy.contains('Add to cart').click()
    cy.contains('Add to cart').click()

    cy.contains('Cart (1)').should('exist')
  })

  it('should search a product and add to cart', () => {
    cy.visit('http://localhost:3000')

    cy.get('input[name=q]').type('Hoodie').parent('form').submit()

    cy.get('a[href^="/product"]').first().click()

    cy.url().should('include', '/product')

    cy.contains('Add to cart').click()

    cy.contains('Cart (1)').should('exist')
  })
})
