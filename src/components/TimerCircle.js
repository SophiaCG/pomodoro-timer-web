import React, { Component } from "react";
import CanvasJSReact from "@canvasjs/react-charts";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class TimerCircle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: performance.now(),
      counter: 0, // Initial value for the counter
      totalValue: 60, // Total value for the counter (60 seconds)
      paused: false, // Added paused state
      elapsed: 0, // Elapsed time when paused
    };
  }

  componentDidMount() {
    // Update the counter every millisecond if not paused
    this.interval = setInterval(() => {
      if (!this.state.paused) {
        const currentTime = performance.now();
        const elapsedTime =
          (currentTime - this.state.startTime - this.state.elapsed) / 1000;
        if (elapsedTime <= this.state.totalValue) {
          this.setState({
            counter: elapsedTime + this.state.elapsed, // Include the elapsed time when unpausing
          });
        } else {
          // Timer completed, set the counter to the total value
          this.setState({
            counter: this.state.totalValue,
          });
          clearInterval(this.interval);
        }
      }
    }, 1);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // Function to pause the animation
  pauseAnimation = () => {
    const currentTime = performance.now();
    const elapsedTime = (currentTime - this.state.startTime) / 1000;
    this.setState({
      paused: true,
      elapsed: elapsedTime,
    });
  };

  // Function to continue the animation
  continueAnimation = () => {
    this.setState(
      {
        paused: false,
        startTime: performance.now() - this.state.elapsed * 1000, // Update startTime to resume from elapsedTime
      },
      () => {
        this.componentDidMount(); // Restart the timer with updated values
      }
    );
  };

  render() {
    const { counter, totalValue, paused } = this.state;
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
            { y: counter, color: "blue" },
            { y: totalValue - counter, color: "transparent" },
          ],
        },
      ],
    };

    return (
      <div className="timer-container">
        {paused ? (
          <button className="play-button" onClick={this.continueAnimation}>
            <i class="fa-solid fa-play"></i>
          </button>
        ) : (
          <button className="pause-button" onClick={this.pauseAnimation}>
            <i class="fa-solid fa-pause"></i>
          </button>
        )}

        <div className="pie-chart-container">
          <CanvasJSChart options={options} />
        </div>
      </div>
    );
  }
}

export default TimerCircle;
