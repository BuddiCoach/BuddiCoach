import React, { Component } from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["Celine Dion", "Game", "Shopping", "Laptop", "iPad", "Phone"],
  datasets: [
    {
      label: "Budget",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [45.0, 5.0, 35.0, 560.0, 400.0, 199.99]
    },
    {
      label: "Actual",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(63,63,192,0.4)",
      borderColor: "rgba(63,63,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [50.0, 45.0, 35.0, 350.0, 275.0, 188.99]
    }
  ]
};

class ChartDashboard extends Component {
  render() {
    return (
      <div className="dashboard-chart">
        <Line data={data} />
      </div>
    );
  }
}


export default ChartDashboard;
