import * as React from "react";
import styled from "styled-components";

interface PopUpProps {
  isOpen: boolean;
  info: any;
  track: number;
  close(): void;
}

const Wrapper = styled.div`
  display: ${(props: { isOpen: boolean }) => (props.isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: #0f1723aa;
  top: 0;
`;

const Content = styled.div`
  z-index: 100;

  max-width: 620px;
  box-shadow: 0 0 18px 0 rgba(69, 252, 23, 0.54);
  background-color: #0f1723;

  padding: 15px;
`;

const Rectagle = styled.div`
  height: 100%;
  border: solid 1px #979797;
  padding: 21px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > div {
    margin-bottom: 15px;
  }

  & > div > div:nth-child(1) > img {
    width: 6px;
    height: 11px;
    margin-right: 10px;
  }
  & > div > div {
    color: white;
  }
  & > div > div:nth-child(2) {
    font-size: 15px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.53;
    letter-spacing: normal;
    color: #9b9b9b;

    margin-top: 10px;
  }
`;

const PopUp: React.FunctionComponent<PopUpProps> = props => {
  return (
    <Wrapper isOpen={props.isOpen} onClick={props.close}>
      <Content
        style={{
          boxShadow:
            props.track !== 1
              ? props.track !== 2
                ? "0 0 18px 0 #ffd26e88"
                : "0 0 18px 0 #00f0e488"
              : "0 0 18px 0 #45fc1788"
        }}
      >
        <Rectagle>
          <div>
            <div>
              <img src={require("../assets/images/arrow-white.png")} alt="" />
              {props.info.title}
            </div>
            <div>
              {props.info.summary.split("\n").map((s: string) => (
                <span>
                  {s}
                  <br />
                </span>
              ))}
            </div>
          </div>
          <div>
            <div>
              <img src={require("../assets/images/arrow-white.png")} alt="" />
              이런 분이 들으시면 좋습니다
            </div>

            <div>
              {props.info.who.split("\n").map((s: string) => (
                <span>
                  {s}
                  <br />
                </span>
              ))}
            </div>
          </div>
          <div>
            <div
              style={{
                color:
                  props.track !== 1
                    ? props.track !== 2
                      ? "#ffd26e"
                      : "#00f0e4"
                    : "#45fc17"
              }}
            >
              <img src={require("../assets/images/arrow-green.png")} alt="" />
              발표자 {props.info.name}님
            </div>
            <div>
              {props.info.jop.split("\n").map((s: string) => (
                <span>
                  {s}
                  <br />
                </span>
              ))}
            </div>
          </div>
        </Rectagle>
      </Content>
    </Wrapper>
  );
};

export default PopUp;
