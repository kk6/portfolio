import { Container } from "@chakra-ui/layout"
import { motion } from "framer-motion"

import { Footer } from "../modules/Footer"
import { Header } from "../modules/Header"

export const DefaultLayout: React.FC = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.2 }}
  >
    <Container maxW="container.xl">
      <Header />
      {children}
      <Footer />
    </Container>
  </motion.div>
)
