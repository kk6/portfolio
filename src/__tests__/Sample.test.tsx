/// <reference types="jest" />
import { cleanup } from "@testing-library/react"

import About from "../pages/about"

// 各テスト実行後にレンダーしたコンポーネントをアンマウントする
afterEach(cleanup)

it("About ページコンポーネントが存在している", () => {
  expect(About).toBeTruthy()
})
