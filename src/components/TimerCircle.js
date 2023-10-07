import React, { useState, useEffect } from "react";
import CanvasJSReact from "@canvasjs/react-charts";
import { useTheme } from "../ThemeContext";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function TimerCircle(props) {
  const [state, setState] = useState({
    startTime: performance.now(),
    counter: 0,
    totalValue: 10,
    paused: false,
    elapsed: 0,
    timerCompleted: false,
  });

  useEffect(() => {
    // Your existing logic for component did mount
    const interval = setInterval(() => {
      if (!state.paused && !state.timerCompleted) {
        const currentTime = performance.now();
        const elapsedTime =
          (currentTime - state.startTime - state.elapsed) / 1000;
        if (elapsedTime <= state.totalValue) {
          setState((prevState) => ({
            ...prevState,
            counter: elapsedTime + state.elapsed,
          }));
        } else {
          clearInterval(interval);
          handleTimerCompletionAction();
        }
      }
    }, 1);

    return () => {
      clearInterval(interval);
    };
  }, [state]);

  const handleTimerCompletionAction = () => {
    console.log("Timer has completed. Performing the action...");
    setState((prevState) => ({
      ...prevState,
      paused: true,
      timerCompleted: false,
    }));
  };

  const pauseAnimation = () => {
    const currentTime = performance.now();
    const elapsedTime = (currentTime - state.startTime) / 1000;
    setState((prevState) => ({
      ...prevState,
      paused: true,
      elapsed: elapsedTime,
    }));
  };

  const continueAnimation = () => {
    setState((prevState) => ({
      ...prevState,
      paused: false,
      startTime: performance.now() - state.elapsed * 1000,
    }));
  };

  const { theme, getColor } = useTheme();
  const { counter, totalValue, paused } = state;
  const options = {
    animationEnabled: true,
    exportEnabled: false,
    data: [
      {
        type: "pie",
        indexLabel: null,
        startAngle: -90,
        toolTipContent: null,
        highlightEnabled: false,
        dataPoints: [
          { y: counter, color: getColor(theme) },
          { y: totalValue - counter, color: "transparent" },
        ],
      },
    ],
  };

  return (
    <div className="timer-container">
      {paused ? (
        <button className="play-button" onClick={continueAnimation}>
          <i className="fa-solid fa-play"></i>
        </button>
      ) : (
        <button className="pause-button" onClick={pauseAnimation}>
          <i className="fa-solid fa-pause"></i>
        </button>
      )}

      <div className="pie-chart-container">
        <CanvasJSChart options={options} />
      </div>
    </div>
  );
}

export default TimerCircle;
