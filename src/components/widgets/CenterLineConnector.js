import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  .black-connector {
    background-color: black;
    clip-path: polygon(49% 0, 51% 0, 51% 100%, 49% 100%);
    height: 10rem;
    margin-top: -1.5rem;
  }
`;

const CenterLineConnector = () => {
  return (
    <Wrapper>
      <div className="black-connector">Hello</div>
    </Wrapper>
  );
};

export default CenterLineConnector;
