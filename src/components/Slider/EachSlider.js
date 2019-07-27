import React, { Component } from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';

class EachSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: this.props.eachrcmd,
            marks: {
              0: '0mg',
              eachrcmd: '추천값',
              20: '20mg',
            }
        }
    }
    componentWillReceiveProps(nextProps) {
            
    }
    componentDidMount() {
        const { eachrcmd } = this.props;
        this.setState({
            marks:{
                0: '0mg',
                [eachrcmd] : '추천값'+ eachrcmd,
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
            <Col span={18}>
            <Slider
                marks={marks} 
                defaultValue={marks.eachrcmd}
                min={0}
                max={20}
                onChange={this.onChange}
                value={typeof inputValue === 'number' ? inputValue : 0}
            />
            </Col>
            <Col span={6}>
            <InputNumber
                min={0}
                max={20}
                defaultValue={marks.eachrcmd}
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
