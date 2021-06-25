import * as nextImage from "next/image"

// eslint-disable-next-line no-import-assign
Object.defineProperty(nextImage, "default", {
  configurable: true,
  value: (props) => <img {...props} />, // eslint-disable-line react/display-name
})

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
