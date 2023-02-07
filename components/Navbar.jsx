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
import { useState } from "react";
import { useRouter } from "next/router";

const Navbar = ({menu}) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const color = colors();
  const router = useRouter();
  
  return (
    <Flex p="2" borderBottom={"1px"} borderColor={color.gray[100]}>
      <Flex fontSize={"3xl"} fontWeight={"bold"}>
        <Box color={'blue.400'}>
          <Link href={"/"} style={{ paddingLeft: "2px" }}>
            Realtor
          </Link>
        </Box>
      </Flex>
      <Spacer />
      <Flex justifyContent={"center"} alignItems="center" marginRight={"15px"}>
        <Button
          aria-label="Toggle Color Mode"
          onClick={toggleColorMode}
          _focus={{ boxShadow: "none" }}
          w="fit-content"
          p={0}
        >
          {colorMode === "light" ? <BsMoonStarsFill /> : <BsSun />}
        </Button>
      </Flex>
      <Box transform={"translateY(2px)"}>
        {/* <Flex alignItems={'center'} gap='30px' fontWeight={"semibold"} display={{base: 'none',md: 'flex'}}>
          <Link href={'/'} className={router.pathname == '/' ? 'active-nav-link' : ''}>Home</Link>
          <Link href={'/search'} className={router.pathname == '/search' && router.query.purpose == null ? 'active-nav-link' : ''}>Search</Link>
          <Link href={'/search?purpose=for-sale'} className={router.query.purpose == 'for-sale' ? 'active-nav-link' : ''}>Buy Property</Link>
          <Link href={'/search?purpose=for-rent'} className={router.query.purpose == 'for-rent' ? 'active-nav-link' : ''}>Rent Property</Link>
        </Flex> */}
        <Menu zIndex="999" onOpen={()=>{menu(true)}} onClose={()=>{menu(false)}}>
          {({ isOpen }) => (
            <>
              <MenuButton
                as={IconButton}
                icon={<FcMenu />}
                variant="outline"
                aria-label="Options"
                color={"red.400"}
              />
              <MenuList display={isOpen ? 'block' : 'none'}>
                <Link href={"/"} passHref>
                  <MenuItem icon={<FcHome />}>Home</MenuItem>
                </Link>
                <Link href={"/search"} passHref>
                  <MenuItem icon={<BsSearch />}>Search</MenuItem>
                </Link>
                <Link href={"/search?purpose=for-sale"} passHref>
                  <MenuItem
                    icon={
                      <FcMoneyTransfer
                        style={{ transform: "translateY(2px)" }}
                      />
                    }
                  >
                    Buy Property
                  </MenuItem>
                </Link>
                <Link href={"/search?purpose=for-rent"} passHref>
                  <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
                </Link>
              </MenuList>
            </>
          )}
        </Menu>
      </Box>
    </Flex>
  );
};

export default Navbar;
