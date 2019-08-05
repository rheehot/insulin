import React, { Component } from 'react';
import * as d3 from 'd3';

d3.selection.prototype.moveToFront = function () {
  return this.each(function () {
    this.parentNode.appendChild(this);
  });
};

const colorchart={
  0: ['#ff4d4f'],
  1: ['#ff7a45'],
  2: ['#ffa940'],
  3: ['#36cfc9'],
  4: ['#40a9ff'],
  5: ['#597ef7'],
  6: ['#9254de'],
}
class Scatter extends Component {
    constructor(props) {
        super(props);
        function padExtent(e, p) {
          if (p === undefined) p = 1;
          return ([e[0] - p, e[1] + p]);
        }
        this.state= {
            data: this.props.data,
            width:this.props.dimensions.width,
            height:this.props.dimensions.height,
            scalex: d3.scaleLinear()
            .domain(padExtent([-300, 300]))
            .range(padExtent([0, this.props.dimensions.width])),
            scaley: d3.scaleLinear()
            .domain(padExtent([-400, 400]))
            .range(padExtent([this.props.dimensions.height, 0])),
        }
    }

componentWillReceiveProps(nextProps) {
    if(this.props.gorup !== nextProps.group){
        if (nextProps.group === 'all'){
            this.setState({
              data: this.props.data
            })
        }else{
        this.setState({
            data: this.props.data.filter(v => v.group === +nextProps.group),
        })
      }
    }
}
componentDidMount(){
  d3.select('.selected').moveToFront();
}
componentDidUpdate() {
  d3.select('.selected').moveToFront();
}
render() {
  const {width, height, scalex, scaley} = this.state;
  console.log(this.props.person)
    return (
      <div>
        <svg
          width={width}
          height={height}
          className="chart"
        >
          <g>
            {this.state.data.map((d, i) => {
              const dotColor= colorchart[d.group];
              if (d.id === +this.props.person) {
                return <circle
                    cx={scalex((d.x-100)*0.8)}
                    cy={scaley(d.y*6)}
                    r="8"
                    strokeWidth={3}
                    stroke = {dotColor[0]}
                    strokeOpacity = {1}
                    class="selected"
                    fill={'#fff'}
                    key={i}
                />
              }else{
                return <circle
                    cx={scalex((d.x-100)*0.8)}
                    cy={scaley(d.y*6)}
                    r="3"
                    fill={dotColor[0]}
                    fillOpacity={0.1}
                    key={i}
                />}
              })}
            {/* <Axis
              axis="x"
              transform={"translate(0," + height + ")"}
              scale={axisBottom().scale(x)}
            />
            <Axis
              axis="y"
              transform="translate(0,0)"
              scale={axisLeft().scale(y)}
            /> */}
          </g>
        </svg>
      </div>
    )
  }
}


export default Scatter;