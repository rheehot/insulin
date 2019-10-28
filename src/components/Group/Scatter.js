import React, { Component } from "react";
import * as d3 from "d3";

d3.selection.prototype.moveToFront = function() {
  return this.each(function() {
    this.parentNode.appendChild(this);
  });
};

const colorchart = {
  0: ["#2f54eb"],
  1: ["#722ed1"],
  2: ["#eb2f96"],
  3: ["#ff7875"],
  4: ["#fa541c"],
  5: ["#fa8c16"],
  6: ["#1890ff"]
};

class Scatter extends Component {
  constructor(props) {
    super(props);
    function padExtent(e, p) {
      if (p === undefined) p = 1;
      return [e[0] - p, e[1] + p];
    }
    this.state = {
      data: this.props.data,
      width: this.props.dimensions.width,
      height: this.props.dimensions.height,
      scalex: d3
        .scaleLinear()
        .domain(padExtent([-300, 300]))
        .range(padExtent([0, this.props.dimensions.width])),
      scaley: d3
        .scaleLinear()
        .domain(padExtent([-400, 400]))
        .range(padExtent([this.props.dimensions.height, 0]))
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.gorup !== nextProps.group) {
      if (nextProps.group === "all") {
        this.setState({
          data: this.props.data
        });
      } else {
        this.setState({
          data: this.props.data.filter(v => v.group === +nextProps.group)
        });
      }
    }
  }
  componentDidMount() {
    d3.select(".selected").moveToFront();
  }
  componentDidUpdate() {
    d3.select(".selected").moveToFront();
  }
  render() {
    const { width, height, scalex, scaley } = this.state;
    return (
      <div>
        <svg width={width} height={height} className="chart">
          <g>
            {this.state.data.map((d, i) => {
              const dotColor = colorchart[d.group];
              if (d.id === +this.props.person) {
                return (
                  <g className="selected" key={i}>
                    <circle
                      cx={scalex((d.x - 100) * 0.8)}
                      cy={scaley(d.y * 6)}
                      r="7"
                      strokeWidth={2}
                      stroke="#fff"
                      strokeOpacity={1}
                      fill="rgb(217,83,79)"
                    />
                    <circle
                      cx={scalex((d.x - 100) * 0.8)}
                      cy={scaley(d.y * 6)}
                      r="20"
                      strokeWidth={2}
                      stroke="rgb(217,83,79)"
                      fill="none"
                      strokeOpacity={1}
                    />
                  </g>
                );
              } else {
                return (
                  <circle
                    cx={scalex((d.x - 100) * 0.8)}
                    cy={scaley(d.y * 6)}
                    r="3"
                    fill={dotColor[0]}
                    fillOpacity={0.1}
                    key={i}
                  />
                );
              }
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
    );
  }
}

export default Scatter;
