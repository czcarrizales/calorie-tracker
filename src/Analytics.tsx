import { Bar, Pie } from "react-chartjs-2";
import 'chart.js/auto';
import { useSelector } from "react-redux";

const Analytics = () => {

    const user = useSelector((state) => state.user)

    const data = {
        labels: user.foodLog.map((item) => item.name),
        datasets: [
          {
            label: 'Calories',
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            data: user.foodLog.map((item) => item.calories), // Your data goes here
          },
        ],
      };
    
      const options = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };

      const detailData = {
        labels: ['Protein', 'Fat', 'Carbs'],
        datasets: [
            {
                label: 'Grams',
                data: [user.currentProtein, user.currentFat, user.currentCarbs]
            }
        ]
      }

  return (
    <div>
        <h2>Calorie Comparison</h2>
      <Bar data={data} options={options} />
      <h2>Macro Chart</h2>
      <Pie data={detailData} />
    </div>
  )
}

export default Analytics