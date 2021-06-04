module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    "cypress/globals": true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:cypress/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  // jsx を使用
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
  },
  plugins: [
    "react-hooks",
    "react",
    "@typescript-eslint",
    "import",
    "unused-imports",
    "cypress",
    "simple-import-sort",
  ],
  root: true,
  rules: {
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports-ts": "warn",
    // Typescript を使っているなら不要
    "react/prop-types": "off",
    // Next.js では不要
    "react/react-in-jsx-scope": "off",
    // 「// @ts-ignore」使っても怒られないようにする
    "@typescript-eslint/ban-ts-comment": "off",
    // simple-import-sort の設定
    // 'sort-imports' および 'import/order' と競合するのでこれらは使わないこと
    "simple-import-sort/imports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".ts"],
      },
    },
    // React のバージョンは自動検出
    react: {
      version: "detect",
    },
  },
}
