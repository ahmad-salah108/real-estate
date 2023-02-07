import Router from "next/router";
import Head from "next/head";
import NProgress from "nprogress";
import {
  ChakraProvider,
  ColorModeScript,
} from "@chakra-ui/react";
import Layout from "@/components/Layout";
import { theme } from "@/styles/theme";
import '@/styles/globals.css'
import { useState } from "react";



export default function App({ Component, pageProps }) {
  NProgress.configure({showSpinner: false})
  
  Router.events.on('routeChangeStart', ()=>{
    NProgress.start();
  })

  Router.events.on('routeChangeComplete', ()=>{
    NProgress.done();
  })

  const [open, setOpen] = useState(false);
  
  const menuOpen = (state)=>{
    setOpen(state);
  }

  return (
    <>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Layout menuOpen={menuOpen}>
          <Component {...pageProps} open={open}/>
        </Layout>
      </ChakraProvider>
    </>
  );
}
