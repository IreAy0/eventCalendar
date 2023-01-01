import GlobalContext from "@/context/GlobalContext";
import dayjs from "dayjs";
import React, { useContext } from "react";

function CalenderNav() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);;

  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }

  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }

  return (
    <header className="px-4 py-2 flex items-center flex-wrap lg:flex-nowrap">
      {/* <h1 className="mr-10 text-xl text-gray-500 font-bold">Calender</h1> */}
      <h2  data-testid="current-month" className="mr-4 text-xl text-gray-500 font-bold">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
      <button onClick={handleReset} className="border border-slate-300 hover:bg-gray-200 rounded py-2 px-4 mr-5">
        Today
      </button>
      <button onClick={handlePrevMonth}>
        <span className=" cursor-pointer text-gray-500 hover:text-gray-600 mx-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>

        </span>
      </button>
      <button onClick={handleNextMonth}>
        <span className="cursor-pointer text-gray-500 hover:text-gray-600 mx-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>

        </span>
      </button>
      

    </header>
  );
}

export default CalenderNav;
