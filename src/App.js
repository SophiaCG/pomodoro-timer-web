import { React, useRef, useState, useEffect } from "react";
import TimerCircle from "./components/TimerCircle"; // Replace with the correct path to your PieChart component
import SegmentedControls from "./components/SegmentedControls";
import PopupMenu from "./components/PopupMenu";
import { useTheme } from "./ThemeContext";

function App() {
  const [selectedValue1, setSelectedValue1] = useState("complete");
  const [isPopupVisible, setPopupVisible] = useState(false);
  const { theme } = useTheme();

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <div className={`App ${theme}`}>
      <div className="container">
        <div className="main-page-container">
          <h1 className="title">pomodoro</h1>
          <SegmentedControls
            name="group-1"
            callback={(val) => setSelectedValue1(val)}
            controlRef={useRef()}
            segments={[
              {
                label: "pomodoro",
                value: "pomodoro",
                ref: useRef(),
              },
              {
                label: "short break",
                value: "short break",
                ref: useRef(),
              },
              {
                label: "long break",
                value: "long break",
                ref: useRef(),
              },
            ]}
          />
          <TimerCircle></TimerCircle>
          <button onClick={togglePopup} className="popup-button">
            <i className="fa-solid fa-gear"></i>
          </button>
        </div>
      </div>
      {isPopupVisible && (
        <div className="popup-menu-container">
          <PopupMenu togglePopup={togglePopup}></PopupMenu>
        </div>
      )}
    </div>
  );
}

export default App;
