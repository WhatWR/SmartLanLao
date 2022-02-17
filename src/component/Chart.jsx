import React, { useState } from 'react'
import './Chart.css'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)



const Chart = () => {
    // const [state,setState] = useState();
    const charData = {
        labels: ['Boston', 'A', 'B', 'C', 'D', 'E',],
        dataset: [{
            label: 'Population',
            data: [
                617594,
                181045,
                153906,
                106519,
                105162,
                95072
            ],
            backgroundColor: [
                'rgba(255,99,132,0.6)',
                'rgba(54,162,235,0.6)',
                'rgba(255,206,86,0.6)',
                'rgba(75,192,192,0.6)',
                'rgba(153,102,255,0.6)',
                'rgba(255,159,64,0.6)',
                'rgba(255,99,132,0.6)',
            ]
        }]
    }
    // setState(charData)
    return (
        <div className="chart">
        <Line className="chart-info"
            datasetIdKey='id'
            data={{
                labels: charData.labels,
                datasets: charData.dataset,


            }}
        />
        </div>

    )
}

export default Chart