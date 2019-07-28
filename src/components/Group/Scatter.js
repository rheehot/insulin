import React, { Component } from 'react';
import * as d3 from 'd3';
import { data } from '../../utils';


class Scatter extends Component {
    constructor(props) {
        super(props);
        this.state= {
            data: data.filter(v => v.group === 0),
        }
    }

componentWillReceiveProps(nextProps) {
    if(this.props.gorup !== nextProps.group){
        this.setState({
            data: data.filter(v => v.group === +nextProps.group),
        })
    }
}
render() {
    const { dimensions } = this.props;
    const containerWidth = dimensions.width;
    const containerHeight = dimensions.height;
    const margin = { top: 0, right: 0, bottom: 0, left: 0 };
    const domainwidth = containerWidth- margin.left - margin.right;
    const domainheight = containerHeight - margin.top - margin.bottom;
    const width = domainwidth;
    const height = domainheight;

    const x = d3.scaleLinear()
        .domain(padExtent([-400, 400]))
        .range(padExtent([0, width]));
    const y = d3.scaleLinear()
        .domain(padExtent([-400, 400]))
        .range(padExtent([height, 0]));

    function padExtent(e, p) {
        if (p === undefined) p = 1;
        return ([e[0] - p, e[1] + p]);
    }

    return (
      <div>
        <svg
          width={containerWidth}
          height={containerHeight}
          className="chart"
        >
          <g>
            {this.state.data.map((d, i) => (
                <circle
                    cx={x((d.x-150)*0.8)}
                    cy={y(d.y*6)}
                    r="2"
                    style={{ fill:'#096dd9'}}
                    key={i}
                />
            ))}
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