import React from "react";
import LottieContainer from "../widgets/LottieContainer";
import styled from "styled-components";

//Animations
import EGLogo from "../../json/EGLogo.json";

const Wrapper = styled.div`
  width: 60%;
  margin: 0 auto;
`;

const EricksonGaleazzi = () => {
  return (
    <Wrapper>
      <LottieContainer
        JsonAnimation={EGLogo}
        name="EGLogo"
        markers={EGLogo.markers}
      />
    </Wrapper>
  );
};

export default EricksonGaleazzi;
