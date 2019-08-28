import React, { Component, PureComponent } from 'react';
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
import "./Graph.scss";
import {insulin} from '../../utils'

class Graph extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { expect, personData, person} = this.props;
        const datebar=[];
        expect.forEach(v => {
            if (v.time === '9시') {
                datebar.push(v.date)
            }
        })
        return (
            <div className={'cardWrapper'}>
                <div className={'card'}>
                    <div className="info">
                        <div className="name"><span>병실</span>{personData.room}</div>
                        <div className="name"><span>등록번호</span>{person}</div>
                        <div className="name"><span>환자명</span>{personData.name}</div>
                        <div className="tall"><span>키</span> {personData.height}</div>
                        <div className="weight"><span>몸무게</span> {personData.weight}</div>
                        <div className="bmi"><span>BMI</span> {personData.bmi}</div>
                    </div>
                    <div className="graphbody">
                        <div className="linechart" >
                        <ResponsiveContainer width='100%' height="60%">
                            <LineChart 
                                data={expect}
                                margin={{ top:20, right: 30, left: 10, bottom: 10 }}
                            >
                                <CartesianGrid strokeWidth = '0.5' vertical={false}/>
                                <XAxis 
                                    allowDuplicatedCategory={false}
                                    dataKey="date"
                                    domain={[...datebar]}
                                    xAxisId = 'date'
                                    hide={true}
                                    interval={0} 
                                />
                                <XAxis 
                                    dataKey="time"
                                    domain ={expect.map(v=>v.time)}
                                    hide={true}
                                    xAxisId = 'time'
                                    interval={0} 
                                />
                                <XAxis 
                                    dataKey="time"
                                    domain ={expect.map(v=>v.time)}
                                    hide={true}
                                    interval={0} 
                                />
                                <YAxis 
                                    label={{ value: '혈당수치', angle: -90,fontSize:'11px', dx:-10}} 
                                    tick={{fontSize:'11px'}} 
                                    domain={[0,600]}
                                    ticks={[0,200,400,600]}
                                    tickLine = {false}
                                />
                
                                <Tooltip />
                                {datebar.map(v=>(
                                    <ReferenceLine x={v} xAxisId ='date' stroke="rgb(230, 230, 230)"/>
                                ))}
                                {/* <ReferenceLine x={datebar[5]} xAxisId = 'date' stroke="rgb(230, 230, 230)" isFront={true} label="오늘" /> */}
                                <ReferenceArea  y1={100} y2={200} fill="rgba(58, 78, 206, 0.2)"/>
                                <Line 
                                    type = "linear"
                                    dataKey="sugar" 
                                    stroke = 'rgb(31, 46, 134)'
                                    xAxisId = 'time'
                                    strokeWidth = {2}
                                    label={<CustomizedLabel />}
                                    animationDuration ={800}
                                    dot = {
                                        {
                                            stroke: 'rgb(31, 46, 134)',
                                            strokeWidth: 2,
                                            r: 4
                                        }
                                    }
                                />
                                <Line 
                                    type="linear" 
                                    dataKey="fsugar" 
                                    stroke = 'rgb(255,0,0)'
                                    xAxisId = 'time'
                                    strokeWidth = {2}
                                    // animationBegin = {1500}
                                    animationDuration ={800}
                                    label={<CustomizedLabel />}
                                    strokeDasharray = "5 5"
                                    dot = {
                                        {
                                            stroke: 'rgb(255,0,0)',
                                            strokeDasharray: 'none',
                                            strokeWidth: 2,
                                            r: 4
                                        }
                                    }
                                />
                            </LineChart>
                        </ResponsiveContainer>
                        <ResponsiveContainer width='100%' height="40%">
                            <LineChart data={insulin} margin={{ top: 0,  right: 30, left: 10, bottom: 10 }}>
                            <CartesianGrid strokeWidth = '0.5' vertical={false}/>
                            <XAxis 
                                    allowDuplicatedCategory={false}
                                    dataKey="date"
                                    type='number'
                                    domain={[...datebar]}
                                    xAxisId = 'date2'
                                    ticks={[...datebar]}
                                    interval={0} 
                                    tick={<DateTick />} 
                                    tickLine = {false}
                            />
                            <XAxis 
                                    dataKey="time"
                                    type='number'
                                    domain={[0,200]}
                                    hide={true}
                                    xAxisId = 'time2'
                            />
                            <XAxis 
                                    dataKey="time"
                                    type='number'
                                    domain={[0,200]}
                                    hide={true}
                            />
                            <YAxis 
                                    label={{ value: '인슐린', angle: -90,fontSize:'11px', dx:10}} 
                                    tick={{fontSize:'0px'}} 
                                    domain={[0,200]}
                                    ticks={[0,100,200]}
                                    // ticSize={3}
                                    tickLine = {false}
                                />
                                <YAxis 
                                    dataKey = "sugar"
                                    domain={[0,200]}
                                    ticks={[0,100,200]}
                                    hide={true}
                                    yAxisId='yaxis2'
                                />
                            <ReferenceLine y={100} yAxisId='yaxis2' stroke="rgb(230, 230, 230)"/>
                            {datebar.map(v=>(
                                <ReferenceLine x={v} xAxisId = 'date2' stroke="rgb(230, 230, 230)"/>
                            ))}
                            <Tooltip />
                             <Line 
                                    type="linear" 
                                    dataKey="sugar" 
                                    stroke = 'rgb(255,0,0)'
                                    xAxisId = 'time2'
                                    strokeWidth = {2}
                                    style={{display:'none'}}
                                    label={<CustomizedLabel2 />}
                                    strokeDasharray = "5 5"
                                    dot = {false}
                                    activeDot={false}
                                    isAnimationActive={false}
                                />
                            {/* <Bar dataKey="sugar" fill="#ced4da"/> */}
                            </LineChart>
                        </ResponsiveContainer>
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
          <text x={0} y={0} dy={10} textAnchor="middle" fill="#666" fontSize='11px'>{payload.value}</text>
        </g>
      );
    }
  }

  class CustomizedLabel extends PureComponent {
  render() {
    const {
      x, y, stroke, value,
    } = this.props;
    if( value > 450){
    return (
    <>
        <rect x={x-32} y={y-34}  width={64} height ={23} rx={5} ry={5} fill={'#d9534f'}></rect>
        <text x={x} y={y} dy={-18} stroke={'#000'} strokeWidth={2} fontSize={11} fontWiehgt='bold' textAnchor="middle">{value}/Lantus</text>
        <text x={x} y={y} dy={-18} fill={'#fff'} fontSize={11} fontWiehgt='bold' textAnchor="middle">{value}/Lantus</text>

    </>);
    }else return null;
  }
}
  class CustomizedLabel2 extends PureComponent {
  render() {
    const {
      x, y, stroke, value,
    } = this.props;
    if( value > 90){
    return (
    <>
        <rect x={x-70} y={y-30}  width={140} height ={23} rx={5} ry={5} fill={'rgba(58, 78, 206, 0.9)'}></rect>
        <text x={x} y={y} dy={-14} stroke={'#000'} strokeWidth={2} fontSize={11} fontWiehgt='bold' textAnchor="middle">{value}</text>
        <text x={x} y={y} dy={-14} fill={'#fff'} fontSize={11} fontWiehgt='bold' textAnchor="middle">{value}</text>

    </>);
    }else return (
    <>
        <rect x={x-15} y={y-24}  width={30} height ={23} rx={5} ry={5} fill={'#d9534f'}></rect>
        <text x={x} y={y} dy={-8} stroke={'#000'} strokeWidth={2} fontSize={11} fontWiehgt='bold' textAnchor="middle">{value}</text>
        <text x={x} y={y} dy={-8} fill={'#fff'} fontSize={11} fontWiehgt='bold' textAnchor="middle">{value}</text>

    </>);
  }
}