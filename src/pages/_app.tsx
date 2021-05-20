import { ChakraProvider, CSSReset } from "@chakra-ui/react"
import { DefaultSeo } from "next-seo"
import { AppProps } from "next/app"
import SimpleReactLightbox from "simple-react-lightbox"
import SEO from "../../next-seo.config"

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ChakraProvider>
      <SimpleReactLightbox>
        <CSSReset />
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </SimpleReactLightbox>
    </ChakraProvider>
  )
}

export default App
