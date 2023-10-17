import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";
ChartJS.register(ArcElement, Tooltip, Legend);

export const DoughnutChart2 = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };

  const customTooltips = (tooltipModel) => {
    // Custom tooltip logic if needed
  };

  const doughnutChartData = {
    labels: ["New Customers", "Existing Customers", "Returning Customers"],
    datasets: [
      {
        label: "Customer Type",
        data: [20, 50, 30], // Adjust data percentages as needed
        backgroundColor: ["#FF69B4","#0047AB" ,"transparent"],
        borderColor: "transparent",
      },
    ],
  };

  return (
    <div className="w-full lg:w-[24%] bg-slate-50 rounded-lg shadow-gray-300 shadow-sm px-2 h-[20rem] flex flex-col justify-around">
    <p className="font-bold mb-2">Customers</p>
    <p>Customers that buy Product</p>

    <div className="w-[200px] h-[200px] flex justify-between relative">
      <Doughnut data={doughnutChartData} options={options} plugins={[customTooltips]} />

      {/* Custom HTML element to display text in the center */}
      <div className="absolute inset-0 flex items-center justify-center flex-col">
        <div className="text-2xl font-bold">65%</div>
        <div className="font-bold">Total New</div>
        <div className="font-bold">Customers</div>
      </div>
    </div>
  </div>
  );
};
