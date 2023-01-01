import React, { Fragment } from "react";
import Day from "./Day";

interface Month{
  month: any;
}
function Month({ month } : Month) {
  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5" >
      {month?.map((row: any, i: any) => (
        <Fragment key={i}>
          {row?.map((day: any, index: any) => (
            <Day day={day} key={day} rowIdx={i} />
          ))}
        </Fragment>
      ))}
    </div>
  );
}

export default Month;
