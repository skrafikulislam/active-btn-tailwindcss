// ! This one Works Perfect

import { useState } from "react";
import "./Active.css";

const Active = () => {
  const [activeStates, setActiveStates] = useState([
    false,
    false,
    false,
    false,
  ]);

  const handleLinkClick = (index) => {
    const newActiveStates = activeStates.map((state, i) =>
      i === index ? true : false
    );
    setActiveStates(newActiveStates);
  };

  return (
    <div>
      <ul>
        <li
          style={{
            listStyle: "none",
            display: "flex",
            gap: "2rem",
          }}
        >
          <a
            onClick={() => handleLinkClick(0)}
            className={activeStates[0] ? "active" : ""}
          >
            Link1
          </a>
          <a
            onClick={() => handleLinkClick(1)}
            className={activeStates[1] ? "active" : ""}
          >
            Link2
          </a>
          <a
            onClick={() => handleLinkClick(2)}
            className={activeStates[2] ? "active" : ""}
          >
            Link3
          </a>
          <a
            onClick={() => handleLinkClick(3)}
            className={activeStates[3] ? "active" : ""}
          >
            Link4
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Active;

// ! This one for first element got bg initially

import { useState } from "react";
import "./Active.css";

const Active = () => {
  const [activeStates, setActiveStates] = useState([true, false, false, false]);

  const handleLinkClick = (index) => {
    const newActiveStates = activeStates.map((state, i) => (i === index ? true : false));
    setActiveStates(newActiveStates);
  };

  return (
    <div>
      <ul>
        <li
          style={{
            listStyle: "none",
            display: "flex",
            gap: "2rem",
          }}
        >
          {activeStates.map((isActive, index) => (
            <a
              key={index}
              onClick={() => handleLinkClick(index)}
              className={isActive ? "active" : ""}
            >
              Link{index + 1}
            </a>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default Active;

