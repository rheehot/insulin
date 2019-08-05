import React, { Component, PureComponent } from 'react';
import styled from 'styled-components';
import {
    LineChart,
    ReferenceLine,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    ReferenceArea,
    ResponsiveContainer,
    BarChart, Bar,
} from 'recharts';
import CardHead from '../CardHead';
import "./Graph.scss";

const S = {
    XAxis:styled(XAxis)`
        font-size:12px;
    `,
}
class Graph extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {cardtitle,expect} = this.props;
        const datebar=[];
        expect.forEach(v => {
            if (v.time === '12시') {
                datebar.push(v.date)
            }
        })
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
                                margin={{ top: 20, right: 30, left: 10, bottom: 40 }}
                            >
                                <CartesianGrid strokeWidth = '0.5' vertical={false}/>
                                <XAxis 
                                    allowDuplicatedCategory={false}
                                    dataKey="date"
                                    domain={[...datebar,'']}
                                    // scale = "band"
                                    xAxisId = 'date'
                                    interval={0} 
                                    tick={<DateTick />} 
                                />
                                <XAxis 
                                    dataKey="time"
                                    domain ={expect.map(v=>v.time)}
                                    hide={true}
                                    interval={0} 
                                />
                                <XAxis 
                                    dataKey="time"
                                    domain ={expect.map(v=>v.time)}
                                    xAxisId='time'
                                    interval={0} 
                                />
                                <YAxis 
                                />
                                <Tooltip />
                                {datebar.map(v=>(
                                    <ReferenceLine x={v} xAxisId = 'date' strokeWidth = '0.5' stroke="#69c0ff"/>
                                ))}
                                <ReferenceLine x={datebar[5]} xAxisId = 'date' stroke="#096dd9" isFront={true} label="오늘" />
                                <ReferenceArea  y1={100} y2={200} fill="#dbe4ff"/>
                                <Line 
                                    type="monotone" 
                                    dataKey="sugar" 
                                    stroke='#364fc7'  
                                    xAxisId = 'time'
                                    strokeWidth = {2}
                                    label={<CustomizedLabel />}
                                    animationDuration ={800}
                                    dot={{ stroke: '#364fc7' , strokeWidth: 2, r:6 }}
                                />
                                <Line 
                                    type="monotone" 
                                    dataKey="fsugar" 
                                    stroke='#364fc7'  
                                    xAxisId = 'time'
                                    strokeWidth = {2}
                                    // animationBegin = {1500}
                                    animationDuration ={800}
                                    label={<CustomizedLabel />}
                                    strokeDasharray = "5 5"
                                    dot={{ stroke: '#364fc7' , strokeDasharray: 'none', strokeWidth: 2, r:6 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                        {/* <ResponsiveContainer width='100%' height="15%">
                            <BarChart barCategoryGap={4} data={datebar} margin={{ top: -10, right: 20, left: 60, bottom: 20 }}>
                                <Bar dataKey="date" fill="#ced4da" label={{ position: 'middle', fontSize:'10px' }} />
                            </BarChart>
                        </ResponsiveContainer> */}
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
          <text x={0} y={0} dy={10} textAnchor="middle" fill="#666">{payload.value}</text>
        </g>
      );
    }
  }

  class CustomizedLabel extends PureComponent {
  render() {
    const {
      x, y, stroke, value,
    } = this.props;
    if( value > 400){
    return <text x={x} y={y} dy={-14} fill={'#f00'} fontSize={12} textAnchor="middle">{value}</text>;
    }else return null;
  }
}