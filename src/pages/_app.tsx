import { AppProps } from "next/app"
import { ChakraProvider, CSSReset } from "@chakra-ui/react"
import SimpleReactLightbox from "simple-react-lightbox"

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <SimpleReactLightbox>
        <CSSReset />
        <Component {...pageProps} />
      </SimpleReactLightbox>
    </ChakraProvider>
  )
}

export default App
