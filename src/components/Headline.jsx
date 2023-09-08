import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa"; // Import the cross icon
import Navbar from "./Navbar";
import styles from "../style";

const Headline = () => {
  // Initialize headlineOpen state with the value from localStorage or default to true
  const [headlineOpen, setHeadlineOpen] = useState(true);

  const toggleHeadline = () => {
    setHeadlineOpen(!headlineOpen);
  };

  useEffect(() => {
    setHeadlineOpen(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {headlineOpen ? (
        <div className="bg-black py-2 px-4 text-white text-center flex justify-between fixed top-0 left-0 right-0 z-[100]">
          <div></div>
          <p className="text-sm font-poppins">
            Get the service free for 2 weeks - Register now!
          </p>
          <FaTimes onClick={toggleHeadline} className="cursor-pointer" />
        </div>
      ) : null}

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar headlineOpen={headlineOpen} />
        </div>
      </div>
    </div>
  );
};

export default Headline;
