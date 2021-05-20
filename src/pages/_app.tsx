import { ChakraProvider, CSSReset } from "@chakra-ui/react"
import { AnimateSharedLayout } from "framer-motion"
import { DefaultSeo } from "next-seo"
import { AppProps } from "next/app"
import SimpleReactLightbox from "simple-react-lightbox"
import SEO from "../../next-seo.config"

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ChakraProvider>
      <SimpleReactLightbox>
        <AnimateSharedLayout>
          <CSSReset />
          <DefaultSeo {...SEO} />
          <Component {...pageProps} />
        </AnimateSharedLayout>
      </SimpleReactLightbox>
    </ChakraProvider>
  )
}

export default App
