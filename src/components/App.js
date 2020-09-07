import React from "react";
import { colors, fonts, breakpoints } from "../styles/mainStyles";
import { createGlobalStyle } from "styled-components";

import Hero from "../components/layout/Hero";
import WebDev from "../components/layout/WebDev";
import CenterLineConnector from "../components/widgets/CenterLineConnector";
import EricksonGaleazzi from "../components/layout/EricksonGaleazzi";

const GlobalStyles = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
  }
  *,
  *::after,
  *::before {
      box-sizing: inherit;
  }
  html {
      box-sizing: border-box;
      font-size: 62.5%; //1rem = 10px
      @media only screen and (max-width: ${breakpoints.bp1250}){
        font-size: 50%;
      }
  }
  body {
      font-family: ${fonts.Primary};
      font-weight: 300;
      color: ${colors.GreyDark02};
      line-height: 1.6;
  }
`;

class App extends React.Component {
  render() {
    return (
      <>
        <GlobalStyles />
        <Hero />
        <WebDev />
        <CenterLineConnector />
        <EricksonGaleazzi />
        <div style={{ height: "1500px" }} />
      </>
    );
  }
}

export default App;
