//This react-helmet will help us to manage the document head (head tag in html) of out website
import React from 'react'
import { Helmet } from "react-helmet";

const HelmetMeta = (props) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{props.title}</title>
    </Helmet>
  );
}

export default HelmetMeta