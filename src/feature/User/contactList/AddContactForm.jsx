import React, { useState } from "react";

const AddContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    status: "Active",
    source: "Social",
    image: null,
  });

  const [previewImage, setPreviewImage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Contact Data:", formData);
    alert("Contact Added!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      status: "Active",
      source: "Social",
      image: null,
    });
    setPreviewImage(null);
  };

  return (
    <div className="w-[100%] mx-auto p-0  bg-white dark:bg-slate-900 rounded-lg">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
        Add New Contact
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4 p-2">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-slate-700 dark:text-slate-300 mb-1">
              Customer Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter customer name"
              required
              className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md 
                       bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 
                       focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-slate-700 dark:text-slate-300 mb-1">
              Email ID
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter email"
              required
              className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md 
                       bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 
                       focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-slate-700 dark:text-slate-300 mb-1">
              Phone No
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter phone number"
              required
              className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md 
                       bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 
                       focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-slate-700 dark:text-slate-300 mb-1">
              Status
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md 
                       bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 
                       focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-slate-700 dark:text-slate-300 mb-1">
            Source
          </label>
          <select
            name="source"
            value={formData.source}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md 
                       bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 
                       focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option>Social</option>
            <option>Direct</option>
            <option>Website</option>
          </select>
        </div>

        <div>
          <label className="block text-slate-700 dark:text-slate-300 mb-1">
            Customer Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full text-sm text-slate-700 dark:text-slate-300 
                       file:border file:border-slate-300 dark:file:border-slate-600 
                       file:bg-slate-100 dark:file:bg-slate-700 file:text-slate-700 dark:file:text-slate-200 
                       rounded-md cursor-pointer focus:outline-none"
          />
          {previewImage && (
            <img
              src={previewImage}
              alt="Preview"
              className="mt-3 w-24 h-24 rounded-full object-cover border border-slate-300 dark:border-slate-600"
            />
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-4 py-2 rounded-md transition-all duration-200"
        >
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default AddContactForm;
