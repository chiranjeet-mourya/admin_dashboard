import React, { useState } from "react";
import { AiOutlineBell } from "react-icons/ai";
import { IoEyeOutline, IoEllipsisVerticalSharp } from "react-icons/io5";
import { LuThumbsUp } from "react-icons/lu";
import { FaRegCommentDots } from "react-icons/fa";
import { GrGallery, GrAttachment } from "react-icons/gr";
import user from "../../assets/avatar.jpg";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

// gallery
import img_1 from "../../assets/profile_gallery/img_1.jpg";
import img_2 from "../../assets/profile_gallery/img_2.jpg";
import img_3 from "../../assets/profile_gallery/img_3.jpg";
import img_4 from "../../assets/profile_gallery/img_4.jpg";
import img_5 from "../../assets/profile_gallery/img_5.jpg";
import img_6 from "../../assets/profile_gallery/img_6.jpg";

const ProfileTabs = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("post");
  const [switchTab, setSwitchTab] = useState("personnal");

  const [formData, setFormData] = useState({
    fname: "Chiranjeet",
    lname: "Mourya",
    dob: "01 Jan 2006",
    position: "Front End Developer",
    education: "B C A, Hapur Monad University",
    languages: "Hindi / English / Spanish",
    phone: "+91 901 292 2055",
    email: "chiranjeetsingh055@gmail.com",
    technicalSkill: "React Js",
  });

  const profileFormData = [
    { label: "First Name ", value: formData.fname },
    { label: "Last Name ", value: formData.lname },
    { label: "Date of Birth ", value: formData.dob },
    { label: "Position ", value: formData.position },
    { label: "Education ", value: formData.education },
    { label: "Languages ", value: formData.languages },
    { label: "Phone ", value: formData.phone },
    { label: "Email ", value: formData.email },
  ];

  const technicalSkills = [
    "Javascript",
    "React Js",
    "Next Js",
    "Tailwind CSS",
    "Bootstrap",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log("Updated Profile Data:", formData);
    setShowPopup(false);
  };

  const galleryImg = [
    { img: img_1 },
    { img: img_2 },
    { img: img_3 },
    { img: img_4 },
    { img: img_5 },
    { img: img_6 },
  ];

  const openPopup = (index) => {
    setSelectedIndex(index);
  };

  const closePopup = () => {
    setSelectedIndex(null);
  };

  const nextImage = () => {
    setSelectedIndex((prev) => (prev === galleryImg.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setSelectedIndex((prev) => (prev === 0 ? galleryImg.length - 1 : prev - 1));
  };

  return (
    <div className="mt-5">
      <div className="flex gap-5 border-b border-slate-800 dark:border-slate-300">
        {["post", "gallery", "setting"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 px-3 text-[18px] font-medium transition-all ${
              activeTab === tab
                ? "bg-slate-200 dark:bg-slate-600 dark:text-white border-b border-purple-600"
                : "text-slate-600 dark:text-slate-300 hover:text-purple-600"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {activeTab === "post" && (
        <div className="mt-5">
          <div className="grid gap-3 grid-cols-1 md:grid-cols-2">
            <div className="p-3 shadow-sm hover:shadow-md bg-white dark:bg-slate-800 rounded-[10px] flex justify-between transition-all duration-300">
              <div>
                <span className="text-[16px] font-semibold text-slate-800 dark:text-slate-400">
                  Views
                </span>
                <h1 className="text-[24px] font-bold text-slate-800 dark:text-slate-400">
                  2M
                </h1>
                <div className="flex gap-1 md:items-start items-center">
                  <AiOutlineBell size={18} className="text-purple-600" />
                  <p className="text-slate-600 dark:text-slate-300 leading-5">
                    <strong>1500</strong> New subscribers this week
                  </p>
                </div>
              </div>
              <div className="w-10 h-10 border border-slate-400 flex items-center justify-center rounded-[6px]">
                <IoEyeOutline size={22} className="text-slate-400" />
              </div>
            </div>

            <div className="p-3 shadow-sm hover:shadow-md bg-white dark:bg-slate-800 rounded-[10px] flex justify-between transition-all duration-300">
              <div>
                <span className="text-[16px] font-semibold text-slate-800 dark:text-slate-400">
                  Comments
                </span>
                <h1 className="text-[24px] font-bold text-slate-800 dark:text-slate-400">
                  14K
                </h1>
                <div className="flex gap-1 items-center">
                  <LuThumbsUp size={18} className="text-emerald-600" />
                  <p className="text-slate-600 dark:text-slate-300">
                    <strong>854</strong> New Likes this week
                  </p>
                </div>
              </div>
              <div className="w-10 h-10 border border-slate-400 flex items-center justify-center rounded-[6px]">
                <FaRegCommentDots size={22} className="text-slate-400" />
              </div>
            </div>
          </div>

          <div className="w-full p-3 mt-5 shadow-sm hover:shadow-md bg-white dark:bg-slate-800 rounded-[10px] transition-all duration-300">
            <div className="flex gap-5 items-center justify-between">
              <div className="flex gap-2 items-center">
                <div className="w-9 h-9 rounded-full">
                  <img
                    src={user}
                    alt="user"
                    className="w-full h-full rounded-full"
                  />
                </div>
                <div>
                  <h5 className="font-semibold text-slate-800 dark:text-slate-400">
                    Chiranjeet
                  </h5>
                  <p className="text-slate-600 font-medium">Online</p>
                </div>
              </div>
              <div className="flex items-center justify-end gap-3">
                <GrGallery size={18} className="text-slate-400" />
                <GrAttachment size={18} className="text-slate-400" />
                <IoEllipsisVerticalSharp size={18} className="text-slate-400" />
              </div>
            </div>

            <textarea
              placeholder="Write here..."
              className="mt-4 w-full h-[100px] rounded-[6px] border p-2 bg-slate-50 dark:bg-slate-800"
            ></textarea>
            <button className="py-2 px-4 mt-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-[6px] hover:shadow-lg transition-all cursor-pointer">
              Post
            </button>
          </div>
        </div>
      )}

      {activeTab === "gallery" && (
        <div className="relative">
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImg.map((img, index) => (
              <div
                key={index}
                onClick={() => openPopup(index)}
                className="w-full h-[200px] overflow-hidden group bg-slate-200 dark:bg-slate-700 rounded-[10px] transition-all cursor-pointer"
              >
                <img
                  src={img.img}
                  alt="gallery"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                />
              </div>
            ))}
          </div>

          {selectedIndex !== null && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
              <button
                onClick={closePopup}
                className="absolute top-6 right-6 text-white text-2xl hover:text-slate-200"
              >
                <FaTimes />
              </button>

              <button
                onClick={prevImage}
                className="absolute left-6 text-white text-3xl hover:text-blue-400"
              >
                <FaChevronLeft />
              </button>

              <div className="relative max-w-3xl w-[90%] transition-all duration-500">
                <img
                  src={galleryImg[selectedIndex].img}
                  alt="popup"
                  className="w-full h-auto rounded-lg shadow-lg object-contain transition-transform duration-500"
                />
              </div>

              <button
                onClick={nextImage}
                className="absolute right-6 text-white text-3xl hover:text-blue-400"
              >
                <FaChevronRight />
              </button>
            </div>
          )}
        </div>
      )}

      {activeTab === "setting" && (
        <div className="mt-5 bg-white dark:bg-slate-800 p-6 rounded-[10px] shadow-sm">
          {/* === TAB BUTTONS === */}
          <div className="flex gap-3 mb-6 border-b border-slate-300 dark:border-slate-700 pb-2">
            <button
              onClick={() => setSwitchTab("personnal")}
              className={`px-4 py-2 rounded-md font-medium transition-all ${
                switchTab === "personnal"
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                  : "text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              Personal Information
            </button>

            <button
              onClick={() => setSwitchTab("password")}
              className={`px-4 py-2 rounded-md font-medium transition-all ${
                switchTab === "password"
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                  : "text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              Change Password
            </button>
          </div>

          {/* === PERSONAL INFORMATION SECTION === */}
          {switchTab === "personnal" && (
            <div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">
                Personal Information
              </h3>

              <form onSubmit={handleSave} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {profileFormData.map((item, index) => (
                    <div key={index}>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        {item.label}
                      </label>
                      <input
                        type="text"
                        name={item.label
                          .toLowerCase()
                          .replace(/[: ]/g, "")
                          .replace("dateofbirth", "dob")}
                        value={item.value}
                        onChange={handleChange}
                        className="w-full border rounded-md px-3 py-2 text-slate-700 dark:text-white dark:bg-slate-700 border-slate-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Technical Skill
                  </label>
                  <select
                    name="technicalSkill"
                    value={formData.technicalSkill}
                    onChange={handleChange}
                    className="w-full border rounded-md px-3 py-2 text-slate-700 dark:text-white dark:bg-slate-700 border-slate-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {technicalSkills.map((skill, idx) => (
                      <option key={idx} value={skill}>
                        {skill}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex gap-3 justify-center">
                  <button
                    type="submit"
                    className="w-[100px] bg-blue-500 text-white py-2 rounded-md mt-4 hover:shadow-md transition-all"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData(formData)}
                    className="w-[100px] bg-purple-600 text-white py-2 rounded-md mt-4 hover:shadow-md transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* === CHANGE PASSWORD SECTION === */}
          {switchTab === "password" && (
            <div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">
                Change Password
              </h3>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  console.log("Password Changed!");
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Current Password
                    </label>
                    <input
                      type="password"
                      name="currentPassword"
                      placeholder="Enter current password"
                      className="w-full border rounded-md px-3 py-2 text-slate-700 dark:text-white dark:bg-slate-700 border-slate-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      New Password
                    </label>
                    <input
                      type="password"
                      name="newPassword"
                      placeholder="Enter new password"
                      className="w-full border rounded-md px-3 py-2 text-slate-700 dark:text-white dark:bg-slate-700 border-slate-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder="Re-enter new password"
                      className="w-full border rounded-md px-3 py-2 text-slate-700 dark:text-white dark:bg-slate-700 border-slate-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="flex gap-3 justify-center">
                  <button
                    type="submit"
                    className="w-[150px] bg-purple-600 text-white py-2 rounded-md mt-4 hover:shadow-md transition-all"
                  >
                    Update Password
                  </button>
                  <button
                    type="reset"
                    className="w-[100px] bg-blue-500 text-white py-2 rounded-md mt-4 hover:shadow-md transition-all"
                  >
                    Reset
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProfileTabs;
