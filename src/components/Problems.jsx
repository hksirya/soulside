import React, { useState, useEffect } from "react";
import "../logo.css"; // Import your CSS styles here

// Define an array of text labels
const textLabels = [
  "Pregnancy",
  "Autoimmune",
  "Diabetes",
  "Chronic Pain",
  "Postpartum",
  "Breast Cancer",
  "Menopause",
  "Fibromyalgia",
];

const InfiniteSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % textLabels.length;

      setCurrentIndex(nextIndex);
    }, 10000);

    return () => clearInterval(interval); //
  }, [currentIndex]);

  return (
    <>
      <div className="flex logos space-x-6 mt-10">
        <div className="logos-slide flex space-x-10 z-[10]">
          {textLabels.map((label, index) => (
            <div key={index} className="font-poppins text-4xl font-bold ">
              {label}
            </div>
          ))}
        </div>
        <div className="logos-slide flex space-x-10">
          {textLabels.map((label, index) => (
            <div key={index} className="font-poppins text-4xl font-bold ">
              {label}
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-full justify-center items-center">
        <div className="flex font font-poppins text-xl md:text-2xl font-bold text-gray-500 text-center">
          Targeted emotional support for your journey
        </div>
      </div>
    </>
  );
};

export default InfiniteSlider;
