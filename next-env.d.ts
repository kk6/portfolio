/// <reference types="next" />
/// <reference types="next/types/global" />

/*
 * 以下は typescript サポートがまだのライブラリ用。
 * サポートされたら `@types/xxx` をインストールして以下から不要になった設定を消すこと。
 */

/*
 * For simple-react-lightbox
 *   source:// From: https://github.com/michelecocuccio/simple-react-lightbox/issues/62#issuecomment-789733805
 */
declare module "simple-react-lightbox" {
  interface SRLWrapperElement {
    src: string
    caption?: string
    thumbnail?: string
    width?: React.ReactText
    height?: React.ReactText
    autoplay?: boolean
    showControls?: boolean
  }

  interface SRLWrapperProps {
    elements?: SRLWrapperElement[]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    options?: Record<string, any>
  }

  const SimpleReactLightbox: React.FC
  const SRLWrapper: React.FC<SRLWrapperProps>

  export { SRLWrapper }
  export default SimpleReactLightbox
}

/*
 * For react-responsive-masonry
 *   source: https://github.com/cedricdelpoux/react-responsive-masonry/issues/28#issuecomment-792848641
 */
declare module "react-responsive-masonry" {
  import * as React from "react"

  const Masonry: React.FC<{
    columnsCount?: number
    gutter?: string
  }>

  export const ResponsiveMasonry: React.FC<{
    columnsCountBreakPoints?: Record<number, number>
  }>

  export default Masonry
}
