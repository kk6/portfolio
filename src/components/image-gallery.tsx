import dynamic from "next/dynamic"
import Image from "next/image"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { IllustrationResponse } from "../types/illustrations"

// @ts-ignore
const SRLWrapper = dynamic(() =>
  import("simple-react-lightbox").then((mod) => mod.SRLWrapper)
)

type ImageGalleryProps = {
  illustrations: IllustrationResponse[]
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({
  illustrations,
}) => {
  const columnsCountBreakPoints = { 350: 3, 750: 4, 900: 5 }

  return (
    <SRLWrapper>
      <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
        <Masonry gutter="4px">
          {illustrations.map((i) => (
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
  )
}
