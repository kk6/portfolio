import { Container } from "@chakra-ui/layout"
import React from "react"

import Footer from "../components/footer"
import Header from "../components/header"

const Layout: React.FC = ({ children }): React.ReactElement => (
  <Container maxW="container.xl">
    <Header />
    {children}
    <Footer />
  </Container>
)

export default Layout
