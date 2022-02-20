import React, { useEffect, useState } from 'react'
import './Chart.css'
import getTablesData from '../TableHome/TableHome'
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
import axios from 'axios'

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
    const [tablesData, setTablesData] = useState([])

    const getTablesData = async () => {
        const response = await axios.get('https://exceed.pontakorn.dev/log/')
        const temp = response.data
        setTablesData(temp)
        return temp;
    }
    useEffect(() => {
        getTablesData();
    }, [])
    const charData = {
        labels: tablesData.map((data) => data['log_time']).reverse(),
        // [...tableData.map(data => data['amount'])].reverse()
        dataset: [{
            label: 'Population',
            data:
                // 100,
                // 120,
                // 20,
                // 10,
                // 30,
                // 70
                tablesData.map((data) => data['amount']).reverse(),
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
                options={{
                   scales: {
                       yAxis: {
                           min: 0,
                           suggestedMax: 10,
                           ticks: {
                               stepSize: 1,
                           }
                       }
                   }
                }}
            />
        </div>

    )
}

export default Chart