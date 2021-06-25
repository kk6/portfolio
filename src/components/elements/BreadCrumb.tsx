import { ChevronRightIcon } from "@chakra-ui/icons"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react"
import Link from "next/link"

type BreadCrumbItem = {
  text: string
  path: string
  isCurrentPage: boolean
}
type BreadCrumbProps = {
  items: BreadCrumbItem[]
}
export const BreadCrumb: React.FC<BreadCrumbProps> = ({ items: items }) => {
  return (
    <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />}>
      {items.map((item) => (
        <BreadcrumbItem key={item.path} isCurrentPage={item.isCurrentPage}>
          <BreadcrumbLink as={Link} href={item.path}>
            {item.text}
          </BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  )
}
