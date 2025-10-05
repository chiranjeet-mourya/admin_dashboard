import { useState, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

export default function Calendar() {
  const calendarRef = useRef(null);
  const [activeDate, setActiveDate] = useState("");

  const handleDateClick = (info) => {
    setActiveDate(info.dateStr);
  };

  const renderDayCell = (dayCellInfo) => {
    const isActive = dayCellInfo.dateStr === activeDate;
    return (
      <div
        className={`flex justify-center items-center w-full h-full ${
          isActive
            ? "bg-slate-200 dark:bg-slate-700 rounded-md"
            : "dark:text-slate-200 text-slate-800"
        }`}
      >
        {dayCellInfo.dayNumberText}
      </div>
    );
  };

  const handleMonthChange = (e) => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.gotoDate(e.target.value);
  };

  const festivals = [
      { title: "Republic Day", date: "2025-01-26" },
      { title: "Holi", date: "2025-03-10" },
      { title: "Eid", date: "2025-04-21" },
      { title: "Independence Day", date: "2025-08-15" },
      { title: "Ganesh Chaturthi", date: "2025-09-07" },
      { title: "Diwali", date: "2025-10-24" },
      { title: "Christmas", date: "2025-12-25" },
      { title: "New Year", date: "2026-01-01" },
  ];

  return (
    <div className="p-5 bg-white dark:bg-slate-900 rounded-xl shadow">
      <div className="mb-4 flex items-center gap-4">
        <label className="text-slate-700 dark:text-slate-200 font-semibold">
          Select Month:
        </label>
        <select
          onChange={handleMonthChange}
          className="px-3 py-1 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200"
        >
          <option value="2025-01-01">January 2025</option>
          <option value="2025-02-01">February 2025</option>
          <option value="2025-03-01">March 2025</option>
          <option value="2025-04-01">April 2025</option>
          <option value="2025-05-01">May 2025</option>
          <option value="2025-06-01">June 2025</option>
          <option value="2025-07-01">July 2025</option>
          <option value="2025-08-01">August 2025</option>
          <option value="2025-09-01">September 2025</option>
          <option value="2025-10-01">October 2025</option>
          <option value="2025-11-01">November 2025</option>
          <option value="2025-12-01">December 2025</option>
        </select>
      </div>

      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        dateClick={handleDateClick}
        dayCellContent={renderDayCell}
        events={festivals}  
        height="550px"
        dayCellClassNames={(arg) => [
          "transition-colors",
          arg.isToday
            ? "bg-blue-100 dark:bg-blue-700 rounded-full"
            : "",
        ]}
        eventClassNames={() =>
          "bg-red-500 text-white dark:bg-red-600 dark:text-white rounded px-1"
        }
      />
    </div>
  );
}
