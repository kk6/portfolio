import { BreadCrumb } from "./BreadCrumb"

export default {
  title: "BreadCrumb",
}

const items = [
  { text: "Home", path: "/", isCurrentPage: false },
  { text: "Blog", path: "/blog/", isCurrentPage: false },
  {
    text: "不思議の国のアリス",
    path: "/blog/alice-in-wonderland",
    isCurrentPage: true,
  },
]

export const Default: React.FC = () => <BreadCrumb items={items} />
