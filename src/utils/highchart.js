Highcharts.chart('container', {
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
        }, 
        {
            title: {
                text: '식이(kcal)'
            },
            reversed: false,
            top: '42%',
            height: '23%',
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
            top: '70%',
            height: '18%',
            offset: 0,
            lineWidth: 1
        },
        {
            title: {
                text: '경구 인슐린'
            },
            categories: ['','' ],
            reversed: true,
            top: '92%',
            height: '6%',
            offset: 0,
            lineWidth: 1,
            gridLineWidth: 0,
        }
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
    series:[
    {
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
        data: [
            { 	
                x: Date.UTC(1970, 8, 7,4),
                y: 140,
                marker: {
                    symbol: 'circle',
                    fillColor: "#ffffff",
                    lineWidth:2,
                    lineColor:"#1f2e86"
                },
                dataLabels:{
                    enabled:false
                }
            },
            { 	
                x: Date.UTC(1970, 8, 7,8),
                y: 457,
                marker: {
                    symbol: 'circle',
                    
                },
                dataLabels:{
                    format: '',
                    enabled:false,
                } 
            },
            { 	
                x: Date.UTC(1970, 8, 7,12),
                y: 189,
                marker: {
                    symbol: 'circle',
                },
                dataLabels:{
                    format: '',
                    enabled:false,
                } 
            },
            { 	
                x: Date.UTC(1970, 8, 7,16),
                y: 113,
                marker: {
                    symbol: 'circle',
                    fillColor: "#ffffff",
                    lineWidth:2,
                    lineColor:"#1f2e86"
                    
                },
                dataLabels:{
                    enabled:false,
                } 
            },
            {   
                x: Date.UTC(1970, 8, 7,20),
                y: 228,
                marker: {
                    symbol: 'circle',
                },
                dataLabels:{
                    enabled:false,
                } 
            },
            {   
                x: Date.UTC(1970, 8, 7,24),
                y: 159,
                marker: {
                    symbol: 'circle',
                    fillColor: "#ffffff",
                    lineWidth:2,
                    lineColor:"#1f2e86"
                    
                },
                dataLabels:{
                    enabled:false,
                } 
            },
            { 	
                x: Date.UTC(1970, 8, 8,4),
                y: 143,
                marker: {
                    symbol: 'circle',
                    fillColor: "#ffffff",
                    lineWidth:2,
                    lineColor:"#1f2e86"
                    
                },
                dataLabels:{
                    enabled:false,
                } 
            },
            { 	
                x: Date.UTC(1970, 8, 8,8),
                y: 402,
                marker: {
                    symbol: 'circle',
                },
                dataLabels:{
                    color:"#ffffff",
                    backgroundColor: '#d9534f',
                    borderColor: '#d9534f'
                } 
            },
            { 	
                x: Date.UTC(1970, 8, 8,12),
                y: 186,
                marker: {
                    symbol: 'circle',                    
                },
                dataLabels:{
                    format: '',
                    enabled:false,
                } 
            },
            { 	x: Date.UTC(1970, 8, 8,16),
            y: 140,
            marker: {
                symbol: 'circle',
                fillColor: "#ffffff",
                lineWidth:2,
                lineColor:"#1f2e86"
                
            },
            dataLabels:{
                format: '{y}/RI',
                enabled:false,
            } 
            },
            {     x: Date.UTC(1970, 8, 8 ,20),
            y: 203,
            marker: {
                symbol: 'circle',
                
            },
            dataLabels:{
                enabled:false,
            }
            },
            {     x: Date.UTC(1970, 8, 8 ,24),
            y: 138,
            marker: {
                symbol: 'circle',
                fillColor: "#ffffff",
                lineWidth:2,
                lineColor:"#1f2e86"
                
            },
            dataLabels:{
                enabled:false,
            } 
            },   
        {     x: Date.UTC(1970, 8, 9, 4),
            y: 138,
            marker: {
                symbol: 'circle',
                fillColor: "#ffffff",
                lineWidth:2,
                lineColor:"#1f2e86"
                
            },
            dataLabels:{
                enabled:false,
            } 
            },
            {   x: Date.UTC(1970,8,9,8),
                y: 542,
                marker: {
                    symbol: 'circle',
                    
                },
                dataLabels:{
                    format: '{y}',
                    color:"#ffffff",
                    backgroundColor: '#d9534f',
                    borderColor: '#d9534f'
                } 
            },  
            {   x: Date.UTC(1970, 8, 9,12),
                y: 185,
                marker: {
                    symbol: 'circle',
                    fillColor: "#ffffff",
                    lineWidth:2,
                    lineColor:"#1f2e86"
                    
                    
                },
                dataLabels:{
                    format: '{y}/NM3',
                    enabled:false,
                } 
            },  
                    
            {   x: Date.UTC(1970, 8, 9,16),
                y: 119,
                marker: {
                    symbol: 'circle',
                    fillColor: "#ffffff",
                    lineWidth:2,
                    lineColor:"#1f2e86"
                    
                },
                dataLabels:{
                    format: '{y}/Apdira',
                    enabled:false
                } 
            },
            {   x: Date.UTC(1970, 8, 9,20),
                y: 240,
                marker: {
                    symbol: 'circle',
                },
                dataLabels:{
                    format: '{y}/Apdira',
                    enabled:false
                } 
            },
            {   x: Date.UTC(1970, 8, 9,24),
                y: 145,
                marker: {
                    symbol: 'circle',
                    fillColor: "#ffffff",
                    lineWidth:2,
                    lineColor:"#1f2e86"
                    
                },
                dataLabels:{
                    format: '{y}/Apdira',
                    enabled:false
                } 
            },
            // //
            {     x: Date.UTC(1970, 8, 10, 4),
            y: 120,
            marker: {
                symbol: 'circle',
                fillColor: "#ffffff",
                lineWidth:2,
                lineColor:"#1f2e86"
                
            },
            dataLabels:{
                enabled:false,
            } 
            },
            {   x: Date.UTC(1970,8,10,8),
                y: 198,
                marker: {
                    symbol: 'circle',
                    
                },
                dataLabels:{
                    format: '{y}',
                    enabled: false,
                    color:"#ffffff",
                    backgroundColor: '#d9534f',
                    borderColor: '#d9534f'
                } 
            },  
            {   x: Date.UTC(1970, 8, 10,12),
                y: 168,
                marker: {
                    symbol: 'circle',
                    fillColor: "#ffffff",
                    lineWidth:2,
                    lineColor:"#1f2e86"
                    
                    
                },
                dataLabels:{
                    format: '{y}/NM3',
                    enabled:false,
                } 
            },  
                    
            {   x: Date.UTC(1970, 8, 10,16),
                y: 120,
                marker: {
                    symbol: 'circle',
                    fillColor: "#ffffff",
                    lineWidth:2,
                    lineColor:"#1f2e86"
                    
                },
                dataLabels:{
                    format: '{y}/Apdira',
                    enabled:false
                } 
            },
            {   x: Date.UTC(1970, 8, 10,20),
                y: 323,
                marker: {
                    symbol: 'circle',
                },
                dataLabels:{
                    format: '{y}/Apdira',
                    enabled:false
                } 
            },
            {   x: Date.UTC(1970, 8, 10,24),
                y: 127,
                marker: {
                    symbol: 'circle',
                    fillColor: "#ffffff",
                    lineWidth:2,
                    lineColor:"#1f2e86"
                    
                },
                dataLabels:{
                    format: '{y}/Apdira',
                    enabled:false
                } 
            },
        ]},
        //series1 예상
        {
            type:'line',
            name: '',
            data: [
                { 	x: Date.UTC(1970, 8, 10,24),
                y: 127,
                marker: {
                    enabled: false
                },
                dataLabels:{
                    format: '{y}',
                    enabled:false
                } 
                },
                { 	x: Date.UTC(1970, 8, 11,8),
                y: 40,
                marker: {
                    symbol: 'circle',
                    fillColor: "#ff0000",
                    enabled: true
                },
                dataLabels:{
                    format: '{y}(예상) '
                } 
                },
            ],
            dashStyle: 'dash',
            lineColor:"#ff0000"
        },
        //series1 안정권
        {
            type:'line',
            name: '',
            data: [
            { 	x: Date.UTC(1970, 8, 7,6),
            y: 100,
            marker: {
                enabled: false
            },
            dataLabels:{
                format: ''
            } 
            },
            { 	x: Date.UTC(1970, 8, 11,6),
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
        },
        //series2 간식
        {
            name:"간식",
            type:'column',
            yAxis:1,
            pointWidth: 20,
            color:"rgba(124,191,174,1)",
            dataLabels:{
                enabled:false
            },
            data:[
                {     x: Date.UTC(1970, 8, 7, 8,),
                        y: 935,
                        color:"#d9534f", 
                        dataLabels:{
                            format: '포도 1송이(250kcal)',
                            enabled:true,
                } 
                    
                    },
                [Date.UTC(1970, 8, 7,12), 712 ],
                [Date.UTC(1970, 8, 7,20), 685 ],
                {     x: Date.UTC(1970, 8, 8, 8,),
                y: 837,
                color:"#d9534f",
                dataLabels:{
                            format: '초코우유 1개(240kcal)',
                            enabled:true,
                            } 
                },
                {     x: Date.UTC(1970, 8, 9, 8,),
                y: 1059,
                color:"#d9534f",
                dataLabels:{
                            format: '팥빵 1개(252kcal)',
                            enabled:true,
                } 
                },
                [Date.UTC(1970, 8, 8,12,), 697 ],
                [Date.UTC(1970, 8, 8,20,), 706 ],
                
                [Date.UTC(1970, 8, 9,12), 705 ],
                [Date.UTC(1970, 8, 9,20), 688 ],  
                [Date.UTC(1970, 8, 10,8), 678 ],
                [Date.UTC(1970, 8, 10,12), 693 ],  
                {     x: Date.UTC(1970, 8, 10, 20,),
                y: 841,
                color:"#d9534f",
                dataLabels:{
                            format: '머핀 1개(841kcal)',
                            enabled:true,
                } 
                },
            ],
        },  
        {
            type: 'xrange',
            styledMode: true,
            name: '지속',
            yAxis: 2,
            borderColor: '',
            pointWidth: 20,
            data: [
                {
                    x: Date.UTC(1970, 8, 7, 4),
                    x2: Date.UTC(1970, 8, 8, 0),
                    y: 0,
                    color:"rgba(58,78,206,0.9)",
                    borderColor:"#ffffff",
                    dataLabels: {
                        format:"20",
                        color:"#ffffff",
                                }, 
                },
                {
                    x: Date.UTC(1970, 8, 8, 0),
                    x2: Date.UTC(1970, 8, 9, 0),
                    y: 0,
                    color:"rgba(58,78,206,0.9)",
                    borderColor:"#ffffff",
                    dataLabels: {
                        format:"20"
                                }, 
                },
                {
                    x: Date.UTC(1970, 8, 9, 0),
                    x2: Date.UTC(1970, 8, 10, 0),
                    y: 0,
                    color:"rgba(58,78,206,0.9)",
                    borderColor:"#ffffff",
                    dataLabels: {
                        format:"20"
                                }, 
                },
                {
                    x: Date.UTC(1970, 8, 10, 0),
                    x2: Date.UTC(1970, 8, 11, 0),
                    y: 0,
                    color:"rgba(58,78,206,0.9)",
                    borderColor:"#ffffff",
                    dataLabels: {
                        format:"20"
                                }, 
                },
                {
                    x: Date.UTC(1970, 8, 11, 0),
                    x2: Date.UTC(1970, 8, 12, 0),
                    y: 0,
                    color:"#ffffff",
                    borderColor:"#cccccc",
                    dataLabels: {
                        format:"16(예상)"
                                }, 
                },
            ],
            dataLabels: {
            enabled: true
            },
        },
        {
            type: 'xrange',
            styledMode: true,
            name: '속효',
            yAxis: 2,
            borderColor: '',
            pointWidth: 20,
            data: [
                {
                    x: Date.UTC(1970, 8, 7, 4),
                    x2: Date.UTC(1970, 8, 7, 14),
                    y: 1,
                    color:"rgba(228,57,55,1)",
                    borderColor:"#ffffff",
                    dataLabels: {
                        format:"6",
                        color:"#ffffff",
                                }, 
                },
                {
                    x: Date.UTC(1970, 8, 7, 14),
                    x2: Date.UTC(1970, 8, 8, 0),
                    y: 1,
                    color:"rgba(228,57,55,0.9)",
                    borderColor:"#ffffff",
                    dataLabels: {
                        format:"6"
                                }, 
                },
                {
                    x: Date.UTC(1970, 8, 8, 0),
                    x2: Date.UTC(1970, 8, 8, 12),
                    y: 1,
                    color:"rgba(228,57,55,0.9)",
                    borderColor:"#ffffff",
                    dataLabels: {
                        format:"6"
                                }, 
                },
                {
                    x: Date.UTC(1970, 8, 8, 12),
                    x2: Date.UTC(1970, 8, 9, 0),
                    y: 1,
                    color:"rgba(228,57,55,0.9)",
                    borderColor:"#ffffff",
                    dataLabels: {
                        format:"6"
                                }, 
                },
                {
                    x: Date.UTC(1970, 8, 9, 0),
                    x2: Date.UTC(1970, 8, 9, 12),
                    y: 1,
                    color:"rgba(228,57,55,0.9)",
                    borderColor:"#ffffff",
                    dataLabels: {
                        format:"6"
                                }, 
                },
                {
                    x: Date.UTC(1970, 8, 9, 12),
                    x2: Date.UTC(1970, 8, 10, 0),
                    y: 1,
                    color:"rgba(228,57,55,0.9)",
                    borderColor:"#ffffff",
                    dataLabels: {
                        format:"6"
                                }, 
                },
                {
                    x: Date.UTC(1970, 8, 10, 0),
                    x2: Date.UTC(1970, 8, 10, 12),
                    y: 1,
                    color:"rgba(228,57,55,0.9)",
                    borderColor:"#ffffff",
                    dataLabels: {
                        format:"6"
                                }, 
                },
                {
                    x: Date.UTC(1970, 8, 10, 12),
                    x2: Date.UTC(1970, 8, 11, 0),
                    y: 1,
                    color:"rgba(228,57,55,0.9)",
                    borderColor:"#ffffff",
                    dataLabels: {
                        format:"6"
                                }, 
                },
                
            ],
            dataLabels: {
            enabled: true
            },
        },
    ],
    });








