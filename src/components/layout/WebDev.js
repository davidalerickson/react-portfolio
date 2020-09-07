import React, { Component } from "react";
import { Parallax, Background } from "react-parallax";
import styled from "styled-components";

const Wrapper = styled.div`
  .WebDev {
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  }
`;

export class WebDev extends Component {
  render() {
    return (
      <>
        <Wrapper>
          <Parallax
            blur={0}
            bgImage={require("../../img/WebDev/ModenaSunset (3).JPG")}
            bgImageAlt="the cat"
            strength={200}
            className="WebDev"
          >
            <div style={{ height: "600px" }} />
          </Parallax>
        </Wrapper>
        <div style={{ height: "500px" }} />
      </>
    );
  }
}

export default WebDev;
