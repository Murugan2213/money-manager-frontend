import { Doughnut } from 'react-chartjs-2';
import { useState, useEffect } from "react";
import { ArcElement } from "chart.js";
import Chart from "chart.js/auto";


const Charts = (props) => {

    const  incomesTotal = props.incomesTotal;
    const  expensesTotal = props.expensesTotal;
    console.log(incomesTotal, '***************');
    console.log(expensesTotal, '***************');
    



 
    const options = {
        legend: {
          display: false,
          position: "right"
        },
        elements: {
          arc: {
            borderWidth: 0
          }
        }
      };

      const data = {
        maintainAspectRatio: false,
        responsive: false,
        labels: ["income", "expense"],
        datasets: [
          {
            data: [incomesTotal, expensesTotal],
            backgroundColor: ['blue', 'green'],
            hoverBackgroundColor: ['blue', 'green']
          }
        ]
      };


    return (
        <>
            <div className= 'chart'>
            <Doughnut data={data} options={options} ></Doughnut>
            </div>
        </>
    )
}

export default Charts;