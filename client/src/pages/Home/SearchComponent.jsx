import { useState } from "react";
import { motion } from "framer-motion";
import { FaCity } from "react-icons/fa6";
import { GiModernCity } from "react-icons/gi";

import { FiChevronDown, FiSend } from "react-icons/fi";
const SearchComponent = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-center -mt-10 lg:-mt-14 relative z-10">
        <div className="py-6 ">
          <motion.div animate={open ? "open" : "closed"} className="relative">
            <button
              onClick={() => setOpen((pv) => !pv)}
              className="flex btn-md items-center gap-2 px-3 py-2 rounded-md  text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 hover:bg-indigo-500 transition-colors"
            >
              <span className="font-medium text-sm">All Divisions</span>
              <motion.span variants={iconVariants}>
                <FiChevronDown />
              </motion.span>
            </button>

            <motion.ul
              initial={wrapperVariants.closed}
              variants={wrapperVariants}
              style={{ originY: "top", translateX: "-50%" }}
              className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden"
            >
              <Option setOpen={setOpen} Icon={FaCity} text="Dhaka" />
              <Option setOpen={setOpen} Icon={GiModernCity} text="Rajshahi" />
              <Option setOpen={setOpen} Icon={FaCity} text="Rangpur" />
              <Option setOpen={setOpen} Icon={GiModernCity} text="Mymensingh" />
              <Option setOpen={setOpen} Icon={FaCity} text="Chattrogram" />
              <Option setOpen={setOpen} Icon={GiModernCity} text="Khulna" />
              <Option setOpen={setOpen} Icon={FaCity} text="Barishal" />
              <Option setOpen={setOpen} Icon={GiModernCity} text="Sylhet" />
            </motion.ul>
          </motion.div>
        </div>
        <div>
          <form className="mr-6 mx-auto">
            <label
              for="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Appartment"
                required
              />
              <button
                type="submit"
                className=" 
          px-4 mt-2 rounded-full 
          items-center gap-2 
          text-slate-500
          bg-stone-200
          shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
          absolute
          transition-all
          hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
          hover:text-violet-500
      "
              >
                <FiSend />
                <span>Search</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

const Option = ({ text, Icon, setOpen }) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => setOpen(false)}
      className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
    >
      <motion.span variants={actionIconVariants}>
        <Icon />
      </motion.span>
      <span>{text}</span>
    </motion.li>
  );
};

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};

export default SearchComponent;
