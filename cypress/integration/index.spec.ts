/// <reference types="cypress" />

// TypeScript でエラーがでるので記述
export {}

context("/ - Home", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("ページが表示されている", () => {
    cy.location("pathname", { timeout: 10000 }).should("include", "/")
    cy.title().should("include", "ashiyahiro.art")
  })
  it("ホームへのナビゲーションが正しい", () => {
    cy.get("[data-cy=nav-item]").contains("Home").click()
    cy.url().should("include", "/")
  })
  it("イラストギャラリーへのナビゲーションが正しい", () => {
    cy.get("[data-cy=nav-item]").contains("Illustration").click()
    cy.url().should("include", "/illustration")
  })
  it("ブログへのナビゲーションが正しい", () => {
    cy.get("[data-cy=nav-item]").contains("Blog").click()
    cy.url().should("include", "/blog")
  })
  it("プロフィールへのナビゲーションが正しい", () => {
    cy.get("[data-cy=nav-item]").contains("About").click()
    cy.url().should("include", "/about")
  })
  it("お問い合わせへのナビゲーションが正しい", () => {
    cy.get("[data-cy=nav-item]").contains("Contact").click()
    cy.url().should("include", "/contact")
  })
})
