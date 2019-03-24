import * as React from "react";
import styled from "styled-components";

export interface ApplicationProps {}

const Wrapper = styled.div`
  padding: 101px 14.4% 137px 14.4%;
  background-color: #0f1723;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid #003e61;

  & > div.title {
    font-size: 38px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1;
    letter-spacing: -0.4px;
    text-align: center;
    color: #ffffff;
  }

  & > div.desc {
    font-size: 15px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.53;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;

    margin-top: 18px;
  }

  & > div > a > img {
    width: 178px;
  }

  & > img {
    width: 178px;
    height: 178px;
    margin: 56px 0;
  }

  @media only screen and (max-device-width: 480px) {
    padding: 69px 8% 60px 8%;

    & > div.buttonBox {
      text-align: center;
    }
  }
`;

export default class Application extends React.Component<
  ApplicationProps,
  any
> {
  public render() {
    return (
      <Wrapper>
        <div className="title">APP</div>
        <div className="desc">
          드로이드나이츠 소개와 세션 스케쥴을 확인할 수 있는 앱 런칭
          <br />
          Flutter로 구현된 드로이드나이츠 앱의 ‘컨트리뷰터’가 되어주세요.
          여러분의 참여를 기다립니다!
        </div>

        <img src={require("../assets/images/app-icon.png")} alt="" />
        <div className="buttonBox">
          <a
            href="https://droidknights.page.link/jdF1"
            style={{ marginRight: 20 }}
          >
            <img src={require("../assets/images/app-download.png")} alt="" />
          </a>

          <a href="https://github.com/droidknights/DroidKnights-Festival-2019-flutter">
            <img src={require("../assets/images/app-github.png")} alt="" />
          </a>
        </div>
      </Wrapper>
    );
  }
}
