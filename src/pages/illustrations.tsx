import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next"
import { NextSeo } from "next-seo"
import Image from "next/image"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { SRLWrapper } from "simple-react-lightbox"

import Layout from "../components/layout"
import { IllustrationsResponse } from "../types/illustrations"
import { client } from "../utils/api"

const url = "https://ashiyahiro-portfolio.vercel.app/illustrations"
const title = "Illustrations"
const description = "作品一覧"

type StaticProps = {
  illustrations: IllustrationsResponse
}
type PageProps = InferGetStaticPropsType<typeof getStaticProps>

const Illustration: NextPage<PageProps> = (props) => {
  const columnsCountBreakPoints = { 350: 3, 750: 4, 900: 5 }

  return (
    <Layout>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
        }}
      />
      <SRLWrapper>
        <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
          <Masonry gutter="4px">
            {props.illustrations.contents.map((i) => (
              <Image
                key={i.id}
                src={i.image.url}
                alt={i.title}
                width={i.image.width}
                height={i.image.height}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </SRLWrapper>
    </Layout>
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
