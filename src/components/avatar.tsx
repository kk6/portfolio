import Image from "next/image"
import styles from "../../styles/avatar.module.css"

type AvatarProps = {
  src: string
  alt: string
  width: number
  height: number
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt, width, height }) => {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={styles.avatar}
      />
    </>
  )
}
