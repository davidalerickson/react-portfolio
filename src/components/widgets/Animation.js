import React from "react";
import LottieContainer from "../widgets/LottieContainer";

//Animations
import EGLogo from "../../json/EGLogo.json";
import Full from "../../json/full.json";

const Animation = () => {
  return (
    <LottieContainer JsonAnimation={Full} name="Full" markers={Full.markers} />
  );
};

export default Animation;
