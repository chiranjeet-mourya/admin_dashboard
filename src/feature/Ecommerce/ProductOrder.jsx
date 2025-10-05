import React, { useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import {
  FiEdit,
  FiTrash2,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { FaEye } from "react-icons/fa";
import img from "../../assets/headphone.png";
import img1 from "../../assets/watch.png";

const ProductOrder = () => {
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
          Order
        </div>
      </div>

      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-4">
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
          <table className="w-full border-collapse">
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
    </>
  );
};

export default ProductOrder;
