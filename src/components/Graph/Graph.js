import React, { Component } from 'react';
import Highcharts from 'highcharts'
import xrange from 'highcharts/modules/xrange';
import HighchartsReact from 'highcharts-react-official'
import "./Graph.scss";
import { fooddata, processObserve, processExpect, processStable, processFood , processContinue, processQuick} from '../../utils'

xrange(Highcharts);

const staticoptions = {
    title: {text: ''},
    tooltip: { enabled: true },
    subtitle: {
        text: ''
    },
    xAxis: {
    type: 'datetime',
    tickInterval: 24 * 3600 * 1000,
    startOnTick: true,
    gridLineWidth: 1,
    dateTimeLabelFormats: {
            day: '%b %e',
            minute: '',
        },
    },
    yAxis: [
        {
            title: {
                text: '혈당수치'
            },
            height: '38%',
            lineWidth: 1,
            gridLineWidth: 1,
            subtitle:null,
            min:0,
            max:500,
        }, 
        {
            title: {
                text: '식이(kcal)'
            },
            reversed: false,
            top: '43%',
            height: '27%',
            offset: 0,
            lineWidth: 1,
            min:50,
            max:1001,
        },
        {
            title: {
                text: '인슐린'
            },
            categories: ['',''],
            reversed: true,
            top: '75%',
            height: '20%',
            offset: 0,
            lineWidth: 1
        },
    ],
    legend: {
        layout: 'vertical',
        enabled: false,
        align: 'right',
        verticalAlign: 'middle'
    },
    plotOptions: {
        series: {
            marker: {
                enabled: true,
                radius: 4,
            },
            dataLabels: {
                enabled: true,
            },
        },
    },
    series:[],
  }
  
class Graph extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options : staticoptions
        }
    }
    componentDidMount(){
        const newseries = [
            processObserve(this.props.graphdata,''),
            processExpect(this.props.graphdata,''),
            processStable(this.props.graphdata),
            processFood(fooddata),
            processContinue(),
            processQuick()
        ]
        this.setState({
            options: { series : newseries }
        })
        console.log(this.state.options);

    }
    componentWillReceiveProps(nextProps) {
        const newseries= [
            processObserve(nextProps.graphdata,''),
            processExpect(nextProps.graphdata,''),
            processStable(nextProps.graphdata),
            processFood(fooddata),
            processContinue(),
            processQuick()
        ]
        this.setState({
            options: { series : newseries }
        })
    }
    render() {
        const { personData, person} = this.props;
        return (
            <div className={'cardWrapper-graph'}>
                <div className={'card'}>
                    <div className="info">
                        <div className="name"><span>병실</span>{personData.room}</div>
                        <div className="name"><span>등록번호</span>{person}</div>
                        <div className="name"><span>환자명</span>{personData.name}</div>
                        <div className="tall"><span>키</span> {personData.height}cm</div>
                        <div className="weight"><span>몸무게</span> {personData.weight}kg</div>
                        <div className="bmi"><span>BMI</span> {personData.bmi}kg/m2</div>
                    </div>
                    <div className="graphbody">
                        <div className="linechart" >
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={this.state.options}
                        />
                        </div> 
                    </div>  
                </div>
            </div>
        );
    }
}

export default Graph;