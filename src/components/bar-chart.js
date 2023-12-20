import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement ,

  
} from 'chart.js';

ChartJS.register (
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
)
const BarChart = () => {
    const data = {
      labels: ['January', 'February', 'March', 'April','May', 'June'],
      datasets: [
        {
          label: 'Revenue',
          data: [4215, 5312, 6251, 7841, 9821, 14984],
          fill: true,
          borderColor: 'rgb(26, 97, 230)',
          backgroundColor: 'rgb(26, 97, 230)', 
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
                }
              },
              y: {
                beginAtZero: true,
                ticks:{
                    stepSize:5000
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
          <Bar 
          data = {data} 
          options = {options} >
    
          </Bar>
        </>
        
      );
    };
    
    export default BarChart;
