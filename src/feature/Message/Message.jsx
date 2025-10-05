import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import animation from "../../assets/notification.gif";
import user from "../../assets/avatar.jpg";
import { MdDelete } from "react-icons/md";

const Message = () => {
  
  const notifications = [
    {
      date: "Today",
      count: 2,
      items: [
        {
          name: "Chiranjeet Mourya",
          time: "01:30 PM",
          message:
            "Please ensure you have all necessary documents or items required for the appointment",
        },
        {
          name: "Amit Sharma",
          time: "04:15 PM",
          message: "Meeting scheduled to discuss project updates",
        },
      ],
    },
    {
      date: "Yesterday",
      count: 4,
      items: [
        {
          name: "Priya Verma",
          time: "11:00 AM",
          message: "Follow-up call regarding your submitted report",
        },
        {
          name: "Ravi Kumar",
          time: "03:20 PM",
          message: "Team sync meeting — please be on time",
        },
        {
          name: "Amit Sharma",
          time: "09:00 AM",
          message: "Project meeting scheduled with the client",
        },
        {
          name: "Priya Verma",
          time: "11:30 AM",
          message: "Review your recent task submissions",
        },
      ],
    },
    {
      date: "02 Oct 2025",
      count: 8,
      items: [
        {
          name: "John Doe",
          time: "10:45 AM",
          message: "Client meeting to finalize agreement",
        },
        {
          name: "Neha Patel",
          time: "02:00 PM",
          message: "Discussion about software updates and feedback",
        },
        {
          name: "John Doe",
          time: "10:45 AM",
          message: "Client meeting to finalize agreement",
        },
        {
          name: "Neha Patel",
          time: "02:00 PM",
          message: "Discussion about software updates and feedback",
        },
        {
          name: "John Doe",
          time: "10:45 AM",
          message: "Client meeting to finalize agreement",
        },
        {
          name: "Amit Sharma",
          time: "09:00 AM",
          message: "Project meeting scheduled with the client",
        },
        {
          name: "Priya Verma",
          time: "11:30 AM",
          message: "Review your recent task submissions",
        },
        {
          name: "Ravi Kumar",
          time: "01:45 PM",
          message: "Join the design feedback session",
        },
      ],
    },
  ];

  return (
    <>
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-4">
        <div className="flex items-center gap-1 text-[20px] font-bold text-slate-800 dark:text-white">
          Dashboard
          <MdKeyboardDoubleArrowRight className="mt-0" size={24} />
          Notifications
        </div>
      </div>

      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-3 flex items-center justify-between">
        <div>
          <h3 className="text-[20px] font-semibold text-slate-800 dark:text-white mb-1">
            Notifications
          </h3>
          <p className="text-[15px] text-slate-600 dark:text-slate-300">
            Manage your notification preferences easily. Choose how and when
            you’d like to receive updates, alerts, <br /> and important
            reminders — all designed to keep you informed and in control.
          </p>
          <button className="mt-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-[6px] text-md font-semibold shadow-sm shadow-blue-300 dark:shadow-slate-400 hover:shadow-none transition-all">
            View All
          </button>
        </div>
        <div className="w-[100px] h-[100px]">
          <img
            src={animation}
            alt="animation"
            className="w-full h-full rounded-[10px]"
          />
        </div>
      </div>

      <div className="py-2 px-3 border border-slate-200 rounded-[8px]">
        {notifications.map((section, index) => (
          <div key={index} className="mt-4">
            <div className="flex gap-3 items-center">
              <h2 className="text-slate-800 font-semibold dark:text-slate-300">
                {section.date}
              </h2>
              <span className="w-5 h-5 bg-red-200 flex items-center justify-center rounded-[4px] text-[14px] text-red-500 font-semibold">
                {section.count}
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4 mt-4">
              {section.items.map((item, idx) => (
                <div
                  key={idx}
                  className="w-full bg-white/80 dark:bg-slate-800 p-4 rounded-[6px] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 transition-all shadow-sm hover:shadow-md"
                >
                  <div className="flex gap-3 items-start sm:items-center">
                    <img
                      src={user}
                      alt="user"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <h1 className="font-bold text-slate-800 dark:text-slate-300">
                        Appointment with {item.name}{" "}
                        <span className="text-sm text-slate-400 font-medium">
                          {item.time}
                        </span>
                      </h1>
                      <p className="text-slate-400 font-semibold text-[14px]">
                        {item.message}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 w-[60px] h-[35px] rounded-[6px] text-white font-semibold hover:bg-blue-700 transition-all">
                      View
                    </button>
                    <button className="bg-white dark:bg-slate-700 shadow-md w-[45px] h-[35px] rounded-[6px] flex items-center justify-center text-slate-400 hover:text-red-500 transition-all">
                      <MdDelete size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Message;
