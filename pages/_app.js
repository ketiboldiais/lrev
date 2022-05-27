import Layout from "../components/Layout";
import React from "react";
import {MDXProvider} from "@mdx-js/react";
import "../styles/code.css";
import "../styles/globals.css";
import {config} from "@fortawesome/fontawesome-svg-core";
import MDXComponents from "../components/MDXComponents";

config.autoAddCss = false;

function MyApp({Component, pageProps}) {
  return (
    <Layout>
      <MDXProvider components={MDXComponents}>
        <Component {...pageProps} />
      </MDXProvider>
    </Layout>
  );
}

export default MyApp;
