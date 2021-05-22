import Image from "next/image"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { SRLWrapper } from "simple-react-lightbox"
import { IllustrationResponse } from "../types/illustrations"

type ImageGalleryProps = {
  illustrations: IllustrationResponse[]
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({
  illustrations,
}): JSX.Element => {
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
