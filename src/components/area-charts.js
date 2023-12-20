import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement ,
  Tooltip,
  Filler
} from 'chart.js';

ChartJS.register (
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler
)

const AreaChart = () => {
  const data = {
    labels: ['Mar 1', 'Mar 2', 'Mar 3', 'Mar 4', 'Mar 5','Mar 6', 'Mar 7', 'Mar 8','Mar 9', 'Mar 10', 'Mar 11', 'Mar 12','Mar 13'],
    datasets: [
      {
        label: 'Sessions',
        data: [10000, 30162, 26263, 18394, 18287,28682, 31274,33259,25849,24159,32651,31984,38451],
        fill: true,
        borderColor: 'rgb(11, 169, 231)',
        backgroundColor: 'rgb(190, 223, 234)', 
        borderWidth: 2.5,
        tension: 0.5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: {
            type: 'category',
            labels: data.labels,
            grid: {
                display:false,
            },
            ticks: {
                maxTicksLimit:7
            }
          },
          y: {
            beginAtZero: true,
            ticks:{
                stepSize:10000
            }
          },
      
    },
    plugins: {
        legend: {
          display: false,
          position: 'top',
        }
      }
  };
  
  return (
    <>
      <Line 
      data = {data} 
      options = {options} >

      </Line>
    </>
    
  );
};

export default AreaChart;