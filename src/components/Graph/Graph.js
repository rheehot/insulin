import React, { Component, PureComponent } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts';
import CardHead from '../CardHead'
import "./Graph.scss";

class Graph extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {cardtitle,expect} = this.props;
        return (
            <div className={'cardWrapper'}>
                <div className={'card'}>
                    <CardHead
                    cardtitle={cardtitle}
                    />
                    <div className="graphbody">
                        <div className="linechart" >
                        <ResponsiveContainer width='100%' height="100%">
                            <LineChart 
                                data={expect}
                                margin={{ top: 20, right: 30, left: 10, bottom: 20 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis 
                                    dataKey="checkAt"
                                    interval={0} 
                                    // scale="band"
                                />
                                <XAxis 
                                    // allowDuplicatedCategory={false}
                                    dataKey="name"
                                    // scale="band"
                                    interval={0} 
                                    xAxisId='date'
                                    padding={{ top: 20 }}
                                    axisLine={false}
                                    tickLine={false}
                                    tick={<DateTick />} 
                                />
                                <YAxis />
                                <Tooltip />
                                <Line 
                                    type="monotone" 
                                    dataKey="sugar" 
                                    stroke='#69c0ff'  
                                    strokeWidth = {2}
                                    dot={{ stroke: '#69c0ff' , strokeWidth: 2, r:6 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                        </div>
                        <div className="charttxt scroll">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent maximus suscipit neque, eget placerat turpis. Aliquam ac pharetra purus. Sed condimentum felis vel ullamcorper suscipit. Donec tempus arcu lorem. Sed cursus tellus tellus, et congue dui sagittis et. Cras tincidunt semper nulla vel rutrum. Donec condimentum risus non ante egestas, in laoreet odio sodales. Curabitur quam arcu, malesuada ac dignissim vitae, fermentum id diam. Donec finibus urna id justo sollicitudin, nec lobortis nibh mollis. Fusce sollicitudin sed ante a aliquam. Duis sagittis, leo in consectetur bibendum, nulla purus dapibus enim, vel elementum tellus est quis erat.
                        </div>
                    </div>
    
                </div>
            </div>
        );
    }
}

export default Graph;

class DateTick extends PureComponent {
    render() {
      const {
        x, y, stroke, payload,
      } = this.props;
  
      return (
        <g transform={`translate(${x},${y})`}>
          <text x={0} y={0} dy={0} textAnchor="middle" fill="#666">{payload.value}</text>
        </g>
      );
    }
  }