import * as React from "react";

export interface ContextProps {
  popupInfo: any;
  isOpen: boolean;
  track: number;
  openPopUp(): void;
  closePopUp(): void;
  setPopUpInfo(
    info: {
      title: string;
      summary: string;
      who: string;
      name: string;
      jop: string;
    },
    track: number
  ): void;
}

const Store = React.createContext<ContextProps>({
  popupInfo: undefined,
  isOpen: false,
  track: 0,
  openPopUp: () => {},
  closePopUp: () => {},
  setPopUpInfo: () => {}
});
export default Store;
