import * as React from "react";
import styled from "styled-components";
import { NaverMap, Marker } from "react-naver-maps";
import { Element } from "react-scroll";

export interface LocationProps {
  isPhone: boolean;
}

const Wrapper = styled(Element)`
  padding: 101px 14.4% 137px 14.4%;
  background-color: #0f1723;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(to bottom, #09273c, #0f1723);

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

  @media only screen and (max-device-width: 480px) {
    padding: 69px 8% 60px 8%;
  }
`;

const LocationContent = styled.div`
  width: 50%;

  @media only screen and (max-device-width: 480px) {
    width: 100%;
  }
`;

const SponsorContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > img {
    width: 27%;
    margin-top: 20px;

    &.platinum {
      width: 41%;
    }
    &.gold {
      width: 34%;
    }
    &.silver {
      width: 37%;
    }
  }

  & > span {
    width: 100%;
    font-size: 51px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 0.75;
    text-align: center;
    color: #003e61;

    margin-top: 20px;
    margin-bottom: 20px;
  }

  @media only screen and (max-device-width: 480px) {
    & > span {
      font-size: 41px;
    }
  }
`;


const Heydeller = styled.div`
  & > img {
    width: 134px;
    height: 134px;
    object-fit: contain;
    margin-top: 31px;
  }
`;

const Jetbrain = styled.div`
  & > img {
    width: 140px;
    height: 152px;
    object-fit: contain;
    margin-top: 42px;
  }
`;


const Yanolja = styled.div`
  & > img {
    width: 202px;
    height: 58px;
    object-fit: contain;
    margin-top: 42px;
  }
`;

const BankSarad = styled.div`
  & > img {
    width: 242px;
    height: 54px;
    object-fit: contain;
    margin-top: 42px;
    margin-bottom: 113px;
  }
`;

const Lezhin = styled.div`
  & > img {
    width: 84px;
    height: 129px;
    object-fit: contain;
    margin-top: 11px;
    margin-bottom: 98px;
  }
`;


export default class Location extends React.Component<LocationProps, any> {
  public render() {
    return (
      <Wrapper name="location">
        <div className="title">LOCATION</div>
        <div className="desc">
          {this.props.isPhone ? (
            <>
              장소 코엑스 E홀
              <br />
              서울특별시 강남구 영동대로 513 (삼성동, 코엑스)
            </>
          ) : (
            "장소 코엑스 E홀 / 서울특별시 강남구 영동대로 513 (삼성동, 코엑스)"
          )}
        </div>
        <LocationContent>
          <NaverMap
            mapDivId={"maps-getting-started-uncontrolled"} // default: react-naver-map
            style={{
              margin: "34px 0",
              width: "100%",
              height: "400px"
            }}
            defaultCenter={{ lat: 37.5117818, lng: 127.0592741 }}
            defaultZoom={11}
          >
            <Marker position={{ lat: 37.5117818, lng: 127.0592741 }} />
          </NaverMap>
        </LocationContent>
        <Element className="title" name="sponsor">
          SPONSOR
        </Element>
        <SponsorContent>
          <img
            className="platinum"
            src={require("../assets/images/sponsor-platinum.png")}
            alt=""
          />
          <span>COMING SOON...</span>
          <img
            className="gold"
            src={require("../assets/images/sponsor-gold.png")}
            alt=""
          />
          <Heydeller>
            <img
              className="sponsor"
              src={require("../assets/images/sponsors/heydeller/banner.png")}
              alt=""
            />
          </Heydeller>

          <Jetbrain>
            <img
              className="sponsor"
              src={require("../assets/images/sponsors/jetbrain/banner.png")}
              alt=""
            />
          </Jetbrain>

          
          <Yanolja>
            <img
              className="sponsor"
              src={require("../assets/images/sponsors/yanolja/banner.png")}
              alt=""
              />
          </Yanolja>

          <BankSarad>
            <img
              className="sponsor"
              src={require("../assets/images/sponsors/banksalad/banner.png")}
              alt=""
            />
          </BankSarad>



          <img
            className="silver"
            src={require("../assets/images/sponsor-silver.png")}
            alt=""
          />
           <Lezhin>
            <img
              className="sponsor"
              src={require("../assets/images/sponsors/lezhin/banner.png")}
              alt=""
            />
          </Lezhin>

        </SponsorContent>
      </Wrapper>
    );
  }
}
