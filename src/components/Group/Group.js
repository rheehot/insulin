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
            group:'all',
            dimensions: null,
            person:this.props.person,
            personData:this.props.personData,
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
        })
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.personData !== nextProps.personData) {
            this.setState({
                person:nextProps.person,
                personData:nextProps.personData,
                group:nextProps.group
            })
        }
    }
    render() {
        const {cardtitle, rcmd, selectPerson,data, } = this.props;
        const { dimensions, group, personData, person }=this.state;
        return (
        <div className={'cardWrapper'}>
            <div className={'card'}>
                <CardHead
                cardtitle={cardtitle}
                />
                <Select value ={group} style={{ width: 120, position:"absolute", top:'15px', right:'20px' }} onChange={this.selectGroup}>
                    <Option value='all'>ALL</Option>                    
                    <Option value={0}>그룹A</Option>
                    <Option value={1}>그룹B</Option>
                    <Option value={2}>그룹C</Option>
                    <Option value={3}>그룹D</Option>
                    <Option value={4}>그룹E</Option>
                    <Option value={5}>그룹F</Option>
                    <Option value={6}>그룹G</Option>
                </Select>
                <div className="plot" ref={el => (this.container = el)}>
                {dimensions && (
                    <Scatter
                        rcmd ={rcmd}
                        selectPerson={selectPerson}
                        dimensions={dimensions}
                        group={group}
                        data={data}
                        person={person}
                    />
                )}
                </div>
                {/* <div className="info">
                    <div className="basicinfo">
                        <div className="name">{personData.name}</div>
                        <span className="gender">여성</span>
                        <span className="age">  {personData.age}</span>
                    </div>
                    <div className="physical">
                        <div className="groupnum">그룹: {personData.group}</div>
                        <div className="tall">키: {personData.height}</div>
                        <div className="weight">몸무게: {personData.weight}</div>
                    </div>
                    <div className="medical">
                        <div className="bmi">BMI: {personData.bmi}</div>
                        <div className="emptybd">공복혈당: {personData.fsugar}</div>
                        <div className="bd">혈청: {personData.sugar}</div>
                    </div>
                </div> */}
            </div>
        </div>
        );
    }
}
export default Group;
