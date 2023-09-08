import React from "react";

const Button = ({ styles }) => (
  <button
    type="button"
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-gradient-to-r from-purple-500 via-pink-500 to-pink-500 rounded-[10px] outline-none ${styles}`}
  >
    Get Started
  </button>
);

export default Button;
