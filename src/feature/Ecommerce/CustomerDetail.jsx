import React, { useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import user from "../../assets/user.jpg";
import { LiaLanguageSolid } from "react-icons/lia";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaShoppingCart,
//   FiEdit,
//   FiTrash2,
} from "react-icons/fa";
import { FiChevronLeft, FiChevronRight,FiTrash2, FiEdit } from "react-icons/fi";
import { FaEye } from "react-icons/fa";
import party from "../../assets/party.gif";
import { LuCircleDollarSign } from "react-icons/lu";
import { LuThumbsUp } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";
import img from "../../assets/headphone.png";
import img1 from "../../assets/watch.png";

const contactInfo = [
  {
    icon: <LiaLanguageSolid size={20} className="text-slate-400" />,
    label: "Language",
    value: "Hindi / English / Spanish",
    type: "text",
  },
  {
    icon: <MdOutlineMailOutline size={20} className="text-slate-400" />,
    label: "Email",
    value: "chiranjeetsingh055@gmail.com",
    type: "email",
  },
  {
    icon: <FiPhone size={20} className="text-slate-400" />,
    label: "Phone",
    value: "+91 901 292 2055",
    type: "tel",
  },
];

const paymentDetail = [
  {
    name: "Total Cost",
    icon: <LuCircleDollarSign />,
    price: "$999",
    cost: "New 365",
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
    textColor: "text-emerald-600 dark:text-emerald-400",
  },
  {
    name: "Total Order",
    icon: <FaShoppingCart />,
    price: "990",
    cost: "Order 365 Days",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    textColor: "text-blue-600 dark:text-blue-400",
  },
  {
    name: "Completed",
    icon: <LuThumbsUp />,
    price: "550",
    cost: "Completed Order 365 Days",
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    textColor: "text-purple-600 dark:text-purple-400",
  },
];

