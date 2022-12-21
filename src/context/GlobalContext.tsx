import { createContext } from "react";

interface ContextState  {
  monthIndex: number,
  // setMonthIndex: (index) => {},
  // smallCalendarMonth: 0,
  // setSmallCalendarMonth: (index) => {},
  // daySelected: null,
  setDaySelected: (day: any) => void,
  showEventModal: boolean,
  setShowEventModal: (val: any) => void,
  dispatchCalEvent: (e: object) => {},
  savedEvents: any[],
  selectedEvent: any,
  // fetchEvents: (val: any)/ => {},
  setSelectedEvent: (val: any) => void,
  // setLabels: () => {},
  // labels: [],
  // updateLabel: () => {},
  loadingEvents: boolean,
  // setLoadingEvents: () => {},
}

const GlobalContext = createContext({} as ContextState);

export default GlobalContext;


