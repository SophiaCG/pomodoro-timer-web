import React, { Component } from "react";
import CanvasJSReact from "@canvasjs/react-charts";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class TimerCircle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0, // Initial value for the counter
      totalValue: 2400, // Total value for the counter (60 seconds * 60)
    };
  }

  componentDidMount() {
    // Update the counter every second
    this.interval = setInterval(() => {
      if (this.state.counter < this.state.totalValue) {
        this.setState((prevState) => ({
          counter: prevState.counter + 1,
        }));
      } else {
        // Timer completed, you can handle this event if needed
        clearInterval(this.interval);
      }
    }, 1);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { counter, totalValue } = this.state;
    const options = {
      animationEnabled: true,
      exportEnabled: true,
      theme: "dark2",
      data: [
        {
          type: "pie",
          indexLabel: null,
          startAngle: -90,
          toolTipContent: null,
          highlightEnabled: false,
          dataPoints: [
            { y: counter, color: "white" },
            { y: totalValue - counter, color: "transparent" },
          ],
        },
      ],
    };

    return (
      <div className="pie-chart-container">
        <CanvasJSChart options={options} />
      </div>
    );
  }
}

export default TimerCircle;
