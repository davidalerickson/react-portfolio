import React, { Component } from "react";
import styled from "styled-components";
import "../../sass/_animations.scss";
import Aninmation from "../widgets/Animation";

const Wrapper = styled.div`
  .header {
    height: 100vh;
    background-image: url(${require("../../img/Front.jpg")});
    background-size: cover;
    background-attachment: fixed;
    background-position: top;
    /* -webkit-clip-path: polygon(0 0, 100% 0, 100% 85vh, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 85vh, 0 100%); */
    box-shadow: 0 1rem 2rem black;
  }
  @media only screen and (max-width: 37.5em) {
    .header {
      background-position: -25% top;
    }
  }
  @media (min-resolution: 192dpi) and (min-width: 37.5em),
    (-webkit-min-device-pixel-ration: 2) and (min-width: 37.5em),
    (min-width: 112.5em) {
    .header {
      background-image: url(${require("../../img/Front.jpg")});
    }
  }
  .header__logos-box {
    margin-top: 3rem;
  }
  @media only screen and (max-width: 37.5em) {
    .header__logos-box {
      margin-top: 2rem;
    }
  }
  .header__logo-box {
    display: inline-block;
  }
  .header__logo-html {
    height: 10vw;
  }
  .header__text-box {
    position: absolute;
    top: 45%;
    left: 58%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
  @media only screen and (max-width: 37.5em) {
    .header__text-box {
      top: 70%;
      padding: 0 1rem;
      border-radius: 3rem;
      background-color: rgba(0, 0, 0, 0.7);
    }
  }
  .heading-primary {
    color: $color-white;
    text-transform: uppercase;
    backface-visibility: hidden;
    @include respond(phone) {
      color: $color-grey-dark-3;
    }
  }
  .heading-primary--main {
    display: block;
    font-size: 6rem;
    font-weight: 400;
    letter-spacing: 3.5rem;

    animation: moveInLeft 1s ease-out;

    @include respond(phone) {
      /* //1rem = 8px so /16 = 50% - phone will also be this size */
      font-size: 3rem;
      letter-spacing: 0;
      line-height: 1.3;
    }
  }
  .heading-primary--sub {
    display: block;
    font-size: 2rem;
    font-weight: 700;
    animation-name: moveInRight;
    animation-duration: 1s;
    animation-timing-function: ease-out;
    text-transform: lowercase;

    @include respond(phone) {
      /* //1rem = 8px so /16 = 50% - phone will also be this size */
      font-size: 1.5rem;
      line-height: 1.2;
      font-weight: 300;
    }
    &-emphasis {
      color: red;
    }
  }
  .textTest {
    font-size: 6rem;
  }
`;

export class Hero extends Component {
  render() {
    return (
      <Wrapper>
        <header className="header">
          <div className="header__text-box">
            {/* ----------------
            <h1 className="heading-primary">
              <span className="heading-primary--main">Hello</span>
              <span className="heading-primary--sub">
                {`my name is `}
                <span className="heading-primary--sub-emphasis">
                  david erickson
                </span>{" "}
              </span>
              <span className="heading-primary--sub">
                {`and i am a `}
                <span className="heading-primary--sub-emphasis">
                  web developer
                </span>
              </span>
            </h1>
            -------------- */}
            <Aninmation />
          </div>
        </header>
      </Wrapper>
    );
  }
}

export default Hero;
