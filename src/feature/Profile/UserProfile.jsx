import React, { useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import user from "../../assets/user.jpg";
import { LiaLanguageSolid } from "react-icons/lia";
import {
  MdOutlineMailOutline,
  MdDateRange,
  MdOutlineCastForEducation,
} from "react-icons/md";
import { FiPhone, FiX } from "react-icons/fi";
import party from "../../assets/party.gif";
import { LuCircleDollarSign } from "react-icons/lu";
import { TbScanPosition } from "react-icons/tb";
import {
  FaShoppingCart,
} from "react-icons/fa";
import { LuThumbsUp } from "react-icons/lu";
import { FiEdit } from "react-icons/fi";
import ProfileTabs from "./ProfileTabs";

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

const profileData = [
  {
    icon: (
      <MdDateRange size={20} className="text-slate-600 dark:text-slate-300" />
    ),
    label: "Date of Birth :",
    value: "01 Jan 2006",
  },
  {
    icon: (
      <TbScanPosition
        size={20}
        className="text-slate-600 dark:text-slate-300"
      />
    ),
    label: "Position :",
    value: "Front End Developer",
  },
  {
    icon: (
      <MdOutlineCastForEducation
        size={20}
        className="text-slate-600 dark:text-slate-300"
      />
    ),
    label: "Education :",
    value: "B C A, Hapur Monad University",
  },
  {
    icon: (
      <LiaLanguageSolid
        size={20}
        className="text-slate-600 dark:text-slate-300"
      />
    ),
    label: "Languages :",
    value: "Hindi / English / Spanish",
  },
  {
    icon: <FiPhone size={20} className="text-slate-600 dark:text-slate-300" />,
    label: "Phone :",
    value: "+91 901 292 2055",
  },
  {
    icon: (
      <MdOutlineMailOutline
        size={20}
        className="text-slate-600 dark:text-slate-300"
      />
    ),
    label: "Email :",
    value: "chiranjeetsingh055@gmail.com",
  },
];

const UserProfile = () => {
  const [profileImage, setProfileImage] = useState(user);
  const [showPopup, setShowPopup] = useState(false);
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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  return (
    <>
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-4">
        <div className="flex items-center gap-1 text-[20px] font-bold text-slate-800 dark:text-white">
          Dashboard
          <MdKeyboardDoubleArrowRight className="mt-0" size={24} />
          User Profile
        </div>
      </div>

      <div className="w-full md:flex flex-col gap-5">
        <div className="flex gap-5 md:w-[100%] w-full">
          <div className="md:w-[100%] md:h-[500px] h-full w-full shadow-md rounded-[6px] bg-white/80 dark:bg-slate-800 relative">
            <div className="user_bg"></div>
            <div className="p-3">
              <div className=" absolute top-[25%]">
                <div className="relative">
                  <div className="w-[130px] h-[130px]">
                    <label htmlFor="profile-upload" className="cursor-pointer">
                      <img
                        src={profileImage}
                        alt="Profile"
                        className="w-full h-full rounded-full border-2 border-slate-800 dark:border-white object-cover"
                      />
                    </label>

                    <input
                      type="file"
                      id="profile-upload"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </div>
                </div>
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
                  className={`flex items-center gap-2 ${
                    index > 0 ? "mt-3" : ""
                  }`}
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
              <div className="flex gap-3 mt-5">
                <button className="py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-[6px] hover:shadow-lg transition-all cursor-pointer">
                  Follow
                </button>
                <button className="py-2 px-4 bg-white shadow-md text-slate-800 font-semibold rounded-[6px] hover:shadow-lg transition-all cursor-pointer">
                  Hire Me
                </button>
              </div>
            </div>
          </div>
          <div className="md:w-[100%] md:h-[500px] h-full w-full shadow-md rounded-[6px] bg-white/80 dark:bg-slate-800 p-3">
            <div className="flex gap-2 items-center justify-between">
              <h1 className="text-[20px] font-semibold text-slate-800 dark:text-white">
                Personal Information
              </h1>
              <div className="relative">
                <button
                  onClick={() => setShowPopup(true)}
                  className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-[6px] hover:shadow-lg transition-all cursor-pointer"
                >
                  <FiEdit size={20} />
                </button>

                {showPopup && (
                  <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
                    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl w-[700px] p-6 relative">
                      <button
                        onClick={() => setShowPopup(false)}
                        className="w-8 h-8 bg-slate-200 dark:text-slate-800 rounded-[6px] flex items-center justify-center hover:bg-slate-400 hover:text-white absolute dark:hover:text-white top-3 right-3 text-slate-700"
                      >
                        <FiX size={24} />
                      </button>

                      <h2 className="text-xl font-semibold mb-4 text-slate-800 dark:text-white">
                        Edit Profile
                      </h2>

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

                        <button
                          type="submit"
                          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-md mt-4 hover:shadow-md transition-all"
                        >
                          Save Changes
                        </button>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <p className="text-slate-600 mt-5 dark:text-slate-300 font-medium">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <h2 className="text-[18px] font-semibold text-slate-800 mt-5">
              Technical Skills
            </h2>
            <div className="flex flex-wrap space-x-4">
              <p className="text-slate-500 font-medium">Javascript</p>
              <p className="text-slate-500 font-medium">React Js</p>
              <p className="text-slate-500 font-medium">Next Js</p>
              <p className="text-slate-500 font-medium">Tailwind CSS</p>
              <p className="text-slate-500 font-medium">Bootstrap</p>
            </div>
            <div className="mt-5">
              {profileData.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-2 items-center mt-3 text-slate-700 dark:text-slate-300"
                >
                  {item.icon}
                  <strong className="text-slate-800 dark:text-slate-400">
                    {item.label}
                  </strong>
                  <span>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="md:w-[100%] w-full">
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

          <div>
            <ProfileTabs/>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
