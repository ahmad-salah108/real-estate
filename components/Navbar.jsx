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
} from "@chakra-ui/react";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";
import { Switch } from '@chakra-ui/react'

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex p='2' borderBottom={'1px'} borderColor='gray.100'>
      <Box fontSize={'3xl'} color='blue.400' fontWeight={'bold'}>
        <Link href={'/'} style={{paddingLeft: '2px'}}>Realtor</Link>
      </Box>
      <Spacer/>
      {/* <Flex justifyContent={'center'} alignItems='center' marginRight={'20px'}>
       <label style={{cursor: 'pointer'}}>Toggle {colorMode === 'light' ? 'Dark' : 'Light'} <Switch onChange={toggleColorMode} marginLeft='2'/></label>
      </Flex> */}
      <Box>
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
              <MenuItem icon={<FcAbout/>}>Buy Property</MenuItem>
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
