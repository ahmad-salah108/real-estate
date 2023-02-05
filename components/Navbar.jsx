import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  Spacer,
  useColorMode,
  Button,
} from "@chakra-ui/react";
import { FcMenu, FcHome, FcMoneyTransfer } from "react-icons/fc";
import { BsMoonStarsFill, BsSearch, BsSun } from "react-icons/bs";
import { FiKey } from "react-icons/fi";
import { colors } from "@/styles/theme";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const color = colors();

  return (
    <Flex p='2' borderBottom={'1px'} borderColor={color.gray[100]}>
      <Box fontSize={'3xl'} color='blue.400' fontWeight={'bold'}>
        <Link href={'/'} style={{paddingLeft: '2px'}}>Realtor</Link>
      </Box>
      <Spacer/>
      <Flex justifyContent={'center'} alignItems='center' marginRight={'20px'}>
        <Button
          aria-label="Toggle Color Mode"
          onClick={toggleColorMode}
          _focus={{ boxShadow: 'none' }}
          w="fit-content">
          {colorMode === 'light' ? <BsMoonStarsFill /> : <BsSun />}
        </Button>
      </Flex>
      <Box transform={'translateY(2px)'}>
        <Menu>
          <MenuButton as={IconButton} icon={<FcMenu/>} variant='outline' color={'red.400'}/>
          <MenuList>
            <Link href={'/'} passHref>
              <MenuItem icon={<FcHome/>}>Home</MenuItem>
            </Link>
            <Link href={'/search'} passHref>
              <MenuItem icon={<BsSearch/>}>Search</MenuItem>
            </Link>
            <Link href={'/search?purpose=for-sale'} passHref>
              <MenuItem icon={<FcMoneyTransfer style={{transform: 'translateY(2px)'}}/>}>Buy Property</MenuItem>
            </Link>
            <Link href={'/search?purpose=for-rent'} passHref>
              <MenuItem icon={<FiKey/>}>Rent Property</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  )
}

export default Navbar
