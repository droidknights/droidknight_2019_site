import * as React from "react";
import styled from "styled-components";
import Main from "./Main";
import Footer from "src/components/Footer";
import Menu from "src/components/Menu";
import Schedule from "./Schedule";
import Location from "./Location";
import Organizer from "./Organizer";
import Store, { ContextProps } from "src/store";
import PopUp from "src/components/PopUp";

interface AppProps {}

interface AppState {
  width: number;
  height: number;
  context: ContextProps;
}

const Wrapper = styled.div`
  width: 100%;
  /* padding: 23px 14.4% 41px 14.4%; */
  @media only screen and (max-device-width: 480px) {
    padding: 28px 0 19px 0;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: ${(props: { isPhone: boolean }) =>
    props.isPhone ? "center" : "space-between"};
  height: 20px;
  /* padding: 23px 14.4% 41px 14.4%; */
  padding: 0 14.4%;
  margin-top: 23px;
  & > img {
    width: ${(props: { isPhone: boolean }) => (props.isPhone ? "40%" : "18%")};
  }
`;

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      context: {
        popupInfo: undefined,
        isOpen: false,
        openPopUp: this.openPopup,
        closePopUp: this.closePopup,
        setPopUpInfo: this.setInfo,
        track: 0
      }
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  public componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  public componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  public updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  public openPopup = () => {
    this.setState({ context: { ...this.state.context, isOpen: true } });
  };

  public closePopup = () => {
    this.setState({ context: { ...this.state.context, isOpen: false } });
  };

  public setInfo = async (
    info: {
      title: string;
      summary: string;
      who: string;
      name: string;
      jop: string;
    },
    track: number
  ) => {
    await this.setState({
      context: { ...this.state.context, popupInfo: info, track }
    });
  };

  public render() {
    return (
      <Store.Provider value={this.state.context}>
        <Wrapper>
          <Header isPhone={this.state.width < 480}>
            <img src={require("../assets/images/web_logo.png")} alt="" />
            {this.state.width > 480 && <Menu />}
          </Header>
          <main>
            <Main isPhone={this.state.width < 480} />
            <Schedule isPhone={this.state.width < 768} />
            <Location isPhone={this.state.width < 480} />
            <Organizer />
          </main>
          <Footer>
            {this.state.width < 480 ? (
              <>
                Copyright DroidKnights 2019
                <br />
                All Rights Reserved
              </>
            ) : (
              "Copyright DroidKnights 2019 | All Rights Reserved"
            )}
          </Footer>
        </Wrapper>
        {this.state.context.popupInfo && (
          <PopUp
            isOpen={this.state.context.isOpen}
            close={this.closePopup}
            info={this.state.context.popupInfo}
            track={this.state.context.track}
          />
        )}
      </Store.Provider>
    );
  }
}

export default App;
