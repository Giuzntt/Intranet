import '../../public/GlobalStyles/reset.css'
import '../../public/GlobalStyles/styles.css'
import '../../public/GlobalStyles/font.css'
import type { AppProps } from "next/app";

import React from "react";
import Layout from '../components/SideBar/Layout';



function MyApp({ Component, pageProps }: AppProps) {
  return (
    
      <Layout>
        <Component {...pageProps} />
      </Layout>
  
  );
}
export default MyApp;