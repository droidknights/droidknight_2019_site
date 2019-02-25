import * as React from "react";
import styled from "styled-components";

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
      <a href="#">HOME</a>
      <a href="#">ABOUT</a>
      <a href="#">SCHEDULE</a>
      <a href="#">SPONSOR</a>
      <a href="#">VENUE</a>
    </Wrapper>
  );
};

export default Menu;
