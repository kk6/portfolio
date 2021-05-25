/// <reference types="cypress" />

describe("タイトルのテスト", () => {
  it("タイトルが「Ashiyahiro.work」である", () => {
    cy.visit("/")
    cy.title().should("include", "Ashiyahiro.work")
  })
})

// TypeScript でエラーがでるので記述
export {}
