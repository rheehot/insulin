import React, { Component } from 'react';
import { Select } from 'antd';
import Scatter from './Scatter'
import CardHead from '../CardHead'
import "./Group.scss";

const { Option } = Select;
class Group extends Component {
    constructor(props) {
        super(props);
        this.state = {
            group:0,
            dimensions: null,
        };
    }

    componentDidMount() {
        this.setState({
            dimensions: {
                width: this.container.offsetWidth,
                height: this.container.offsetHeight,
            },
        });
    }
    selectGroup = (value) => {
        this.setState({
            group: value,
            // filteredData: data.filter(v => v.group === value)
        })
    }
    render() {
        const {cardtitle, rcmd, selectPerson } = this.props;
        const { dimensions, group,filteredData }=this.state;
        return (
        <div className={'cardWrapper'}>
            <div className={'card'}>
                <CardHead
                cardtitle={cardtitle}
                />
                <Select defaultValue="0" style={{ width: 120, position:"absolute", top:'15px', right:'20px' }} onChange={this.selectGroup}>
                    <Option value="0">그룹A</Option>
                    <Option value="1">그룹B</Option>
                    <Option value="2">그룹C</Option>
                    <Option value="3">그룹D</Option>
                    <Option value="4">그룹E</Option>
                    <Option value="5">그룹F</Option>
                    <Option value="6">그룹G</Option>
                </Select>
                <div className="plot" ref={el => (this.container = el)}>
                {dimensions && (
                    <Scatter
                        rcmd ={rcmd}
                        selectPerson={selectPerson}
                        dimensions={dimensions}
                        group={group}
                    />
                )}
                </div>
                <div className="info">
                    <div className="basicinfo">
                        <div className="name">이름</div>
                        <span className="gender">여성</span>
                        <span className="age">나이</span>
                    </div>
                    <div className="physical">
                        <div className="groupnum">그룹: A</div>
                        <div className="tall">키: 150</div>
                        <div className="weight">몸무게: 50</div>
                    </div>
                    <div className="medical">
                        <div className="bmi">BMI: 19</div>
                        <div className="emptybd">공복혈당: 19</div>
                        <div className="bd">혈청: 19</div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
export default Group;
