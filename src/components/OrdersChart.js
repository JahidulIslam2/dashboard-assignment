import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, Legend } from 'chart.js/auto';




const OrdersChart = () => {


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
        datasets: [{
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            data: [10, 20, 30, 40, 50, 60, 70],
            pointBackgroundColor: "#FAFAD2",
            pointBorderColor: "#FAFAD2",
            borderColor: "#FAFAD2",

        }]
    };

    const options = {

        elements: {
            rectangle: {
                borderRadius: 20,
            },
        },

        plugins: {
            title: {
                display: true,
                text: 'Orders',
                font: {
                    size: 20,

                },
                align: 'left',
                color: '#FAFAD2',

            }

        },

        scales: {
            y: {
                ticks: {
                    beginAtZero: false,
                    color: '#FAFAD2',
                    lineWidth: 2
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
        <div className='bg-tertiary' style={{ maxWidth: '440px', maxHeight: '315px' }}>
            <Bar
                type="bar"
                data={data}
                options={options}
            />
        </div>
    );
};

export default OrdersChart;