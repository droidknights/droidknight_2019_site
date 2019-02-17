import * as React from "react";
import styled from "styled-components";

export interface MainProps {
  isPhone: boolean;
}

export interface MainState {}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 140px 0;

  & > img.title {
    width: 60%;
    margin-bottom: 65px;
  }

  & > img.main {
    width: 80%;
    margin-bottom: 73px;
  }

  & > div {
    font-size: 25px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.12;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
    margin-bottom: 26px;
  }
  & > a {
    width: 40%;
    & > img.get_ticket {
      padding: 20px;
      width: 100%;
    }
  }

  & > img.coin {
    width: 12%;
  }

  @media only screen and (max-device-width: 480px) {
    margin: 100px 0 70px 0;
    & > img.title {
      width: 85%;
      margin-bottom: 35px;
    }
    & > img.main {
      width: 100%;
      margin-bottom: 35px;
    }

    & > div {
      font-size: 25px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.12;
      letter-spacing: normal;
      text-align: center;
      color: #ffffff;
      margin-bottom: 24px;
    }
    & > a {
      width: 52%;
      & > img.get_ticket {
        padding: 10px;
        width: 100%;
      }
    }

    & > img.coin {
      width: 17%;
    }
  }
`;

export default class Main extends React.Component<MainProps, MainState> {
  constructor(props: MainProps) {
    super(props);
  }

  public render() {
    return (
      <Wrapper>
        <img
          src={require("../assets/images/2019_dk_title.png")}
          alt="title"
          className="title"
        />
        <img
          src={require("../assets/images/main_graphics.png")}
          alt="main"
          className="main"
        />
        <div>얼리버드 티켓 오픈!</div>
        <a href="https://event-us.kr/droidknights/event/5483">
          <img
            src={require("../assets/images/get_ticket.png")}
            alt="get_ticket"
            className="get_ticket"
          />
        </a>
        <img
          src={require("../assets/images/coinx100.png")}
          alt="coin"
          className="coin"
        />
      </Wrapper>
    );
  }
}
