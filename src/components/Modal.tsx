import React, { useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext";
// import { writeEventData, deleteEvent } from "../database";

// const labelsClasses = ["indigo", "gray", "green", "blue", "red", "purple"];

function EventModal() {
  const { selectedEvent, setShowEventModal,  dispatchCalEvent } =
    useContext(GlobalContext);

  const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : "");
  const [description, setDescription] = useState(
    selectedEvent ? selectedEvent.description : ""
  );
  const [start, setStart] = useState(
    selectedEvent ? selectedEvent.start : ""
  );
  const [end, setEnd] = useState(
    selectedEvent ? selectedEvent.end : ""
  );
  const [error, setError] = useState<any>(null);

  const minDate = Date.now()

  async function handleSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault();
    if (!title) {
      setError("The title is required.");
    } else  {
      setError(null);
      const event = {
        title,
        description,
        start,
        end
      };
      if (selectedEvent) {
        dispatchCalEvent({ type: "update", payload: {...event, id: selectedEvent.id} });
      } else {
        dispatchCalEvent({ type: "push", payload: event });
      }
      // await createNewEvent(event);
      setShowEventModal(false);
    }
  }

  console.log('selectedEvent', selectedEvent)
  return (
    <div className="h-screen w-full  left-0 flex justify-center items-center absolute">
      <form className="bg-white rounded-lg shadow-2xl w-2/5 z-50">
        <header className="bg-gray-100 px-4 py-2 flex justify-end items-center">
         
          <div className="flex space-x-3">
            {selectedEvent && (
              <span
                onClick={() => {
                  dispatchCalEvent({ type: "delete", payload: selectedEvent });
                  setShowEventModal(false);
                }}
                className="material-icons-outlined text-red-600 cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>

              </span>
            )}
            <button 
            onClick={() => setShowEventModal(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

            </button>
          </div>
        </header>
        <div className="p-3">
        <div className="mt-8 ">
            <div className="grid grid-cols-1 gap-6">
              <label className="block">
                <span className="text-gray-700">Title</span>
                <input
                
                name="title"
                placeholder=""
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  className="
                    mt-1
                    text-xl
                    block
                    w-full
                    p-3
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                  
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Description</span>
                <input
                 value={description}
                  type="text"
                  name="description"
                  onChange={(e) => setDescription(e.target.value)}

                  className="
                    mt-1
                    block
                    p-3
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                  placeholder="john@example.com"
                />
              </label>
              <label className="block">
                <span className="text-gray-700">When is your event start date?</span>
                <input
                  type="date"
                  min={minDate}
                  onChange={(e) => setStart(e.target.value)}
                  value={start}
                  name="start"
                  className="
                    mt-1
                    block
                    p-3
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                />
              </label>
              <label className="block">
                <span className="text-gray-700">When is your event end date?</span>
                <input
                  type="date"
                  onChange={(e) => setEnd(e.target.value)}
                  value={end}
                  name="end"
                  className="
                    mt-1
                    block
                    w-full
                    p-3
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                />
              </label>
             
             
            </div>
          </div>
          
        </div>
        <footer className="flex justify-between items-center border-t p-3 mt-5">
          <small className="text-red-500 ml-1">{error ? error : null}</small>
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
          >
            Save
          </button>
        </footer>
      </form>
    </div>
  );
}

export default EventModal;
