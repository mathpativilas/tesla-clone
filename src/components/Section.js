import React from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";

function Section({ title, description, leftbtntext, rightbtntext, backimg }) {
  return (
    <Wrap backimg={backimg}>
      <Fade bottom>
        <Itemtext>
          <h1>{title}</h1>
          <p>{description} </p>
        </Itemtext>
      </Fade>

      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{leftbtntext}</LeftButton>

            {rightbtntext && <RightButton>{rightbtntext}</RightButton>}
          </ButtonGroup>
        </Fade>

        <DownArrow src="./images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;

  background-image: ${(props) => `url("./images/${props.backimg}")`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Itemtext = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  width: 256px;
  height: 40px;
  background-color: rgba(23, 26, 32, 0.8);
  border-radius: 100px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;

  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  color: black;
  opacity: 0.65;
`;

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
`;

const Buttons = styled.div``;