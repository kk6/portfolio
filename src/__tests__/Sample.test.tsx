/// <reference types="jest" />
import { cleanup, render, screen } from "@testing-library/react"

import Home from "../pages/index"

// 各テスト実行後にレンダーしたコンポーネントをアンマウントする
afterEach(cleanup)

it("Home ページコンポーネントが存在している", () => {
  expect(Home).toBeTruthy()
})

it("ヘッダーの「About」のリンク先が正しい", () => {
  render(<Home />)
  expect(screen.getByText("About").getAttribute("href")).toBe("/about")
})
