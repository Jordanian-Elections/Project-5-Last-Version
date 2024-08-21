import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ElectionResultsChart = ({ cityResult }) => {
  const data = {
    labels: cityResult.passingCandidates.map((candidate) => candidate.list),
    datasets: [
      {
        label: "Allocated Seats",
        data: cityResult.passingCandidates.map((candidate) => candidate.allocatedSeats),
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `Allocated Seats in ${cityResult.city} - ${cityResult.circle}`,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default ElectionResultsChart;
