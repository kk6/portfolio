module.exports = {
  preset: "ts-jest",
  roots: ["<rootDir>/src"],
  moduleNameMapper: {
    // CSS Modules をモックする設定
    "\\.(css|scss)$": "identity-obj-proxy",
    // pages と components ディレクトリのエイリアスを設定
    "^(pages|components)/(.+)": "<rootDir>/src/$1/$2",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  globals: {
    "ts-jest": {
      tsconfig: {
        jsx: "react-jsx",
      },
    },
  },
}
