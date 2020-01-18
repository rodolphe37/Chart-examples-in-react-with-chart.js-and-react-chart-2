import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';


class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
           chartData: {
            labels: ['Tours', 'St Cyr', 'St Avertin', 'Fondettes', 'La Ville Aux Dames', 'Montlouis', 'Joué-lès-Tours' ],
            datasets:[
                {
                    label:'Population',
                    data:[
                        136252,
                        15911,
                        14954,
                        10493,
                        5305,
                        10609,
                        37535
                    ],
                    backgroundColor:[
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                        'rgba(255, 159, 64, 0.6)',
                        'rgba(255, 99, 132, 0.6)'
                    ]
                }
            ]
           }
        }
    }
    render() {
        return (
            <div className="chart">
                <h1>Graph with react-chartjs-2</h1>
                <Bar
                    data={this.state.chartData}
                    options={{}}
                />
                <Line
                    data={this.state.chartData}
                    options={{}}
                />
                <Pie
                    data={this.state.chartData}
                    options={{}}
                />


            </div>
        )
    }
}
export default Chart;