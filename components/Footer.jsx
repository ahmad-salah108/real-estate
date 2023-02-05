import { colors } from "@/styles/theme";
import { Box, useColorMode } from "@chakra-ui/react"

const Footer = () => {
  const color = colors();

  return (
    <Box textAlign={'center'} p='5' color={'gray.500'} borderTop='1px' borderColor={color.gray[100]}>
      2023 Realtor, Inc.
    </Box>
  )
}

export default Footer