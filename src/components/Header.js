import React from "react";
import { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";


import { useSelector } from "react-redux";

function Header() {
  const [burgerOpen, setburgerOpen] = useState(false);

  const cars = useSelector((state) => state.caring.cars);

  console.log(cars);

  return (
    <Container>
      <a href="#name">
        <img src="./images/logo.svg" alt="logo" />
      </a>
      <Menu>
        {cars &&
          cars.map((item, index) => {
            return (
              <a href="#name" key={index}>
                {" "}
                {item}
              </a>
            );
          })}
      </Menu>
      <RightMenu>
        <a href="#name">Shop</a>

        <a href="#name">Tesla Account</a>

        <CustomMenu onClick={() => setburgerOpen(true)} />
      </RightMenu>

      <BurgerNav show={burgerOpen}>
        <Closewrapper>
          <CustomClose onClick={() => setburgerOpen(false)} />
        </Closewrapper>

        {cars &&
          cars.map((item, index) => {
            return (
              <li key={index}>
                <a href="#name"> {item}</a>
              </li>
            );
          })}

        <li>
          <a href="#name">Existing Inventory</a>{" "}
        </li>
        <li>
          <a href="#name"> Used Inventory</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#name">Trade-in</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#name">Cybertruck</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#name">Roadster</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#name">Semi</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#name">Charging</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#name">Best quality</a>{" "}
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 700;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    font-weight: 700;
    text-transform: uppercase;
    margin-right: 10px;
    flex-wrap: nowrap;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  transition: 0.5s;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  transform: ${(props) => (props.show ? `translateX(0)` : `translateX(100%)`)};
  display: flex;
  flex-direction: column;
  text-align: start;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  a {
    font-weight: 600;
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const Closewrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;