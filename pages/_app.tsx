import React from "react";
import "../global.scss";
import Header from "../components/header/Header";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
