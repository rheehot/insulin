import React, { Component } from "react";
import { Slider, InputNumber, Row, Col, Input } from "antd";
import styled from "styled-components";

const S = {
  SliderRed: styled(Slider)`
    transition:all 0.5s;
    .ant-slider-rail{
        height:8px;
        background-color:rgba(0,0,0,0,5) !important;
    }
    .ant-slider-track{
        transition:width 0.3s;
        height:8px;
        background-color:rgb(217,83,79) !important;
    }
    .ant-slider-step{
        height: 8px;
    }
    .ant-slider-handle{
        border: solid 2px rgb(217,83,79) !important
        width:16px;
        height:16px;
    }
    .ant-slider-dot{
        display:none;
        width:0px;
        height:0px;
    }
`,
  Slider: styled(Slider)`
    transition: all 0.5s;
    .ant-slider-rail {
      height: 8px;
      background-color: rgba(0, 0, 0, 0, 5) !important;
    }
    .ant-slider-track {
      transition: width 0.3s;
      height: 8px;
    }
    .ant-slider-step {
      height: 8px;
    }
    .ant-slider-handle {
      width: 16px;
      height: 16px;
    }
    .ant-slider-dot {
      display: none;
      width: 0px;
      height: 0px;
    }
  `,
  InputNumber: styled(InputNumber)`
    font-size: 14px;
  `
};
const markStyle = {
  marginTop: "0px",
  fontSize: "12px",
  color: "rgba(0,0,0,0.5)"
};
const rcmStyle = {
  background: "#f5f5f5",
  fontSize: "14px",
  color: "#000",
  zIndex: 99,
  borderRadius: "2px",
  padding: "0 3px",
  marginTop: "5px"
};
class EachSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: this.props.eachrcmd,
      marks: {
        0: { style: markStyle, label: "0" },
        eachrcmd: { style: rcmStyle, label: "추천mg" },
        20: { style: markStyle, label: "20" }
      }
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.eachrcmd !== this.props.eachrcmd) {
      this.setState({
        inputValue: nextProps.eachrcmd,
        marks: {
          0: { style: markStyle, label: "0" },
          [nextProps.eachrcmd]: {
            style: rcmStyle,
            label: `${nextProps.eachrcmd}mg`
          },
          20: { style: markStyle, label: "20" }
        }
      });
    }
  }
  componentDidMount() {
    const { eachrcmd } = this.props;
    this.setState({
      marks: {
        0: { style: markStyle, label: "0" },
        [eachrcmd]: { style: rcmStyle, label: `${eachrcmd}mg` },
        20: { style: markStyle, label: "20" }
      }
    });
  }
  onChange = value => {
    this.props.sliderChange();
    this.setState({
      inputValue: value
    });
  };
  formatter(value) {
    return `${value}mg`;
  }
  render() {
    const { inputValue, marks } = this.state;
    return (
      <Row gutter={24}>
        <div className="sliderset">
          <Col span={1}>
            <div className="slidertitle">{this.props.title}</div>
          </Col>
          <Col span={14} offset={2}>
            {this.props.title !== "기저" ? (
              <S.SliderRed
                marks={marks}
                min={0}
                max={20}
                onChange={this.onChange}
                tipFormatter={this.formatter}
                value={typeof inputValue === "number" ? inputValue : 0}
              />
            ) : (
              <S.Slider
                marks={marks}
                min={0}
                max={20}
                onChange={this.onChange}
                tipFormatter={this.formatter}
                value={typeof inputValue === "number" ? inputValue : 0}
              />
            )}
          </Col>
          <Col span={5}>
            <S.InputNumber
              min={0}
              max={20}
              formatter={value => value}
              style={{ width: "100%" }}
              value={inputValue}
              onChange={this.onChange}
            />
          </Col>
        </div>
      </Row>
    );
  }
}

export default EachSlider;
