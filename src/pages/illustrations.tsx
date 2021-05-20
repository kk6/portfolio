import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next"

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { SRLWrapper } from "simple-react-lightbox"

import { IllustrationsResponse } from "../types/illustrations"
import { client } from "../utils/api"

type StaticProps = {
  illustrations: IllustrationsResponse
}
type PageProps = InferGetStaticPropsType<typeof getStaticProps>

const Illustration: NextPage<PageProps> = (props) => {
  const columnsCountBreakPoints = { 350: 4, 750: 5, 900: 6 }

  return (
    <div>
      <SRLWrapper>
        <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
          <Masonry gutter={4}>
            {props.illustrations.contents.map((i) => (
              <img key={i.id} src={i.image.url} alt={i.title} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </SRLWrapper>
    </div>
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
