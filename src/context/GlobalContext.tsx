import { createContext } from "react";

interface ContextState  {
  monthIndex: number,
  setMonthIndex: (index: number) => void,
  setDaySelected: (day: any) => void,
  showEventModal: boolean,
  setShowEventModal: (val: any) => void,
  dispatchCalEvent: (e: object) => {},
  savedEvents: any[],
  selectedEvent: any,
  setSelectedEvent: (val: any) => void,
}

const GlobalContext = createContext({} as ContextState);

export default GlobalContext;


