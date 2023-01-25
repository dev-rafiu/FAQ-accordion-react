import React, { useState } from "react";

import { FaPlus, FaMinus } from "react-icons/fa";

function Question({ title, info }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article className="question">
      <header className="question__header">
        <h3 className="question-title">{title}</h3>
        <button onClick={toggleOpen} className="toggle-btn">
          {isOpen ? <FaMinus /> : <FaPlus />}
        </button>
      </header>
      {isOpen && <p className="question__info">{info}</p>}
    </article>
  );
}

export default Question;
