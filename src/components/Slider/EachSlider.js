import React, { Component } from 'react';
import { Slider, InputNumber, Row, Col, Input } from 'antd';
import styled from 'styled-components';

const S = {
    Slider:styled(Slider)`
        font-size:12px;
        word-brake: keep-all;
        span{
            font-size:12px;
        }
        .ant-slider-rail{
            height:6px;
        }
        .ant-slider-track{
            height:6px;

        }
        .ant-slider-step{
            height: 6px;

        }
        .ant-slider-handle{
            width:15px;
            height:15px;
        }
        .ant-slider-dot{
            width:10px;
            height:10px;
        }
        .ant-slider-mark span:nth-child(2){
            margin-top:3px;
            background: #fff;
            color: #000;
            border:1px solid #ddd;
            z-index:999;
            border-radius:2px;
            padding:0 4px;
            // opacity:0.7;
        }
    `,
    InputNumber:styled(InputNumber)`
        font-size:12px;

    `
}
class EachSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: this.props.eachrcmd,
            marks: {
              0: '0mg',
              eachrcmd: '추천',
              20: '20mg',
            }
        }
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.eachrcmd!==this.props.eachrcmd){
            this.setState({
                inputValue: nextProps.eachrcmd,
                marks: {
                    0: '0mg',
                    [nextProps.eachrcmd - 3]: '',
                    [nextProps.eachrcmd]: '추천' + nextProps.eachrcmd,
                    [nextProps.eachrcmd + 3]: '',
                    20: '20mg',
                }
            });
        }     
    }
    componentDidMount() {
        const { eachrcmd } = this.props;
        this.setState({
            marks:{
                0: '0mg',
                [eachrcmd-3]:'',
                [eachrcmd] : '추천 '+ eachrcmd,
                [eachrcmd+3]: '',
                20: '20mg',
            }
        });
    }
    onChange = value => {
        this.props.sliderChange();
        this.setState({
        inputValue: value,
        });
    };
    
    render() {
        const { inputValue, marks } = this.state;
        return (
        <Row gutter={24}>
            <div className="slidertitle">{this.props.title}</div> 
            <Col span={18}>
            <S.Slider
                marks={marks} 
                min={0}
                max={20}
                onChange={this.onChange}
                value={typeof inputValue === 'number' ? inputValue : 0}
            />
            </Col>
            <Col span={5}>
            <S.InputNumber
                min={0}
                max={20}
                formatter={value => `${value}mg`}
                style={{ width: '100%' }}
                value={inputValue}
                onChange={this.onChange}
            />
            </Col>
        </Row>
        );
    }
}

export default EachSlider;
