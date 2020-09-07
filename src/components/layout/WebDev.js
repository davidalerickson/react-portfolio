import React, { Component } from "react";
import { Parallax, Background } from "react-parallax";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: -5rem;
  .WebDev {
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  }
  .blackBoxInTriangle {
    background-color: black;
    height: 600px;
  }
  .blackTriangleInverted {
    background-color: black;
    height: 600px;
    clip-path: polygon(50% 100%, 0 0, 100% 0);
  }
  .triangle-text-headline {
    color: white;
    padding-top: 1rem;
    font-size: 3rem;
    text-align: center;
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
            strength={300}
            className="WebDev"
          >
            {/* <div className="blackBoxInTriangle"></div> */}
            <div style={{ height: "600px" }} />
          </Parallax>
          <div className="blackTriangleInverted">
            <div className="triangle-text-headline">
              ...and my name is gustavo galeazzi
              <img
                src={require("../../img/wordpress-svgrepo-com.svg")}
                alt=""
              />
            </div>
          </div>
        </Wrapper>
      </>
    );
  }
}

export default WebDev;
