import React, { PropTypes } from 'react'
import * as d3 from 'd3'
import {data} from '../../utils';

export default class Scatter extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    data:data,
    g: null,
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.group !== this.props.group) {
      this.renderBubbles(nextProps.group)
    }
  }

  shouldComponentUpdate() {
    return false
  }

  onRef = (ref) => {
    this.setState({ g: d3.select(ref) }, () => this.renderBubbles(this.props.group))
  }

  renderBubbles(group) {
    const filtereddata=data.filter(v=>v.group===group);
    const bubbles = this.state.g.selectAll('.bubble').data(filtereddata)
    bubbles.enter().append('circle')
      .classed('bubble', true)
      .attr('r', 2)
      .attr('cx', d => d.x)
      .attr('cy', d => d.y)
      .attr('fill', '#096dd9')
    //   .attr('stroke', d => d3.rgb(fillColor(d.group)).darker())
    //   .attr('stroke-width', 1)
    //   .on('mouseover', showDetail)  // eslint-disable-line
    //   .on('mouseout', hideDetail) // eslint-disable-line
  }

  render() {
    return (
      <g ref={this.onRef} className="bubbles" />
    )
  }
}
