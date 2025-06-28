import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale } from "chart.js";
import ProgressRing from "../components/ProgressRing";
import UserMenu from "../components/UserMenu";
import QuoteCard from "../components/QuoteCard";




ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale);

const Dashboard = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "XP Earned",
        data: [200, 350, 400, 300, 500, 600, 450],
        borderColor: "#4f46e5",
        fill: false,
        tension: 0.3,
      },
    ],
  };

  return (
    <div className="space-y-6">
      
    <QuoteCard />
     
      <div className="flex justify-between items-center mb-4">
      <h1 className="text-3xl font-bold dark:text-white">Welcome back, Learner! 🚀</h1>
  <UserMenu />
</div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Total XP with Progress Ring */}
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Total XP</h3>
            <p className="text-2xl text-primary">4,850</p>
          </div>
          <div className="w-20 h-20 flex items-center justify-center">
            <ProgressRing progress={70} />
             
          </div>
        </div>

        {/* Skills Mastered */}
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Skills Mastered</h3>
          <p className="text-2xl text-primary">7</p>
        </div>

        {/* Current Streak */}
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Current Streak</h3>
          <p className="text-2xl text-primary">5 Days 🔥</p>
        </div>
      </div>

      {/* XP Progress Chart */}
      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">XP Progress This Week</h2>
        <Line data={data} />
      </div>
    </div>
  );
};

export default Dashboard;
