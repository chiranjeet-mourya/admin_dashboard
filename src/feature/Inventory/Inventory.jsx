import React, { useState } from "react";
import { FiPlus, FiSearch, FiEdit, FiTrash2 } from "react-icons/fi";
import { FaEye } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Inventory = () => {
  const defaultProducts = [
    {
      id: "INV-001",
      name: "Wireless Mouse",
      qty: 45,
      price: 599,
      status: "In Stock",
    },
    {
      id: "INV-002",
      name: "Bluetooth Keyboard",
      qty: 12,
      price: 999,
      status: "Low Stock",
    },
    {
      id: "INV-003",
      name: "Laptop Stand",
      qty: 0,
      price: 799,
      status: "Out of Stock",
    },
    {
      id: "INV-004",
      name: "USB-C Cable",
      qty: 120,
      price: 199,
      status: "In Stock",
    },
    {
      id: "INV-005",
      name: "Bluetooth Keyboard",
      qty: 12,
      price: 999,
      status: "Low Stock",
    },
    {
      id: "INV-006",
      name: "Laptop Stand",
      qty: 0,
      price: 799,
      status: "Out of Stock",
    },
    {
      id: "INV-007",
      name: "USB-C Cable",
      qty: 120,
      price: 199,
      status: "In Stock",
    },
  ];

  const [search, setSearch] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productList, setProductList] = useState(() => {
    const saved = localStorage.getItem("products");
    return saved ? JSON.parse(saved) : defaultProducts;
  });

  const [addModalOpen, setAddModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemParPage] = useState(5);

  const [confirmDeleted, setConfirmDeleted] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [statusFilter, setStatusFilter] = useState("Status");

  const [pid, setPid] = useState("");
  const [pname, setPname] = useState("");
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("");

  const statusColors = {
    "In Stock": "bg-green-100 text-green-700",
    "Low Stock": "bg-yellow-100 text-yellow-700",
    "Out of Stock": "bg-red-100 text-red-700",
  };

  const openDrawer = (item) => {
    setSelectedProduct(item);
    setDrawerOpen(true);
  };

  const deleteProduct = (id) => {
    const updated = productList.filter((p) => p.id !== id);
    setProductList(updated);
    setProductList((prev) => prev.filter((p) => p.id !== id));
  };

  const editProduct = (item) => {
    alert("Edit functionality will be added later!");
  };

  const filterProducts = productList.filter((p) => {
    const searchMatch = p.name.toLowerCase().includes(search.toLowerCase());

    const statusMatch =
      statusFilter === "" || statusFilter === "Status"
        ? true
        : p.status === statusFilter;

    return searchMatch && statusMatch;
  });

  const totalPages = Math.ceil(filterProducts.length / itemParPage);

  const indexOfLast = currentPage * itemParPage;
  const indexOfFirst = indexOfLast - itemParPage;

  const currentProducts = filterProducts.slice(indexOfFirst, indexOfLast);

  const handleSaveProduct = () => {
    if (!pid || !pname || !qty || !price || !status) {
      alert("Please fill all fields");
      return;
    }

    const newProduct = {
      id: pid,
      name: pname,
      qty: qty,
      price: price,
      status: status,
    };

    const updatedList = [...productList, newProduct];

    setProductList(updatedList);
    localStorage.setItem("products", JSON.stringify(updatedList));

    setPid("");
    setPname("");
    setQty("");
    setPrice("");
    setStatus("");

    setAddModalOpen(false);
  };

  return (
    <div className="w-full bg-white rounded-lg dark:bg-gray-900 px-3 p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Inventory Management
        </h1>

        <button
          onClick={() => setAddModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow"
        >
          <FiPlus size={18} />
          Add New Inventory
        </button>
      </div>

      {addModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="w-full max-w-[50%] bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-xl animate-popup">
            <div className="flex justify-between items-center mb-4 border-b pb-2 border-slate-600 dark:border-slate-300">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                Add New Inventory
              </h2>

              <button
                onClick={() => setAddModalOpen(false)}
                className="text-gray-600 hover:text-red-500 dark:text-gray-300 dark:hover:text-red-400 text-xl"
              >
                <FaXmark />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
                  Inventory ID
                </label>
                <input
                  type="text"
                  placeholder="Enter Inventory id"
                  value={pid}
                  onChange={(e) => setPid(e.target.value)}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none 
            dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
                  Inventory Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Inventory name"
                  value={pname}
                  onChange={(e) => setPname(e.target.value)}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none 
            dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
                  Quantity
                </label>
                <input
                  type="number"
                  placeholder="Enter quantity"
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none
            dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
                  Price (₹)
                </label>
                <input
                  type="number"
                  placeholder="Enter price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none 
            dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
                  Status
                </label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none 
            dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                >
                  <option value="">Select Status</option>
                  <option>In Stock</option>
                  <option>Low Stock</option>
                  <option>Out of Stock</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setAddModalOpen(false)}
                className="px-4 py-2 rounded-lg border dark:border-gray-700 dark:text-white hover:bg-gray-100 
          dark:hover:bg-gray-800 transition"
              >
                Cancel
              </button>

              <button
                onClick={handleSaveProduct}
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow transition"
              >
                Save Inventory
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white dark:bg-gray-800 rounded-xl mb-3 flex flex-col md:flex-row md:items-center gap-4">
        <div className="flex items-center w-full md:w-1/3 px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
          <FiSearch size={18} className="text-gray-500 dark:text-gray-300" />
          <input
            type="text"
            placeholder="Search products..."
            className="ml-2 bg-transparent w-full outline-none text-gray-700 dark:text-gray-200"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
        >
          <option>Status</option>
          <option>In Stock</option>
          <option>Low Stock</option>
          <option>Out of Stock</option>
        </select>
      </div>

      <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-xl shadow">
        <table className="w-full text-left">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Product</th>
              <th className="px-6 py-3">Qty</th>
              <th className="px-6 py-3">Price</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {currentProducts?.map((product) => (
              <tr
                key={product?.id}
                className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <td className="px-6 py-4">{product?.id}</td>
                <td className="px-6 py-4">{product?.name}</td>
                <td className="px-6 py-4">{product?.qty}</td>
                <td className="px-6 py-4 font-semibold">₹{product.price}</td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 text-sm rounded-full ${
                      statusColors[product?.status]
                    }`}
                  >
                    {product?.status}
                  </span>
                </td>

                <td className="py-3 px-4 text-center">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => openDrawer(product)}
                      className="p-2 rounded-md bg-emerald-600 text-white"
                    >
                      <FaEye size={18} />
                    </button>

                    <button
                      onClick={() => editProduct(product)}
                      className="p-2 rounded-md bg-blue-600 text-white"
                    >
                      <FiEdit size={18} />
                    </button>

                    <button
                      onClick={() => {
                        setDeleteId(product.id);
                        setConfirmDeleted(true);
                      }}
                      className="p-2 rounded-md bg-red-600 text-white"
                    >
                      <FiTrash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex flex-col sm:flex-row items-center justify-between my-4 px-3">
          <span className="text-sm text-slate-700 dark:text-slate-300 mb-3 sm:mb-0">
            Showing {indexOfFirst + 1} to{" "}
            {Math.min(indexOfLast, filterProducts.length)} of{" "}
            {filterProducts.length} entries
          </span>

          <div className="flex items-center gap-2">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
              className="px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-600
               text-slate-700 dark:text-slate-200 
               hover:bg-slate-200 dark:hover:bg-slate-700
               disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-600 
          ${
            currentPage === page
              ? "bg-blue-600 text-white font-semibold"
              : "text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700"
          }
        `}
              >
                {page}
              </button>
            ))}

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
              className="px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-600
               text-slate-700 dark:text-slate-200 
               hover:bg-slate-200 dark:hover:bg-slate-700
               disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>
        {confirmDeleted && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-900 w-full max-w-md p-6 rounded-xl shadow-xl">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 text-center">
                Confirm Delete
              </h2>

              <p className="text-gray-600 dark:text-gray-300 text-center mt-3">
                Are you sure you want to delete this product?
              </p>

              <div className="flex justify-center gap-4 mt-6">
                <button
                  onClick={() => setConfirmDeleted(false)}
                  className="px-5 py-2 rounded-lg border border-gray-400 dark:border-gray-600 
                     text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Cancel
                </button>

                <button
                  onClick={() => {
                    deleteProduct(deleteId);
                    setConfirmDeleted(false);
                  }}
                  className="px-5 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {drawerOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-end z-50">
          <div className="w-full max-w-md h-full bg-white dark:bg-gray-900 shadow-2xl p-6 animate-slide-left overflow-y-auto">
            <div className="flex justify-between items-center border-b dark:border-gray-700 pb-3">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                Product Details
              </h2>

              <button
                onClick={() => setDrawerOpen(false)}
                className="text-gray-600 hover:text-red-500 dark:text-gray-300 dark:hover:text-red-400 text-2xl leading-none"
              >
                <FaXmark />
              </button>
            </div>

            <div className="mt-6 space-y-5">
              <div className="p-4 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-sm">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Product ID
                </p>
                <p className="text-lg font-semibold text-gray-900 dark:text-gray-200">
                  {selectedProduct?.id}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-sm">
                <p className="text-sm text-gray-500 dark:text-gray-400">Name</p>
                <p className="text-lg font-semibold text-gray-900 dark:text-gray-200">
                  {selectedProduct?.name}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-sm">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Quantity
                </p>
                <p className="text-lg font-semibold text-gray-900 dark:text-gray-200">
                  {selectedProduct?.qty}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-sm">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Price
                </p>
                <p className="text-xl font-bold text-blue-600 dark:text-blue-400">
                  ₹{selectedProduct?.price}
                </p>
              </div>

              {/* Status */}
              <div className="p-4 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-sm">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Status
                </p>

                <span
                  className={`inline-block mt-2 px-4 py-1.5 text-sm font-medium rounded-full 
            ${
              selectedProduct?.status === "In Stock"
                ? "bg-green-100 text-green-700"
                : selectedProduct?.status === "Low Stock"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-red-100 text-red-700"
            }`}
                >
                  {selectedProduct?.status}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Inventory;
