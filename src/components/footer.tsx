import React from "react"
import { Box, Stack, Text, TextProps } from "@chakra-ui/layout"

const Copyright = (props: TextProps) => (
  <Text fontSize="sm" {...props}>
    &copy; {new Date().getFullYear()} あしやひろ All rights reserved.
  </Text>
)

const Footer: React.FC = (): React.ReactElement => (
  <Box
    as="footer"
    role="contentinfo"
    mx="auto"
    maxW="7xl"
    py="12"
    px={{ base: "4", md: "8" }}
  >
    <Stack>
      <Stack
        direction="row"
        spacing="4"
        align="center"
        justify="space-between"
      ></Stack>
      <Copyright alignSelf={{ base: "center", sm: "start" }} />
    </Stack>
  </Box>
)

export default Footer
