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
                <Select value ={group} style={{ width: 120, position:"absolute", top:'20px', right:'30px' }} onChange={this.selectGroup}>
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
            </div>
        </div>
        );
    }
}
export default Group;
