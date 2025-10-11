import React, { useState } from "react";
import {
  FiEdit,
  FiTrash2,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { FaEye } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import user from "../../../assets/avatar.jpg";
import { FaXmark } from "react-icons/fa6";

const documentsData = [
  {
    id: "1",
    photo: user,
    name: "payment.pdf",
    modified: "18 Jul 2024",
    size: "2.3 MB",
    members: 2,
    icon: <FaFilePdf size={18} />,
    members: [
      { id: 1, photo: user },
      { id: 2, photo: user },
    ],
  },
  {
    id: "2",
    photo: user,
    name: "statement.pdf",
    modified: "08 Dec 2024",
    size: "3.7 MB",
    members: 2,
    icon: <FaFilePdf size={18} />,
    members: [
      { id: 1, photo: user },
      { id: 2, photo: user },
      { id: 3, photo: user },
    ],
  },
  {
    id: "3",
    photo: user,
    name: "idcard.pdf",
    modified: "30 Nov 2024",
    size: "1.5 MB",
    members: 2,
    icon: <FaFilePdf size={18} />,
    members: [
      { id: 1, photo: user },
      { id: 2, photo: user },
    ],
  },
  {
    id: "4",
    photo: user,
    name: "invoice.pdf",
    modified: "09 Sep 2024",
    size: "3.2 MB",
    members: 1,
    icon: <FaFilePdf size={18} />,
    members: [{ id: 1, photo: user }],
  },
  {
    id: "5",
    photo: user,
    name: "tutorial.pdf",
    modified: "14 Aug 2024",
    size: "12.7 MB",
    members: 2,
    icon: <FaFilePdf size={18} />,
    members: [
      { id: 1, photo: user },
      { id: 2, photo: user },
    ],
  },
  {
    id: "6",
    photo: user,
    name: "project.pdf",
    modified: "12 Aug 2024",
    size: "5.2 MB",
    members: 3,
    icon: <FaFilePdf size={18} />,
    members: [
      { id: 1, photo: user },
      { id: 2, photo: user },
      { id: 3, photo: user },
    ],
  },
];

const Document = () => {
  const [selectedDocs, setSelectedDocs] = useState([]);
  const allSelected =
    selectedDocs.length === documentsData.length && documentsData.length > 0;

  const [showModal, setShowModal] = useState(false);
  const [documentsData2, setDocumentsData2] = useState([
    {
      id: "1",
      name: "payment.pdf",
      modified: "18 Jul 2024",
      size: "2.3 MB",
      icon: <FaFilePdf size={18} />,
      members: [
        { id: 1, photo: user },
        { id: 2, photo: user },
      ],
    },
  ]);

  const [newDoc, setNewDoc] = useState({
    name: "",
    modified: "",
    size: "",
    members: [],
  });

  const handleSelectAll = () => {
    if (allSelected) {
      setSelectedDocs([]);
    } else {
      setSelectedDocs(documentsData.map((doc) => doc.id));
    }
  };

  const handleSelectOne = (id) => {
    if (selectedDocs.includes(id)) {
      setSelectedDocs(selectedDocs.filter((docId) => docId !== id));
    } else {
      setSelectedDocs([...selectedDocs, id]);
    }
  };

  const handleAddDocument = () => {
    const id = (documentsData2.length + 1).toString();
    setDocumentsData2([
      ...documentsData,
      { id, icon: <FaFilePdf size={18} />, ...newDoc },
    ]);
    setNewDoc({ name: "", modified: "", size: "", members: [] });
    setShowModal(false);
  };

  return (
    <>
      <div className="p-4 bg-white dark:bg-slate-900 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-lg text-slate-800 dark:text-white">
            Documents
          </h2>
          <button
            onClick={() => setShowModal(true)}
            className="py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all cursor-pointer font-semibold"
          >
            Add Document
          </button>
        </div>
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-slate-900 rounded-lg p-5 w-full max-w-md shadow-lg">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">
                  Add Document
                </h2>
                <div
                  onClick={() => setShowModal(false)}
                  className="cursor-pointer"
                >
                  <FaXmark size={22} />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Document Name"
                  value={newDoc.name}
                  onChange={(e) =>
                    setNewDoc({ ...newDoc, name: e.target.value })
                  }
                  className="p-2 border rounded-md w-full"
                />
                <input
                  type="text"
                  placeholder="Last Modified"
                  value={newDoc.modified}
                  onChange={(e) =>
                    setNewDoc({ ...newDoc, modified: e.target.value })
                  }
                  className="p-2 border rounded-md w-full"
                />
                <input
                  type="text"
                  placeholder="Size (e.g., 2.3 MB)"
                  value={newDoc.size}
                  onChange={(e) =>
                    setNewDoc({ ...newDoc, size: e.target.value })
                  }
                  className="p-2 border rounded-md w-full"
                />
                <input
                  type="number"
                  placeholder="Number of Members"
                  value={newDoc.members.length}
                  onChange={(e) =>
                    setNewDoc({
                      ...newDoc,
                      members: Array.from(
                        { length: +e.target.value },
                        (_, i) => ({
                          id: i + 1,
                          photo: user,
                        })
                      ),
                    })
                  }
                  className="p-2 border rounded-md w-full"
                />
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      setNewDoc({
                        ...newDoc,
                        name: file.name,
                        size: (file.size / 1024 / 1024).toFixed(2) + " MB",
                      });
                    }
                  }}
                  className="p-2 border rounded-md w-full"
                />
              </div>

              <div className="flex justify-end gap-3 mt-4">
                <button
                  onClick={handleAddDocument}
                  className="py-2 px-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md hover:shadow-lg transition-all cursor-pointer font-semibold"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse">
            <thead className="text-slate-600 dark:text-slate-300 text-sm border-b border-slate-300 dark:border-slate-700">
              <tr>
                <th className="py-2 px-3">
                  <input
                    type="checkbox"
                    className="cursor-pointer accent-blue-600"
                    checked={allSelected}
                    onChange={handleSelectAll}
                  />
                </th>
                <th className="text-left py-2 px-3">NAME</th>
                <th className="text-left py-2 px-3">LAST MODIFIED</th>
                <th className="text-left py-2 px-3">SIZE</th>
                <th className="text-left py-2 px-3">MEMBERS</th>
                <th className="text-left py-2 px-3">ACTION</th>
              </tr>
            </thead>
            <tbody className="text-slate-800 dark:text-slate-200 text-sm">
              {documentsData.map((doc) => (
                <tr
                  key={doc.id}
                  className="hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all"
                >
                  <td className="py-2 px-3">
                    <input
                      type="checkbox"
                      className="cursor-pointer accent-blue-600"
                      checked={selectedDocs.includes(doc.id)}
                      onChange={() => handleSelectOne(doc.id)}
                    />
                  </td>
                  <td className="py-2 px-3 flex items-center gap-2">
                    <div className="w-[30px] h-[30px] bg-sky-100 text-blue-500 rounded-[6px] flex items-center justify-center">
                      {doc.icon}
                    </div>
                    {doc.name}
                  </td>
                  <td className="py-2 px-3">{doc.modified}</td>
                  <td className="py-2 px-3">{doc.size}</td>
                  <td className="py-2 px-3 flex items-center">
                    {doc.members && doc.members.length > 0
                      ? doc.members.map((member, i) => (
                          <img
                            key={i}
                            src={member.photo}
                            alt="member"
                            className="w-6 h-6 rounded-full border-2 border-white dark:border-slate-900 -ml-2 first:ml-0"
                          />
                        ))
                      : "-"}
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
                                     bg-slate-500 text-white font-semibold"
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

export default Document;
