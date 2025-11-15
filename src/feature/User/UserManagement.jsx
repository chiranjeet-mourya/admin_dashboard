import React, { useState } from "react";
import StateGrid from "../dashboard/StateGrid";
import { IoSearch } from "react-icons/io5";
import user from "../../assets/avatar.jpg";
import {
  FiEdit,
  FiTrash2,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { FaPlus, FaTimes, FaEye } from "react-icons/fa";


const UserManagement = () => {
  const [isOn, setIsOn] = useState(false);
  const [open, setOpen] = useState(false);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <StateGrid />

      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-b-2xl border border-slate-200/50 dark:border-slate-700/50 p-4">
        <div className="flex gap-3 items-center justify-between">
          <select className="bg-transparent border border-slate-800 dark:border-slate-200 px-3 py-1 rounded-[6px] dark:text-slate-200 text-slate-800">
            <option value="all">All</option>
            <option value="1">1</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <div className="flex items-center gap-2 border border-slate-800 dark:border-slate-200 px-3 py-1 rounded-[6px] dark:text-slate-200 text-slate-800">
            <IoSearch size={20} />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none"
            />
          </div>
        </div>

        <div className="mt-5 w-full overflow-auto custom-scrollbar">
          <table className="min-w-[1100px] w-full rounded-lg">
            <thead className="bg-slate-300 dark:bg-slate-600">
              <tr className="text-slate-800 dark:text-slate-300 text-left text-sm md:text-base">
                <th className="py-3 px-4">S.No</th>
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4 text-center">Status</th>
                <th className="py-3 px-4">Email</th>
                <th className="py-3 px-4">Phone</th>
                <th className="py-3 px-4">Created By</th>
                <th className="py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-slate-100 dark:bg-slate-800 divide-y divide-slate-300 dark:divide-slate-700">
              <tr className="hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-slate-800 dark:text-slate-200 text-sm md:text-base">
                <td className="py-3 px-4 text-center">1.</td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={user}
                      alt="user"
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="text-left">
                      <span className="text-[15px] font-semibold">
                        Chiranjeet Mourya
                      </span>
                      <p className="text-[13px] md:text-[14px] font-medium text-slate-600 dark:text-slate-400">
                        Registered On: 02 Oct, 2025
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4 text-center">
                  {/* Toggle switch */}
                  <div
                    onClick={() => setIsOn(!isOn)}
                    className={`relative w-[50px] h-[25px] rounded-full cursor-pointer transition-all duration-300 
                  ${
                    isOn
                      ? "bg-gradient-to-b from-slate-700 to-slate-800"
                      : "bg-gradient-to-b from-gray-400 to-gray-200 dark:from-slate-500 dark:to-slate-600"
                  }
                `}
                  >
                    <div
                      className={`absolute top-[1px] left-[1px] w-[23px] h-[23px] bg-white rounded-full shadow-md transition-transform duration-300 
                    ${isOn ? "translate-x-[25px]" : "translate-x-0"}
                  `}
                    ></div>
                  </div>
                </td>
                <td className="py-3 px-4">chiranjeetsingh@gmail.com</td>
                <td className="py-3 px-4">9999999999</td>
                <td className="py-3 px-4">02 Oct, 2025</td>
                <td className="py-3 px-4 text-center">
                  <div className="flex items-center gap-2">
                    <button className="p-2 rounded-md bg-gradient-to-r from-emerald-500 to-teal-600 text-white transition">
                      <FaEye size={18} />
                    </button>
                    {/* Edit button */}
                    <button className="p-2 rounded-md bg-gradient-to-r from-blue-500 to-indigo-600 text-white transition">
                      <FiEdit size={18} />
                    </button>

                    {/* Delete button */}
                    <button className="p-2 rounded-md bg-gradient-to-r from-orange-500 to-red-600 text-white transition">
                      <FiTrash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-slate-800 dark:text-slate-200 text-sm md:text-base">
                <td className="py-3 px-4 text-center">1.</td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={user}
                      alt="user"
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="text-left">
                      <span className="text-[15px] font-semibold">
                        Ranjeet Mourya
                      </span>
                      <p className="text-[13px] md:text-[14px] font-medium text-slate-600 dark:text-slate-400">
                        Registered On: 02 Oct, 2025
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4 text-center">
                  {/* Toggle switch */}
                  <div
                    onClick={() => setIsOn(!isOn)}
                    className={`relative w-[50px] h-[25px] rounded-full cursor-pointer transition-all duration-300 
                  ${
                    isOn
                      ? "bg-gradient-to-b from-slate-700 to-slate-800"
                      : "bg-gradient-to-b from-gray-400 to-gray-200 dark:from-slate-500 dark:to-slate-600"
                  }
                `}
                  >
                    <div
                      className={`absolute top-[1px] left-[1px] w-[23px] h-[23px] bg-white rounded-full shadow-md transition-transform duration-300 
                    ${isOn ? "translate-x-[25px]" : "translate-x-0"}
                  `}
                    ></div>
                  </div>
                </td>
                <td className="py-3 px-4">ranjeet300400@gmail.com</td>
                <td className="py-3 px-4">9999999999</td>
                <td className="py-3 px-4">02 Oct, 2025</td>
                <td className="py-3 px-4 text-center">
                  <div className="flex items-center gap-2">
                    <button className="p-2 rounded-md bg-gradient-to-r from-emerald-500 to-teal-600 text-white transition">
                      <FaEye size={18} />
                    </button>
                    {/* Edit button */}
                    <button className="p-2 rounded-md bg-gradient-to-r from-blue-500 to-indigo-600 text-white transition">
                      <FiEdit size={18} />
                    </button>

                    {/* Delete button */}
                    <button className="p-2 rounded-md bg-gradient-to-r from-orange-500 to-red-600 text-white transition">
                      <FiTrash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-slate-800 dark:text-slate-200 text-sm md:text-base">
                <td className="py-3 px-4 text-center">1.</td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={user}
                      alt="user"
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="text-left">
                      <span className="text-[15px] font-semibold">
                        Chiranjeet Mourya
                      </span>
                      <p className="text-[13px] md:text-[14px] font-medium text-slate-600 dark:text-slate-400">
                        Registered On: 02 Oct, 2025
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4 text-center">
                  {/* Toggle switch */}
                  <div
                    onClick={() => setIsOn(!isOn)}
                    className={`relative w-[50px] h-[25px] rounded-full cursor-pointer transition-all duration-300 
                  ${
                    isOn
                      ? "bg-gradient-to-b from-slate-700 to-slate-800"
                      : "bg-gradient-to-b from-gray-400 to-gray-200 dark:from-slate-500 dark:to-slate-600"
                  }
                `}
                  >
                    <div
                      className={`absolute top-[1px] left-[1px] w-[23px] h-[23px] bg-white rounded-full shadow-md transition-transform duration-300 
                    ${isOn ? "translate-x-[25px]" : "translate-x-0"}
                  `}
                    ></div>
                  </div>
                </td>
                <td className="py-3 px-4">chiranjeetsingh@gmail.com</td>
                <td className="py-3 px-4">9999999999</td>
                <td className="py-3 px-4">02 Oct, 2025</td>
                <td className="py-3 px-4 text-center">
                  <div className="flex items-center gap-2">
                    <button className="p-2 rounded-md bg-gradient-to-r from-emerald-500 to-teal-600 text-white transition">
                      <FaEye size={18} />
                    </button>
                    {/* Edit button */}
                    <button className="p-2 rounded-md bg-gradient-to-r from-blue-500 to-indigo-600 text-white transition">
                      <FiEdit size={18} />
                    </button>

                    {/* Delete button */}
                    <button className="p-2 rounded-md bg-gradient-to-r from-orange-500 to-red-600 text-white transition">
                      <FiTrash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-slate-800 dark:text-slate-200 text-sm md:text-base">
                <td className="py-3 px-4 text-center">1.</td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={user}
                      alt="user"
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="text-left">
                      <span className="text-[15px] font-semibold">
                        Ranjeet Mourya
                      </span>
                      <p className="text-[13px] md:text-[14px] font-medium text-slate-600 dark:text-slate-400">
                        Registered On: 02 Oct, 2025
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4 text-center">
                  {/* Toggle switch */}
                  <div
                    onClick={() => setIsOn(!isOn)}
                    className={`relative w-[50px] h-[25px] rounded-full cursor-pointer transition-all duration-300 
                  ${
                    isOn
                      ? "bg-gradient-to-b from-slate-700 to-slate-800"
                      : "bg-gradient-to-b from-gray-400 to-gray-200 dark:from-slate-500 dark:to-slate-600"
                  }
                `}
                  >
                    <div
                      className={`absolute top-[1px] left-[1px] w-[23px] h-[23px] bg-white rounded-full shadow-md transition-transform duration-300 
                    ${isOn ? "translate-x-[25px]" : "translate-x-0"}
                  `}
                    ></div>
                  </div>
                </td>
                <td className="py-3 px-4">ranjeet300400@gmail.com</td>
                <td className="py-3 px-4">9999999999</td>
                <td className="py-3 px-4">02 Oct, 2025</td>
                <td className="py-3 px-4 text-center">
                  <div className="flex items-center gap-2">
                    <button className="p-2 rounded-md bg-gradient-to-r from-emerald-500 to-teal-600 text-white transition">
                      <FaEye size={18} />
                    </button>
                    {/* Edit button */}
                    <button className="p-2 rounded-md bg-gradient-to-r from-blue-500 to-indigo-600 text-white transition">
                      <FiEdit size={18} />
                    </button>

                    {/* Delete button */}
                    <button className="p-2 rounded-md bg-gradient-to-r from-orange-500 to-red-600 text-white transition">
                      <FiTrash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-slate-800 dark:text-slate-200 text-sm md:text-base">
                <td className="py-3 px-4 text-center">1.</td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={user}
                      alt="user"
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="text-left">
                      <span className="text-[15px] font-semibold">
                        Chiranjeet Mourya
                      </span>
                      <p className="text-[13px] md:text-[14px] font-medium text-slate-600 dark:text-slate-400">
                        Registered On: 02 Oct, 2025
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4 text-center">
                  {/* Toggle switch */}
                  <div
                    onClick={() => setIsOn(!isOn)}
                    className={`relative w-[50px] h-[25px] rounded-full cursor-pointer transition-all duration-300 
                  ${
                    isOn
                      ? "bg-gradient-to-b from-slate-700 to-slate-800"
                      : "bg-gradient-to-b from-gray-400 to-gray-200 dark:from-slate-500 dark:to-slate-600"
                  }
                `}
                  >
                    <div
                      className={`absolute top-[1px] left-[1px] w-[23px] h-[23px] bg-white rounded-full shadow-md transition-transform duration-300 
                    ${isOn ? "translate-x-[25px]" : "translate-x-0"}
                  `}
                    ></div>
                  </div>
                </td>
                <td className="py-3 px-4">chiranjeetsingh@gmail.com</td>
                <td className="py-3 px-4">9999999999</td>
                <td className="py-3 px-4">02 Oct, 2025</td>
                <td className="py-3 px-4 text-center">
                  <div className="flex items-center gap-2">
                    <button className="p-2 rounded-md bg-gradient-to-r from-emerald-500 to-teal-600 text-white transition">
                      <FaEye size={18} />
                    </button>
                    {/* Edit button */}
                    <button className="p-2 rounded-md bg-gradient-to-r from-blue-500 to-indigo-600 text-white transition">
                      <FiEdit size={18} />
                    </button>

                    {/* Delete button */}
                    <button className="p-2 rounded-md bg-gradient-to-r from-orange-500 to-red-600 text-white transition">
                      <FiTrash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Left side text */}
          <span className="text-sm text-slate-700 dark:text-slate-200">
            Showing 1 to 10 of 13 entries
          </span>

          {/* Pagination */}
          <div className="flex items-center gap-2">
            {/* Previous Button */}
            <button
              className="flex items-center gap-1 px-3 py-1 rounded-md border border-slate-300 dark:border-slate-600 
                     text-slate-700 dark:text-slate-200 
                     hover:bg-slate-200 dark:hover:bg-slate-700 
                     disabled:opacity-50 disabled:cursor-not-allowed"
              disabled
            >
              <FiChevronLeft className="text-lg" />
              Previous
            </button>

            {/* Page Numbers */}
            <button
              className="px-3 py-1 rounded-md border border-slate-300 dark:border-slate-600 
                     bg-purple-600 text-white font-semibold"
            >
              1
            </button>
            <button
              className="px-3 py-1 rounded-md border border-slate-300 dark:border-slate-600 
                     text-slate-700 dark:text-slate-200 
                     hover:bg-slate-200 dark:hover:bg-slate-700"
            >
              2
            </button>

            {/* Next Button */}
            <button
              className="flex items-center gap-1 px-3 py-1 rounded-md border border-slate-300 dark:border-slate-600 
                     text-slate-700 dark:text-slate-200 
                     hover:bg-slate-200 dark:hover:bg-slate-700"
            >
              Next
              <FiChevronRight className="text-lg" />
            </button>
          </div>
        </div>

        <div
          onClick={() => setOpen(true)}
          className="mt-5 w-[200px] flex items-center justify-center gap-2 py-2 rounded-[6px] hover:shadow-lg text-slate-100 cursor-pointer dark:text-slate-100 bg-gradient-to-r from-blue-500 to-purple-600"
        >
          <FaPlus />
          <h2 className="font-semibold text-[18px] mb-0">Add New User</h2>
        </div>

        {open && (
          <div className="fixed inset-0  flex items-center justify-center bg-black/80 z-50">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg w-[90%] max-w-[50%]  relative">
              <div className="flex justify-between items-center pb-3 bg-gradient-to-r from-blue-500 to-purple-600 py-3 px-5 rounded-t-lg">
                <h2 className="text-lg font-semibold text-slate-200 dark:text-slate-100">
                  Add User
                </h2>
                <button
                  onClick={() => setOpen(false)}
                  className="text-slate-200 dark:text-slate-100 hover:text-slate-300"
                >
                  <FaTimes size={22} />
                </button>
              </div>

              <form className="flex flex-col gap-4 p-4 dark:bg-slate-900">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter name"
                    className="w-full px-3 py-2 border rounded-md border-slate-400 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="w-full px-3 py-2 border rounded-md border-slate-400 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-1">
                    Phone No
                  </label>
                  <input
                    type="number"
                    placeholder="Enter phone no"
                    className="w-full px-3 py-2 border rounded-md border-slate-400 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100"
                  />
                </div>

                <div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-1">
                      Upload Image
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="w-full text-sm text-slate-600 dark:text-slate-200 
                     file:mr-4 file:py-2 file:px-4
                     file:rounded-md file:border-0
                     file:text-sm file:font-semibold
                     file:bg-purple-600 file:text-white
                     hover:file:bg-purple-700
                     cursor-pointer"
                    />
                  </div>

                  {preview && (
                    <div
                      className="w-[150px] h-[120px] border border-slate-800 rounded-[6px] font-semibold flex items-center justify-center mt-3 bg-cover bg-center"
                      style={{ backgroundImage: `url(${preview})` }}
                    ></div>
                  )}
                </div>

                <button
                  type="submit"
                  className="mt-2 py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all cursor-pointer font-semibold text-[18px]"
                >
                  Save User
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default UserManagement;
