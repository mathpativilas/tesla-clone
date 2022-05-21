import React from "react";
import styled from "styled-components";

function Section() {
  return (
    <Wrap>
      <Itemtext>
        <h1>Model S</h1>
        <p>Order Online for Touchless Delivery </p>
      </Itemtext>

      <ButtonGroup>
        <LeftButton>Custom Order</LeftButton>
        <RightButton>Existing Inventory</RightButton>
      </ButtonGroup>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  text-align: center;
  background-image: url("./images/model-s.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Itemtext = styled.div`
  padding-top: 15vh;
`;

const ButtonGroup = styled.div``;

const LeftButton = styled.div`
  width: 256px;
  height: 40px;
  background-color: black;
`;

const RightButton = styled(LeftButton)``;
