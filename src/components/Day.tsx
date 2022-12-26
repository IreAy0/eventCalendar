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
    return savedEvents.filter(event => event.id === evnt.id) ? "bg-blue-300 text-white "
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
      <ul
        className="flex-1 cursor-pointer list-disc"
      >
        {dayEvents.map((event, index) => (
          <li
            key={index}
            onClick={() =>{
               setSelectedEvent(event)
               setShowEventModal(true);

              }}
            className={` p-0.5 mr-3 text-xs hover:bg-gray-200 rounded mb-1 truncate font-semibold `}
          >
             {event.title}

          </li>
        ))}
      </ul>
    </div>
  );
}

export default Day;
