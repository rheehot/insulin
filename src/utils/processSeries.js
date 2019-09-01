import getTimeStamp from './getTimStamp';
import {todayKr} from './GraphData';

function processObserve(graphdata, format){
    const group1 = graphdata.filter(d=>{
        return d.date <= +todayKr;
    })
    const group2 = graphdata.filter(d=>{
        return d.date > +todayKr;
    })
    const filtereddata = [...group1, group2[0]];
    const res = filtereddata.map(data=>{
        const res = {
            x:data.date,
            y:data.sugar,
            marker: {
                symbol: 'circle', 
            },
            dataLabels:{
                format: format,
                enabled:false,
            } 
        }
        if(data.status==='공복'){
            res.marker = {
                symbol: 'circle',
                fillColor: "#ffffff",
                lineWidth:2,
                lineColor:"#1f2e86"
            }
        }else if(data.sugar>400){
            res.dataLabels = {
                color:"#ffffff",
                backgroundColor: '#d9534f',
                borderColor: '#d9534f'
            }
        }
        return res;
    })

    return {
        type: 'line',
        name: '',
        color:"#1f2e86",
        marker: {
            symbol: 'circle'
        },
        dataLabels:{
            borderRadius: 5,
            backgroundColor: 'rgba(255, 255, 255, 1)',
            borderWidth: 1,
            borderColor: '#AAA',
            y: -10,
        },
        data: res
    }
}
function processExpect(graphdata, format){
    const filtereddata = graphdata.filter(d=>{
        return d.date > +todayKr;
    })
   const res =  filtereddata.map((data,idx)=>{
        const res = {
            x:data.date,
            y:data.sugar,
            marker: {
                symbol: 'circle', 
            },
            dataLabels:{
                format: format,
                enabled:false,
            } 
        }
        if(idx === 0){
            res.marker ={
                enabled: false
            }
        }else if(idx === filtereddata.length-1){
            res.marker = {
                symbol: 'circle',
                fillColor: "#ff0000",
                enabled: true
            }
            res.dataLabels = {
                 format: '{y}(예상) '
            }
        }else{
            res.marker = {
                symbol: 'circle',
                fillColor: "#ff0000",
                enabled: true
            }
        }
        return res;
    })
    return {
        type:'line',
        name: '',
        dashStyle: 'dash',
        lineColor:"#ff0000",
        data : res
    }
}
function processFood(graphdata){
    const res = graphdata.map(data=>{
        const res = {
            x:data.date,
            y:data.kcal,
        }
        if(data.status==='간식'){
            res.color= "#d9534f";
            res.dataLabels={
                format: `${data.name}(${data.kcal}kcal)`,
                enabled:true,
            }   
        }
        return res;
    })
    return {
        name:"간식",
        type:'column',
        yAxis:1,
        pointWidth: 20,
        color:"rgba(124,191,174,1)",
        dataLabels:{
            enabled:false
        },
        data: res
    }
}

