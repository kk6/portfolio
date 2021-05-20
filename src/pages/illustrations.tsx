import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next"
import { Container } from "@chakra-ui/layout"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { SRLWrapper } from "simple-react-lightbox"

import { IllustrationsResponse } from "../types/illustrations"
import { client } from "../utils/api"
import Header from "../components/header"
import Footer from "../components/footer"

type StaticProps = {
  illustrations: IllustrationsResponse
}
type PageProps = InferGetStaticPropsType<typeof getStaticProps>

const Illustration: NextPage<PageProps> = (props) => {
  const columnsCountBreakPoints = { 350: 3, 750: 4, 900: 5 }

  return (
    <Container maxW="container.xl">
      <Header />
      <SRLWrapper>
        <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
          <Masonry gutter="4px">
            {props.illustrations.contents.map((i) => (
              <img key={i.id} src={i.image.url} alt={i.title} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </SRLWrapper>
      <Footer />
    </Container>
  )
}

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  const illustrations = await client.illustrations.$get({
    query: { orders: "-posted_at", limit: 100 },
  })
  return {
    props: {
      illustrations,
    },
    revalidate: 60,
  }
}

export default Illustration
