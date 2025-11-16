import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import "jspdf-autotable";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { FiTrash2, FiEdit } from "react-icons/fi";
import { FaEye } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const transactionsData = [
  {
    id: "#TRX-001245",
    name: "John Carter",
    date: "12 Nov 2025",
    amount: 250.0,
    status: "Paid",
  },
  {
    id: "#TRX-001246",
    name: "Amit Sharma",
    date: "11 Nov 2025",
    amount: 120.0,
    status: "Pending",
  },
  {
    id: "#TRX-001247",
    name: "Anita Singh",
    date: "09 Nov 2025",
    amount: 499.0,
    status: "Failed",
  },
  {
    id: "#TRX-001248",
    name: "Rahul Kumar",
    date: "08 Nov 2025",
    amount: 79.0,
    status: "Paid",
  },
];

const statusColors = {
  Paid: "bg-green-100 text-green-600 dark:bg-green-600/20 dark:text-green-300",
  Pending:
    "bg-yellow-100 text-yellow-600 dark:bg-yellow-600/20 dark:text-yellow-300",
  Failed: "bg-red-100 text-red-600 dark:bg-red-600/20 dark:text-red-300",
};

const Transactions = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(transactionsData);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedTrx, setSelectedTrx] = useState(null);
  const itemsPerPage = 5;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 600);
  }, []);

  const filtered = data.filter(
    (t) =>
      t.name.toLowerCase().includes(search.toLowerCase()) &&
      (filterStatus ? t.status === filterStatus : true)
  );

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = filtered.slice(indexOfFirst, indexOfLast);

  const openDrawer = (trx) => {
    setSelectedTrx(trx);
    setDrawerOpen(true);
  };

  const exportCSV = () => {
    const csv = Papa.unparse(filtered);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    saveAs(blob, "transactions.csv");
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text("Transactions Report", 14, 10);
    doc.autoTable({
      head: [["ID", "User", "Date", "Amount", "Status"]],
      body: filtered.map((t) => [
        t.id,
        t.name,
        t.date,
        `$${t.amount}`,
        t.status,
      ]),
    });
    doc.save("transactions.pdf");
  };

  const [selected, setSelected] = useState([]); // selected IDs
  const allSelected = selected.length === currentItems.length;

  const toggleSelect = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((x) => x !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  const toggleSelectAll = () => {
    if (allSelected) {
      setSelected([]);
    } else {
      setSelected(currentItems.map((item) => item.id));
    }
  };

  const deleteSelected = () => {
    if (selected.length === 0) {
      alert("Please select at least 1 transaction!");
      return;
    }
    alert("Deleting: " + selected.join(", "));
  };

  return (
    <div className=" w-full relative">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Transactions
        </h1>

        <div className="flex gap-3">
          <button
            onClick={exportCSV}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow"
          >
            CSV
          </button>
          <button
            onClick={exportPDF}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg shadow"
          >
            PDF
          </button>
        </div>
      </div>

      <div className="w-full bg-white dark:bg-gray-900 rounded-xl p-4 shadow mb-6">
        <h2 className="font-semibold text-lg mb-3 dark:text-gray-200">
          Revenue Overview
        </h2>

        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <Line type="monotone" dataKey="amount" stroke="#4F46E5" />
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <input
          type="text"
          placeholder="Search transactions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-4 py-2 rounded-lg dark:bg-gray-800 dark:text-white"
        />

        <select
          onChange={(e) => setFilterStatus(e.target.value)}
          className="border px-4 py-2 rounded-lg dark:bg-gray-800 dark:text-white"
        >
          <option value="">Status</option>
          <option>Paid</option>
          <option>Pending</option>
          <option>Failed</option>
        </select>

        <button className="px-4 py-2 cursor-pointer dark:text-slate-100 bg-gradient-to-r from-blue-500 to-purple-600 text-slate-100 font-semibold text-[18px] rounded-lg">
          Filter
        </button>

        {selected.length > 0 && (
          <div className="flex">
            <button
              onClick={deleteSelected}
              className="px-4 py-2 cursor-pointer dark:text-slate-100 bg-gradient-to-r from-blue-500 to-purple-600 text-slate-100 font-semibold text-[18px] rounded-lg"
            >
              Delete Selected ({selected.length})
            </button>
          </div>
        )}
      </div>

      <div className="overflow-x-auto bg-white dark:bg-gray-900 rounded-xl shadow border dark:border-gray-800">
        {loading ? (
          <div className="p-6 space-y-3 animate-pulse">
            <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
            <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
          </div>
        ) : (
          <table className="w-full text-left">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-gray-600 dark:text-gray-300">
                  <input
                    type="checkbox"
                    checked={allSelected}
                    onChange={toggleSelectAll}
                  />
                </th>
                <th className="px-6 py-3 text-gray-600 dark:text-gray-300">
                  ID
                </th>
                <th className="px-6 py-3 text-gray-600 dark:text-gray-300">
                  User
                </th>
                <th className="px-6 py-3 text-gray-600 dark:text-gray-300">
                  Date
                </th>
                <th className="px-6 py-3 text-gray-600 dark:text-gray-300">
                  Amount
                </th>
                <th className="px-6 py-3 text-gray-600 dark:text-gray-300">
                  Status
                </th>
                <th className="px-6 py-3 text-gray-600 dark:text-gray-300">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {currentItems.map((trx, index) => (
                <tr
                  key={index}
                  className="border-b dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition cursor-pointer"
                >
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      checked={selected.includes(trx.id)}
                      onChange={() => toggleSelect(trx.id)}
                      onClick={(e) => e.stopPropagation()}
                    />
                  </td>

                  <td
                    className="px-6 py-4 text-gray-700 dark:text-gray-200"
                    onClick={() => openDrawer(trx)}
                  >
                    {trx.id}
                  </td>

                  <td
                    className="px-6 py-4 dark:text-gray-300"
                    onClick={() => openDrawer(trx)}
                  >
                    {trx.name}
                  </td>

                  <td
                    className="px-6 py-4 dark:text-gray-300"
                    onClick={() => openDrawer(trx)}
                  >
                    {trx.date}
                  </td>

                  <td
                    className="px-6 py-4 font-semibold dark:text-gray-100"
                    onClick={() => openDrawer(trx)}
                  >
                    ${trx.amount}
                  </td>

                  <td className="px-6 py-4" onClick={() => openDrawer(trx)}>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        statusColors[trx.status]
                      }`}
                    >
                      {trx.status}
                    </span>
                  </td>

                  <td className="py-3 px-4 text-center">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={()=>openDrawer(trx)}
                        className="p-2 rounded-md bg-gradient-to-r from-emerald-500 to-teal-600 text-white transition"
                      >
                        <FaEye size={18} />
                      </button>

                      <button className="p-2 rounded-md bg-gradient-to-r from-blue-500 to-indigo-600 text-white transition">
                        <FiEdit size={18} />
                      </button>

                      <button className="p-2 rounded-md bg-gradient-to-r from-orange-500 to-red-600 text-white transition">
                        <FiTrash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div className="flex justify-between items-center mt-4">
        <p className="text-gray-600 dark:text-gray-400">
          Showing {indexOfFirst + 1}–{Math.min(indexOfLast, filtered.length)} of{" "}
          {filtered.length}
        </p>

        <div className="flex gap-2">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            className="px-3 py-1 border rounded dark:border-gray-600"
          >
            Prev
          </button>

          <button
            onClick={() =>
              setCurrentPage((p) =>
                indexOfLast >= filtered.length ? p : p + 1
              )
            }
            className="px-3 py-1 border rounded dark:border-gray-600"
          >
            Next
          </button>
        </div>
      </div>

      {drawerOpen && selectedTrx && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-end z-50">
          <div className="w-full max-w-md h-full bg-white dark:bg-gray-900 shadow-2xl border-l dark:border-gray-800 p-6 animate-slideLeft">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold dark:text-gray-100">
                Transaction Details
              </h2>

              <button
                className="text-gray-600 text-[20px] font-semibold dark:text-gray-300 hover:text-red-500 transition"
                onClick={() => setDrawerOpen(false)}
              >
                <FaXmark />
              </button>
            </div>

            <div className="space-y-4">
              <div className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all">
                <p className="text-sm text-gray-500 dark:text-gray-400 tracking-wide">
                  Transaction ID
                </p>
                <p className="text-lg font-semibold text-gray-900 dark:text-gray-100 mt-1">
                  {selectedTrx?.id}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all">
                <p className="text-sm text-gray-500 dark:text-gray-400 tracking-wide">
                  Customer
                </p>
                <p className="text-lg font-semibold text-gray-900 dark:text-gray-100 mt-1">
                  {selectedTrx?.name}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all">
                <p className="text-sm text-gray-500 dark:text-gray-400 tracking-wide">
                  Date
                </p>
                <p className="text-lg font-semibold text-gray-900 dark:text-gray-100 mt-1">
                  {selectedTrx?.date}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all">
                <p className="text-sm text-gray-500 dark:text-gray-400 tracking-wide">
                  Amount
                </p>
                <p className="text-xl font-bold text-blue-600 dark:text-blue-400 mt-1">
                  ${selectedTrx?.amount}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all">
                <p className="text-sm text-gray-500 dark:text-gray-400 tracking-wide">
                  Status
                </p>

                <p
                  className={`inline-block mt-2 px-3 py-1 text-sm font-medium rounded-full ${
                    statusColors[selectedTrx?.status]
                  }`}
                >
                  {selectedTrx?.status}
                </p>
              </div>
            </div>

            <div className="mt-8">
              <button
                className="w-full py-3 rounded-lg cursor-pointer dark:text-slate-100 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow-m transition"
                onClick={() => setDrawerOpen(false)}
              >
                Close Drawer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Transactions;