//
function processStable(graphdata){
    const dateRange = [graphdata[0].date, graphdata[graphdata.length-1].date];
    return {
        type:'line',
        name: '',
        data: [
            { 	
                x: dateRange[0],
                y: 100,
                marker: {
                    enabled: false
                },
                dataLabels:{
                    format: ''
                } 
            },
            { 	
                x: dateRange[1],
                y: 100,
                marker: {
                    enabled:false,
                },
                dataLabels:{
                    format: ''
                } 
            },
        ],
        lineColor:"rgba(58,78,206,.09)",
        lineWidth: 30,
    }
}
function processContinue() {
    return {
        type: 'xrange',
        styledMode: true,
        name: '지속',
        yAxis: 2,
        borderColor: '',
        pointWidth: 20,
        data: [
            {
                x: getTimeStamp('sub',4,5),
                x2: getTimeStamp('sub',0,4),
                y: 0,
                color:"rgba(58,78,206,0.9)",
                borderColor:"#ffffff",
                dataLabels: {
                    format:"10",
                    color:"#ffffff",
                            }, 
            },
            {
                x: getTimeStamp('sub',0,4),
                x2: getTimeStamp('sub',0,3),
                y: 0,
                color:"rgba(58,78,206,0.9)",
                borderColor:"#ffffff",
                dataLabels: {
                    format:"10"
                            }, 
            },
            {
                x: getTimeStamp('sub',0,3),
                x2: getTimeStamp('sub',0,2),
                y: 0,
                color:"rgba(58,78,206,0.9)",
                borderColor:"#ffffff",
                dataLabels: {
                    format:"10"
                            }, 
            },
            {
                x: getTimeStamp('sub',0,2),
                x2:getTimeStamp('sub',0,1),
                y: 0,
                color:"rgba(58,78,206,0.9)",
                borderColor:"#ffffff",
                dataLabels: {
                    format:"10"
                            }, 
            },
            {
                x: getTimeStamp('sub',0,1),
                x2:getTimeStamp('none',0),
                y: 0,
                color:"rgba(58,78,206,0.9)",
                borderColor:"#ffffff",
                dataLabels: {
                    format:"10"
                            }, 
            },
            {
                x: getTimeStamp('none',0),
                x2:getTimeStamp('add',0,1),
                y: 0,
                color:"rgba(58,78,206,0.9)",
                borderColor:"#ffffff",
                dataLabels: {
                    format:"10"
                            }, 
            },
            {
                x: getTimeStamp('add',0,1),
                x2:getTimeStamp('add',0,2),
                y: 0,
                color:"#ffffff",
                borderColor:"#cccccc",
                dataLabels: {
                    format:"12(예상)"
                            }, 
            },
            {
                x: getTimeStamp('add',0,2),
                x2:getTimeStamp('add',0,3),
                y: 0,
                color:"#ffffff",
                borderColor:"#cccccc",
                dataLabels: {
                    format:"12(예상)"
                            }, 
            },
        ],
        dataLabels: {
        enabled: true
        },
    }
}
function processQuick(){
    return {
            type: 'xrange',
            styledMode: true,
            name: '속효',
            yAxis: 2,
            borderColor: '',
            pointWidth: 20,
            data: [
                {
                    x: getTimeStamp('sub',4,5),
                    x2:getTimeStamp('sub',14,5),
                    y: 1,
                    color:"rgba(228,57,55,1)",
                    borderColor:"#ffffff",
                    dataLabels: {
                        format:"6",
                        color:"#ffffff",
                                }, 
                },
                {
                    x: getTimeStamp('sub',14,5),
                    x2:getTimeStamp('sub',0,4),
                    y: 1,
                    color:"rgba(228,57,55,0.9)",
                    borderColor:"#ffffff",
                    dataLabels: {
                        format:"6"
                                }, 
                },
                {
                    x: getTimeStamp('sub',0,4),
                    x2:getTimeStamp('sub',12,4),
                    y: 1,
                    color:"rgba(228,57,55,0.9)",
                    borderColor:"#ffffff",
                    dataLabels: {
                        format:"6"
                                }, 
                },
                {
                    x: getTimeStamp('sub',12,4),
                    x2:getTimeStamp('sub',0,3),
                    y: 1,
                    color:"rgba(228,57,55,0.9)",
                    borderColor:"#ffffff",
                    dataLabels: {
                        format:"6"
                                }, 
                },
                {
                    x: getTimeStamp('sub',0,3),
                    x2:getTimeStamp('sub',12,3),
                    y: 1,
                    color:"rgba(228,57,55,0.9)",
                    borderColor:"#ffffff",
                    dataLabels: {
                        format:"6"
                                }, 
                },
                {
                    x: getTimeStamp('sub',12,3),
                    x2:getTimeStamp('sub',0,2),
                    y: 1,
                    color:"rgba(228,57,55,0.9)",
                    borderColor:"#ffffff",
                    dataLabels: {
                        format:"6"
                                }, 
                },
                {
                    x: getTimeStamp('sub',0,2),
                    x2:getTimeStamp('sub',12,2),
                    y: 1,
                    color:"rgba(228,57,55,0.9)",
                    borderColor:"#ffffff",
                    dataLabels: {
                        format:"6"
                                }, 
                },
                {
                    x: getTimeStamp('sub',12,2),
                    x2:getTimeStamp('sub',0,1),
                    y: 1,
                    color:"rgba(228,57,55,0.9)",
                    borderColor:"#ffffff",
                    dataLabels: {
                        format:"6"
                                }, 
                },
                {
                    x: getTimeStamp('sub',0,1),
                    x2:getTimeStamp('sub',12,1),
                    y: 1,
                    color:"rgba(228,57,55,0.9)",
                    borderColor:"#ffffff",
                    dataLabels: {
                        format:"6"
                                }, 
                },
                {
                    x: getTimeStamp('sub',12,1),
                    x2:getTimeStamp('none',0),
                    y: 1,
                    color:"rgba(228,57,55,0.9)",
                    borderColor:"#ffffff",
                    dataLabels: {
                        format:"6"
                                }, 
                },
                {
                    x: getTimeStamp('none',0),
                    x2:getTimeStamp('none',12),
                    y: 1,
                    color:"rgba(228,57,55,0.9)",
                    borderColor:"#ffffff",
                    dataLabels: {
                        format:"6"
                                }, 
                },
                {
                    x: getTimeStamp('none',12),
                    x2:getTimeStamp('add',0,1),
                    y: 1,
                    color:"rgba(228,57,55,0.9)",
                    borderColor:"#ffffff",
                    dataLabels: {
                        format:"6"
                                }, 
                },
                {
                    x: getTimeStamp('add',0,1),
                    x2:getTimeStamp('add',12,1),
                    y: 1,
                    color:"#ffffff",
                    borderColor:"#cccccc",
                    dataLabels: {
                        format:"4(예상)"
                                }, 
                },
                {
                    x: getTimeStamp('add',12,1),
                    x2:getTimeStamp('add',0,2),
                    y: 1,
                    color:"#ffffff",
                    borderColor:"#cccccc",
                    dataLabels: {
                        format:"4(예상)"
                                }, 
                },
                {
                    x: getTimeStamp('add',0,2),
                    x2:getTimeStamp('add',12,2),
                    y: 1,
                    color:"#ffffff",
                    borderColor:"#cccccc",
                    dataLabels: {
                        format:"4(예상)"
                                }, 
                },
                {
                    x: getTimeStamp('add',12,2),
                    x2:getTimeStamp('add',0,3),
                    y: 1,
                    color:"#ffffff",
                    borderColor:"#cccccc",
                    dataLabels: {
                        format:"4(예상)"
                                }, 
                },
                
            ],
            dataLabels: {
            enabled: true
            },
        }
    
}

export { processObserve, processExpect, processStable, processFood , processContinue, processQuick};