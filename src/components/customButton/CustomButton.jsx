import React from "react";
import "./CustomButton.css";
const CustomButton = ({ title, onClick }) => {
  return (
    <button className="apple-btn" onClick={onClick}>
      <span>{title}</span>
    </button>
  );
};

export default CustomButton;