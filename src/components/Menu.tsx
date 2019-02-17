import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface MenuProps {}

const Wrapper = styled.div`
  @font-face {
    font-family: "SilkScreen";
    src: url(${require("../assets/fonts/SilkScreen/silkscreen.eot")})
        format("embedded-opentype"),
      url(${require("../assets/fonts/SilkScreen/silkscreen.ttf")})
        format("truetype");
  }

  display: flex;
  height: 100%;
  justify-content: flex-end;

  & > a {
    font-family: "SilkScreen";
    font-size: 18px;
    font-stretch: expanded;
    line-height: 0.72;
    letter-spacing: -1.7px;
    color: #ffffff;
    text-decoration: none;

    display: flex;
    align-items: center;

    &:not(:first-child) {
      margin-left: 5%;
    }
  }
`;

const Menu: React.FunctionComponent<MenuProps> = props => {
  return (
    <Wrapper>
      <Link to="#">HOME</Link>
      <Link to="#">ABOUT</Link>
      <Link to="#">SCHEDULE</Link>
      <Link to="#">SPONSOR</Link>
      <Link to="#">VENUE</Link>
    </Wrapper>
  );
};

export default Menu;