const CustomerDetail = () => {
  const [products] = useState([
    {
      id: "#566987",
      name: "Headphone",
      size: "Size-05 (Model 2021)",
      payment: "UPI",
      price: "$199",
      status: "Completed",
      createdAt: "2025-09-30",
      image: img,
    },
    {
      id: "#453291",
      name: "Smart Watch",
      size: "Size-05 (Model 2021)",
      payment: "Banking",
      price: "$25",
      status: "Cancelled",
      createdAt: "2025-09-20",
      image: img1,
    },
    {
      id: "#112233",
      name: "Indoor Plant",
      size: "Size-05 (Model 2021)",
      payment: "Paypal",
      price: "$25",
      status: "Pending",
      createdAt: "2025-09-20",
      image: img,
    },
    {
      id: "#998877",
      name: "Smart Watch",
      size: "Size-05 (Model 2021)",
      payment: "UPI",
      price: "$25",
      status: "Completed",
      createdAt: "2025-09-20",
      image: img1,
    },
    {
      id: "#778899",
      name: "Headphone",
      size: "Size-05 (Model 2021)",
      payment: "Banking",
      price: "$199",
      status: "Pending",
      createdAt: "2025-09-30",
      image: img,
    },
    {
      id: "#453041",
      name: "Smart Watch",
      size: "Size-05 (Model 2021)",
      payment: "Banking",
      price: "$25",
      status: "Cancelled",
      createdAt: "2025-09-20",
      image: img1,
    },
  ]);

  const [selectedIds, setSelectedIds] = useState([]);

  const allSelected =
    products.length > 0 && selectedIds.length === products.length;

  const handleSelectAll = () => {
    if (allSelected) {
      setSelectedIds([]);
    } else {
      setSelectedIds(products.map((p) => p.id));
    }
  };

  const handleSelectOne = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((pid) => pid !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  return (
    <>
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-4">
        <div className="flex items-center gap-1 text-[20px] font-bold text-slate-800 dark:text-white">
          E-commerce
          <MdKeyboardDoubleArrowRight className="mt-2" size={24} />
          Customer Detail
        </div>
      </div>

      <div className="w-full flex gap-5">
        <div className="md:w-[40%] h-[500px] w-full shadow-md rounded-[6px] bg-white/80 dark:bg-slate-800 relative">
          <div className="user_bg"></div>
          <div className="p-3">
            <div className="w-[130px] h-[130px] absolute top-[25%]">
              <img
                src={user}
                alt=""
                className="w-full h-full rounded-full border-2 border-slate-800 dark:border-white"
              />
            </div>
            <div className="ml-36">
              <h1 className="text-[22px] font-bold text-slate-800 dark:text-white">
                Chiranjeet Mourya
              </h1>
              <p className="text-[16px] font-semibold text-slate-400">
                @Chiranjeet
              </p>
            </div>
          </div>
          <div className="border-t mt-2 border-slate-600 dark:border-slate-300 p-3">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 ${index > 0 ? "mt-3" : ""}`}
              >
                {item.icon}
                <strong className="text-slate-800 dark:text-white">
                  {item.label} :
                </strong>
                {item.type === "text" && (
                  <span className="text-slate-400 text-[15px] font-medium">
                    {item.value}
                  </span>
                )}
                {item.type === "email" && (
                  <a
                    href={`mailto:${item.value}`}
                    className="text-blue-600 underline text-[15px]"
                  >
                    {item.value}
                  </a>
                )}
                {item.type === "tel" && (
                  <a
                    href={`tel:${item.value.replace(/\s+/g, "")}`}
                    className="text-slate-400 hover:underline text-[15px]"
                  >
                    {item.value}
                  </a>
                )}
              </div>
            ))}

            <div className="mt-5 flex gap-3">
              <div className="w-9 h-9 border border-slate-500 rounded-full flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-600 cursor-pointer">
                <FaFacebookF size={20} className="text-slate-400" />
              </div>
              <div className="w-9 h-9 border border-slate-500 rounded-full flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-600 cursor-pointer">
                <FaInstagram size={20} className="text-slate-400" />
              </div>
              <div className="w-9 h-9 border border-slate-500 rounded-full flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-600 cursor-pointer">
                <FaTwitter size={20} className="text-slate-400" />
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[60%] w-full">
          <div className="border border-dashed border-slate-600 dark:border-slate-200 bg-slate-200 text-slate-500 dark:text-slate-200 dark:bg-slate-700 py-2 px-4 rounded-[6px] text-[14px] font-medium flex items-center gap-3">
            <img src={party} alt="party gif" className="w-8 h-8" />
            Chiranjeet Mourya best performance this last year
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 mt-3">
            {paymentDetail.map((payment, index) => {
              return (
                <div
                  key={index}
                  className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-3 border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-slate-900/20 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
                        {payment.name}
                      </p>
                      <p className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
                        {payment.price}
                      </p>
                      <p className="text-[12px] mb-0 font-semibold text-slate-500 dark:text-white">
                        {payment.cost}
                      </p>
                    </div>
                    <div
                      className={`p-2  rounded-xl group-hover:scale-110 transition-all duration-300 ${payment.bgColor}`}
                    >
                      <div
                        className={`w-6 h-6 flex items-center justify-center ${payment.textColor}`}
                      >
                        {payment.icon}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-4 mt-3">
            <div className="flex items-center justify-between">
              <h2 className="text-[18px] text-slate-800 dark:text-white font-semibold">
                Orders
              </h2>
              <div className="flex gap-3">
                <div className="relative inline-block"></div>
                <button className="flex items-center gap-2 bg-purple-600 py-1 px-2 rounded-[6px] text-white font-semibold shadow-md hover:shadow-none shadow-slate-600 dark:shadow-slate-500 transition-all">
                  <FaPlus />
                  Add Order
                </button>
              </div>
            </div>

            <div className="overflow-x-auto mt-6">
              <table className="w-full min-w-[1000px] border-collapse">
                {/* Table Head */}
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-left">
                    <th className="p-3">
                      <input
                        type="checkbox"
                        className="cursor-pointer accent-blue-600"
                        checked={allSelected}
                        onChange={handleSelectAll}
                      />
                    </th>
                    <th className="p-3">ID</th>
                    <th className="p-3">Product Name</th>
                    <th className="p-3">Payment</th>
                    <th className="p-3">Price</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Date</th>
                    <th className="p-3">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {products.map((product) => (
                    <tr
                      key={product.id}
                      className="border-b border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800"
                    >
                      <td className="p-3">
                        <input
                          type="checkbox"
                          className="cursor-pointer accent-blue-600"
                          checked={selectedIds.includes(product.id)}
                          onChange={() => handleSelectOne(product.id)}
                        />
                      </td>
                      <td className="p-3 text-slate-700 dark:text-slate-200 font-medium">
                        {product.id}
                      </td>
                      <td className="p-3 flex items-center gap-3">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-10 h-10 bg-slate-300 dark:bg-slate-300 rounded-md object-cover"
                        />
                        <div className="flex flex-col">
                          <span className="text-md text-slate-700 dark:text-slate-200 font-medium">
                            {product.name}
                          </span>
                          <p className="text-sm text-slate-400 dark:text-slate-200 font-medium">
                            {product.size}
                          </p>
                        </div>
                      </td>

                      {/* Category */}
                      <td className="p-3 text-slate-600 dark:text-slate-300">
                        {product.payment}
                      </td>

                      {/* Price */}
                      <td className="p-3 text-slate-600 dark:text-slate-300">
                        {product.price}
                      </td>

                      {/* Status */}
                      <td className="p-3">
                        <span
                          className={`px-2 py-1 rounded text-xs font-semibold
                            ${
                              product.status === "Completed"
                                ? "bg-green-100 text-green-700 dark:bg-green-700 dark:text-green-100"
                                : product.status === "Cancelled"
                                ? "bg-red-100 text-red-700 dark:bg-red-700 dark:text-red-100"
                                : "bg-yellow-100 text-yellow-700 dark:bg-yellow-600 dark:text-yellow-100"
                            }`}
                        >
                          {product.status}
                        </span>
                      </td>

                      {/* Created At */}
                      <td className="p-3 text-slate-600 dark:text-slate-300">
                        {product.createdAt}
                      </td>

                      {/* Actions */}
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
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-sm text-slate-700 dark:text-slate-200">
                Showing 1 to 10 of 13 entries
              </span>

              <div className="flex items-center gap-2">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerDetail;
