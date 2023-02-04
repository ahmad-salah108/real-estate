import Router from 'next/router'
import Head from 'next/head'
import nprogress from 'nprogress'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import Layout from '@/components/Layout'
import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({ config })

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>

      </Head>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Layout>
          <Component {...pageProps}/>
        </Layout>
      </ChakraProvider>
    </>
  )
}
