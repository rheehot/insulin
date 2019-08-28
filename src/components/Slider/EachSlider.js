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
            height:8px;
        }
        .ant-slider-track{
            height:8px;
        }
        .ant-slider-step{
            height: 8px;

        }
        .ant-slider-handle{
            width:16px;
            height:16px;
        }
        .ant-slider-dot{
            display:none;
            width:0px;
            height:0px;
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
              0: '0',
              eachrcmd: '추천mg',
              20: '20',
            }
        }
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.eachrcmd!==this.props.eachrcmd){
            this.setState({
                inputValue: nextProps.eachrcmd,
                marks: {
                    0: '0',
                    // [nextProps.eachrcmd - 3]: '',
                    [nextProps.eachrcmd]: '추천' + nextProps.eachrcmd + 'mg',
                    // [nextProps.eachrcmd + 3]: '',
                    20: '20',
                }
            });
        }     
    }
    componentDidMount() {
        const { eachrcmd } = this.props;
        this.setState({
            marks:{
                0: '0',
                // [eachrcmd-3]:'',
                [eachrcmd]: '추천 ' + eachrcmd + 'mg',
                // [eachrcmd+3]: '',
                20: '20',
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
                formatter={value => value}
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
