import * as React from "react";
import styled from "styled-components";

export interface ScheduleProps {}

const Wrapper = styled.div`
  padding: 101px 14.4% 137px 14.4%;
  background-color: #0f1723;
  display: flex;
  flex-direction: column;
  align-items: center;

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

  & > div.desc2 {
    font-size: 15px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.53;
    letter-spacing: normal;
    text-align: center;
    color: #9b9b9b;
  }

  @media only screen and (max-device-width: 480px) {
    & > div.desc,
    & > div.desc2 {
      font-size: 13px;
    }
  }
`;

const ScheduleContent = styled.div`
  margin-top: 43px;

  & > span {
    font-size: 51px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 0.75;
    text-align: center;
    color: #003e61;

    margin: 40px 0;
  }

  @media only screen and (max-device-width: 480px) {
    & > span {
      font-size: 41px;
    }
  }
`;

const ProgramContent = styled.div`
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > img {
    width: 30%;
    margin-bottom: 34px;
  }

  @media only screen and (max-device-width: 480px) {
    & > img {
      width: 60%;
    }
  }
`;

const ProgramItemWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media only screen and (max-device-width: 480px) {
    display: block;
  }
`;

const ProgramItem = styled.div`
  width: 32%;
  border: solid 1px #003e61;
  padding: 15px 20px;
  & > p:nth-child(1) {
    color: #3dea11;
    margin-top: 0;
  }

  & > p:nth-child(2) {
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.64;
    letter-spacing: normal;
    color: #ededed;
    margin-bottom: 0;
  }

  @media only screen and (max-device-width: 480px) {
    width: 100%;
    height: 140px;
    margin-bottom: 23px;
  }
`;

const Boarder = styled.div`
  background-color: #003e61;
  width: 100%;
  height: 2px;
  margin-top: 94px;
  margin-bottom: 94px;
`;

export default class Schedule extends React.Component<ScheduleProps, any> {
  public render() {
    return (
      <Wrapper>
        <div className="title">SCHEDULE</div>
        <div className="desc">드로이드 나이츠 2019는 3트랙으로 진행됩니다.</div>
        <div className="desc2">2월 중에 전체 세션이 공개됩니다.</div>
        <ScheduleContent>
          <span>COMING SOON…</span>
        </ScheduleContent>
        <Boarder />
        <div className="title">PROGRAM</div>
        <div className="desc">
          2019 드로이드 나이츠는 세션 이외의 다양한 프로그램을 준비하고
          있습니다.
        </div>
        <ProgramContent>
          <img src={require("../assets/images/program.png")} alt="" />
          <ProgramItemWrapper>
            <ProgramItem>
              <p>코드리뷰</p>
              <p>
                다른사람들은 어떻게 코딩할까요? <br /> 서로 코드를 공유해봅시다.
              </p>
            </ProgramItem>
            <ProgramItem>
              <p>코드랩</p>
              <p>
                해봐야지 생각하면서 미뤄둔 기술이 있나요? 드로이드 나이츠에서
                한번 시작해보세요!
              </p>
            </ProgramItem>
            <ProgramItem>
              <p>실시간 퀴즈쇼</p>
              <p>
                당신의 개발력을 뽐내보세요! <br />
                푸짐한 상품이 함께합니다.
              </p>
            </ProgramItem>
          </ProgramItemWrapper>
        </ProgramContent>
      </Wrapper>
    );
  }
}
