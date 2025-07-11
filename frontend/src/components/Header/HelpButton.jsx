import React from "react";
import { FaQuestionCircle } from "react-icons/fa";

const HelpButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-gray-700 text-2xl hover:text-purple-600"
    >
      <FaQuestionCircle />
    </button>
  );
};

export default HelpButton;

