import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, Legend } from 'chart.js/auto';



const ActivitiesChart = () => {

    const yearCount = [
        { year: 2010, count: 10 },
        { year: 2011, count: 20 },
        { year: 2012, count: 15 },
        { year: 2013, count: 25 },
        { year: 2014, count: 22 },
        { year: 2015, count: 30 },
        { year: 2016, count: 28 },
    ];

    const data = {
        labels: yearCount.map(row => row.year),
        datasets: [
            {
                label: 'Year Count',
                data: yearCount.map(row => row.count),
                pointBackgroundColor: "	#E0FFFF",
                pointBorderColor: "	#E6E6FA",
                borderColor: "rgba(220, 220, 220, 1)",
                borderWidth: 3,
                borderJoinStyle: 'round',
                pointStyle: 'circle',
                borderCapStyle: 'butt'

            },

        ],
    };

    const options = {


        plugins: {
            title: {
                display: true,
                text: 'Activities',
                font: {
                    size: 20,

                },
                align: 'left',
                color: '#FFFFFF',

            }

        },

        scales: {
            y: {
                ticks: {
                    beginAtZero: true,
                    color: '#FFFFFF',
                    lineWidth: 2
                },
            },
            x: {
                ticks: {
                    beginAtZero: true,
                    color: '#FFFFFF',
                },
            },
        },

        elements: {
            point: {
                radius: 5,
            },
        },
        responsive: true,
        maintainAspectRatio: true,
    };


    return (
        <div className='bg-tertiary' style={{ maxWidth: '467px', maxHeight: '420px' }}>
            <Line
                type="line"
                data={data}
                options={options}
            />
        </div>
    );
};

export default ActivitiesChart;