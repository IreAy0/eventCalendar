import dayjs from "dayjs";
import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../context/GlobalContext";

interface DayProp {
  day: any;
  rowIdx: number;
}
function Day({ day, rowIdx }: DayProp) {
  const [dayEvents, setDayEvents] = useState<any[]>([]);

  const {
    setDaySelected,
    setShowEventModal,
    savedEvents,
    setSelectedEvent,
  } = useContext(GlobalContext);



  useEffect(() => {
    const filtered = savedEvents.filter(event => event.start == day.format("YYYY-MM-DD"))
    const endDates = savedEvents.filter(event => event.end == day.format("YYYY-MM-DD"))
    setDayEvents([...filtered, ...endDates]);

  }, [savedEvents, day]);

  function getCurrentDayClass() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-7"
      : "";
  }

  function getAllId(evnt: any) {
    return savedEvents.filter(event => event.id === evnt.id) ? "bg-blue-600 text-white "
      : "";
  }

  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col items-center">
        {rowIdx === 0 && (
          <p className="text-sm mt-1">{day.format("ddd").toUpperCase()}</p>
        )}
        <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>
          {day.format("DD")}
        </p>
      </header>
      <div
        className="flex-1 cursor-pointer"
        onClick={() => {
          setDaySelected(day);
          setShowEventModal(true);
        }}
      >
        {dayEvents.map((event, index) => (
          <div
            key={index}
            onClick={() => setSelectedEvent(event)}
            className={` p1 mr-3 text-sm rounded mb-1 truncate ${getAllId(event)}`}
          >
            {event.title}

          </div>
        ))}
      </div>
    </div>
  );
}

export default Day;
