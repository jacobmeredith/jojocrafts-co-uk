import Document, { Head, Html, Main, NextScript } from "next/document";
import React, { ReactElement } from "react";

import { Header } from "../components/Header";

export default class MyDocument extends Document {
  render(): ReactElement {
    return (
      <Html lang="en">
        <Head />
        <body className="bg-stone-50">
          <Header />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
