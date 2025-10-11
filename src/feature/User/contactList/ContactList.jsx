import React, { useState, useMemo } from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiSearch,
  FiTrash2,
  FiX,
  FiEdit,
} from "react-icons/fi";
import { FaEye } from "react-icons/fa";
import { FaPlus, FaXmark } from "react-icons/fa6";
import AddContactForm from "./AddContactForm";

const ContactList = () => {
  const contactsData = Array.from({ length: 120 }, (_, i) => ({
    id: i + 1,
    name: `Customer ${i + 1}`,
    email: `customer${i + 1}@example.com`,
    phone: `+91 98765${(10000 + i).toString().slice(0, 5)}`,
    status: i % 2 === 0 ? "Active" : "Inactive",
    source: ["Social", "Direct", "Website"][i % 3],
    image: `https://i.pravatar.cc/150?img=${(i % 70) + 1}`,
  }));

  const [contacts, setContacts] = useState(contactsData);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [addContactFormPopup, setAddContactFormPopup] = useState(false);

  const filteredContacts = useMemo(() => {
    return contacts.filter(
      (c) =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.phone.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, contacts]);

  const indexOfLastContact = currentPage * entriesPerPage;
  const indexOfFirstContact = indexOfLastContact - entriesPerPage;
  const currentContacts = filteredContacts.slice(
    indexOfFirstContact,
    indexOfLastContact
  );
  const totalPages = Math.ceil(filteredContacts.length / entriesPerPage);

  const nextPage = () =>
    currentPage < totalPages && setCurrentPage(currentPage + 1);
  const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);

  const handleCheckboxChange = (id) => {
    setSelectedContacts((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      const allIds = currentContacts.map((c) => c.id);
      setSelectedContacts((prev) => [...new Set([...prev, ...allIds])]);
    } else {
      const remaining = selectedContacts.filter(
        (id) => !currentContacts.some((c) => c.id === id)
      );
      setSelectedContacts(remaining);
    }
  };

  const isAllSelected = currentContacts.every((c) =>
    selectedContacts.includes(c.id)
  );

  const handleDeleteSelected = () => {
    setContacts((prev) => prev.filter((c) => !selectedContacts.includes(c.id)));
    setSelectedContacts([]);
    setShowConfirmModal(false);
  };

  return (
    <div className="p-4 bg-white dark:bg-slate-900 min-h-screen">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-5 gap-4">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
          Contact List
        </h2>

        <div className="flex flex-col items-end gap-3 w-full sm:w-auto">
          <button
            onClick={() => setAddContactFormPopup(true)}
            className="flex items-center gap-2 py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-600   hover:shadow-lg 
                 text-white font-medium   rounded-md shadow-sm 
                 transition-all duration-200"
          >
            <span className="text-lg">
              <FaPlus />
            </span>{" "}
            Add Contact
          </button>

          {addContactFormPopup && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
              <div className="bg-white dark:bg-slate-900 rounded-lg shadow-lg w-[80%] sm:w-[50%] p-6 relative">
                {/* Close Button */}
                <button
                  onClick={() => setAddContactFormPopup(false)}
                  className="absolute top-3 right-3 text-slate-500 hover:text-slate-700 dark:text-slate-300 dark:hover:text-white"
                >
                  <FaXmark size={22}/>
                </button>

                <AddContactForm />
              </div>
            </div>
          )}

          <div className="relative w-full sm:w-72">
            <FiSearch className="absolute left-3 top-3 text-slate-500 dark:text-slate-400" />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-10 pr-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 
                   bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200
                   focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-3">
        <div className="flex items-center gap-2">
          <span className="text-slate-700 dark:text-slate-300 text-sm">
            Show
          </span>
          <select
            value={entriesPerPage}
            onChange={(e) => {
              setEntriesPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="border border-slate-300 dark:border-slate-600 rounded-md px-2 py-1 
                       bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200"
          >
            {[10, 15, 25, 50].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
          <span className="text-slate-700 dark:text-slate-300 text-sm">
            entries
          </span>
        </div>

        {selectedContacts.length > 0 && (
          <button
            onClick={() => setShowConfirmModal(true)}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium"
          >
            <FiTrash2 />
            Delete Selected ({selectedContacts.length})
          </button>
        )}
      </div>

      <div className="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-lg">
        <table className="min-w-full border-collapse">
          <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
            <tr>
              <th className="p-3 text-left w-12">
                <input
                  type="checkbox"
                  checked={isAllSelected}
                  onChange={handleSelectAll}
                  className="w-4 h-4 accent-purple-500 cursor-pointer"
                />
              </th>
              <th className="p-3 text-left">Customer</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Phone No</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Source</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentContacts.length === 0 ? (
              <tr>
                <td
                  colSpan="7"
                  className="p-5 text-center text-slate-600 dark:text-slate-300"
                >
                  No matching records found
                </td>
              </tr>
            ) : (
              currentContacts.map((contact) => (
                <tr
                  key={contact.id}
                  className={`border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 ${
                    selectedContacts.includes(contact.id)
                      ? "bg-slate-100 dark:bg-slate-800/50"
                      : ""
                  }`}
                >
                  <td className="p-3">
                    <input
                      type="checkbox"
                      checked={selectedContacts.includes(contact.id)}
                      onChange={() => handleCheckboxChange(contact.id)}
                      className="w-4 h-4 accent-purple-500 cursor-pointer"
                    />
                  </td>

                  <td className="p-3 flex items-center gap-3">
                    <img
                      src={contact.image}
                      alt={contact.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <span className="text-slate-800 dark:text-slate-200 font-medium">
                      {contact.name}
                    </span>
                  </td>

                  <td className="p-3 text-slate-700 dark:text-slate-300">
                    {contact.email}
                  </td>
                  <td className="p-3 text-slate-700 dark:text-slate-300">
                    {contact.phone}
                  </td>

                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        contact.status === "Active"
                          ? "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200"
                          : "bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-200"
                      }`}
                    >
                      {contact.status}
                    </span>
                  </td>

                  <td className="p-3 text-slate-700 dark:text-slate-300">
                    {contact.source}
                  </td>

                  <td className="py-3 px-4 text-center">
                    <div className="flex items-center gap-2">
                      <button className="p-2 rounded-md bg-gradient-to-r from-emerald-500 to-teal-600 text-white transition">
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
              ))
            )}
          </tbody>
        </table>
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 pb-5">
          <span className="text-sm text-slate-700 dark:text-slate-200">
            Showing {indexOfFirstContact + 1} to{" "}
            {Math.min(indexOfLastContact, filteredContacts.length)} of{" "}
            {filteredContacts.length} entries
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="flex items-center gap-1 px-3 py-1 rounded-md border border-slate-300 dark:border-slate-600 
                     text-slate-700 dark:text-slate-200 
                     hover:bg-slate-200 dark:hover:bg-slate-700 
                     disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FiChevronLeft className="text-lg" />
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 rounded-md border border-slate-300 dark:border-slate-600 
                     ${
                       currentPage === i + 1
                         ? "bg-purple-600 text-white font-semibold"
                         : "text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700"
                     }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className="flex items-center gap-1 px-3 py-1 rounded-md border border-slate-300 dark:border-slate-600 
                     text-slate-700 dark:text-slate-200 
                     hover:bg-slate-200 dark:hover:bg-slate-700 
                     disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
              <FiChevronRight className="text-lg" />
            </button>
          </div>
        </div>
      </div>

      {showConfirmModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 w-[90%] sm:w-96">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                Confirm Deletion
              </h3>
              <button
                onClick={() => setShowConfirmModal(false)}
                className="text-slate-500 hover:text-slate-700 dark:text-slate-300 dark:hover:text-white"
              >
                <FiX size={20} />
              </button>
            </div>

            <p className="text-slate-700 dark:text-slate-300 mb-6">
              Are you sure you want to delete{" "}
              <strong>{selectedContacts.length}</strong> selected contacts? This
              action cannot be undone.
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="px-4 py-2 rounded-md bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-white hover:bg-slate-300 dark:hover:bg-slate-600"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteSelected}
                className="px-4 py-2 rounded-md bg-red-600 hover:bg-red-700 text-white font-medium"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactList;
