import React, { useEffect, useReducer, useState } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";
import { createNewEvent, deleteEventApi, updateEventApi } from "Services/api";

interface EventAction {
  type: string;
  payload: any;
}

interface SelectedEvent {
  title: string;
  description: string;
  start_date: Date;
  end_date: Date;
}
interface Values{
  monthIndex: number;
  // daySelected,
  setDaySelected : (e: string) => void,
  showEventModal: boolean;
  setShowEventModal: (e: boolean) => void,
  dispatchCalEvent: any,
  savedEvents: any[],
  selectedEvent: any,
  setSelectedEvent: (e: string) => void,
  loadingEvents: boolean,
}



function ContextWrapper(props : any) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
  const [daySelected, setDaySelected] = useState<any>(dayjs());
  const [showEventModal, setShowEventModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<SelectedEvent | any>({});
  const [loadingEvents, setLoadingEvents] = useState(true);
  const [savedEvents, dispatchCalEvent] = useReducer(savedEventsReducer, []);

  function savedEventsReducer(state: any, action: EventAction) {
    const { type, payload } = action;
    switch (type) {
      case "fetch":
        setLoadingEvents(false);
        return payload;
      case "push":
        createNewEvent(payload)
        return [...state, payload];
      case "update":
        updateEventApi(payload)
        return state.map((event: any) =>
          event.id === payload.id ? payload : event
        );
      case "delete":
        deleteEventApi(payload)
        return state.filter((event:any) => event.id !== payload.id);
      default:
        throw new Error();
    }
  }


  useEffect(() => {
    if (smallCalendarMonth !== null) {
      setMonthIndex(smallCalendarMonth);
    }
  }, [smallCalendarMonth]);

  useEffect(() => {
    if (!showEventModal) {
      setSelectedEvent(null);
    }
  }, [showEventModal]);

 

  const value: Values = {
    monthIndex,
    setDaySelected,
    showEventModal,
    setShowEventModal,
    dispatchCalEvent,
    savedEvents,
    selectedEvent,
    setSelectedEvent,
    loadingEvents,
  }

  return (
    <GlobalContext.Provider
      value ={value}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}

export default ContextWrapper;
