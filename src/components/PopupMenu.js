import { useRef, useState, useEffect } from "react";
import Counter from "./Counter";
import ColorButtons from "./ColorButtons";

const PopupMenu = ({ togglePopup }) => {
  const [pomodoroCount, setPomodoroCount] = useState(25);
  const [shortCount, setShortCount] = useState(5);
  const [longCount, setLongCount] = useState(15);

  const handleClose = () => {
    togglePopup();
  };

  return (
    <div className="popup-menu">
      <div className="popup-header">
        <h2>Settings</h2>
        <button onClick={handleClose} className="close-button">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div className="popup-body">
        <h5 className="popup-label">TIME (MINUTES)</h5>
        <div className="popup-counters-container">
          <Counter
            counterLabel={"pomodoro"}
            count={pomodoroCount}
            setCount={setPomodoroCount}
          />
          <Counter
            counterLabel={"short break"}
            count={shortCount}
            setCount={setShortCount}
          />
          <Counter
            counterLabel={"long break"}
            count={longCount}
            setCount={setLongCount}
          />
        </div>
        <hr></hr>
        <div className="popup-section">
          <h5 className="popup-label">COLOR</h5>
          <ColorButtons></ColorButtons>
        </div>
        <hr></hr>
        <div className="popup-section">
          <h5 className="popup-label">FONT</h5>
          <div className="color-buttons">
            <i class="fa-solid fa-check"></i>
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>
      </div>
      <div className="apply-button-container">
        <button className="apply-button">Apply</button>
      </div>
    </div>
  );
};

export default PopupMenu;
