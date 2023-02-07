import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({children, menuOpen}) => {
  return (
    <>
      <Head>
        <title>Real Estate</title>
      </Head>
      <Box maxWidth={'1280px'} m='auto'>
        <header>
          <Navbar menu={menuOpen}/>
        </header>
        <main>
          {children}
        </main>
        <footer>
          <Footer/>
        </footer>
      </Box>
    </>
  )
}

export default Layout