import { useRef, useState, useEffect } from "react";
import { useTheme } from "../ThemeContext";

const SegmentedControls = ({
  name,
  segments,
  callback,
  defaultIndex = 0,
  controlRef,
}) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  const componentReady = useRef();

  // Determine when the component is "ready"
  useEffect(() => {
    componentReady.current = true;
  }, []);

  // Get the theme value using useTheme hook and store it in a variable
  const { theme } = useTheme();

  useEffect(() => {
    const activeSegmentRef = segments[activeIndex].ref;
    const { offsetWidth, offsetLeft } = activeSegmentRef.current;
    const { style } = controlRef.current;

    style.setProperty("--highlight-width", `${offsetWidth}px`);
    style.setProperty("--highlight-x-pos", `${offsetLeft}px`);
  }, [activeIndex, callback, controlRef, segments, theme]); // Include theme in the dependencies array

  const onInputChange = (value, index) => {
    setActiveIndex(index);
    callback(value, index);
  };

  return (
    <div className="controls-container" ref={controlRef}>
      <div
        className={`controls ${
          componentReady.current ? "ready" : "idle"
        } ${theme}`}
      >
        {segments?.map((item, i) => (
          <div
            key={item.value}
            className={`segment ${i === activeIndex ? "active" : "inactive"}`}
            ref={item.ref}
          >
            <input
              type="radio"
              value={item.value}
              id={item.label}
              name={name}
              onChange={() => onInputChange(item.value, i)}
              checked={i === activeIndex}
            />
            <h4 htmlFor={item.label}>{item.label}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SegmentedControls;
