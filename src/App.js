import React, { Component } from 'react';
import { Navigation, Group, SliderCtrl, Script, Graph } from './components';
import { Row, Col } from 'antd';
import {data, graphdata} from './utils';

function getRandomInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
const insulin= data.map((v,idx)=>({...v,id:idx+1,room:`${getRandomInt(1,12)}-${getRandomInt(100,500)}`}));

class App extends Component {
  state={
      cardtitle:{
          group:'환자군 분류',
          slider:'인슐린 투여 시나리오',
          script:'처방하기',
          graph:''
      },
      person:null,
      personData:{
      "group": 0,
      "x": 0,
      "y": 0,
      "name": "이름",
      "age": 0,
      "height": 0,
      "weight": 0,
      "bmi": 0,
      "fsugar": 0,
      "sugar": 0
    },
      group:'all',
      data:insulin,
      rcmd:[10,13,15,8],
      expect: graphdata
  }

  selectPerson = (value) => {
    const find = insulin.find(v => v.id === +value);
    this.setState({
      person: value,
      group: find.group,
      personData:find,
      rcmd: this.state.rcmd.map(v => Math.floor(Math.random() * (20))),
    });
    this.personChange();
  }

  personChange = () => {
    const today = Math.floor(Math.random() * (400) + 100);
     const newexpect = this.state.expect.map((v, idx) => {
       if( idx === 15){
         return ({
           ...v,
           sugar:today,
           fsugar: today
         })
       }
       if (idx < 15) {
         return ({
           ...v,
           sugar: Math.floor(Math.random() * (400) + 100),
         })
       } else {
         return ({
           ...v,
           fsugar: Math.floor(Math.random() * (400) + 100),
         })
       }
     })
     this.setState({
       expect: newexpect,
     })
  }

  sliderChange = () => {
    const newexpect=this.state.expect.map((v,idx)=>{
      if (idx < 16) {
        return (v)
      }else{
        return ({
          ...v,
          fsugar: Math.floor(Math.random() * (400) + 100),
        })
      }
    })
    this.setState({
      expect: newexpect,
    })
  }

  render() {
    const { cardtitle, rcmd, person, expect, data, group, personData }=this.state
    return (
      <>
      <Row>
        {/* Header */}
        <Col span={24}>
          <div className='header'></div>
        </Col>
      </Row>
      <Row>
        {/* Header */}
        <Col span={24}>
          <Navigation
              selectPerson = {this.selectPerson} 
              data={data}
              person={person}
          />
        </Col>
      </Row>
      <Row gutter={20}>
        <Col span={22} offset={1}>
          <Graph 
            expect={expect}
            cardtitle={cardtitle.graph}
            graphChange = {this.graphChange}
            personData={personData}
            person={person}
          />
        </Col>
      </Row>
      {/* Group row */}
      <Row gutter={20}>
        <Col span={8} offset={1}>
          <Group
              cardtitle={cardtitle.group}
              selectPerson = {this.selectPerson}
              sliderChange = {this.sliderChange} 
              data={data}
              rcmd = {rcmd}
              person={person}
              group={group}
              personData={personData}
          />
        </Col>
        <Col span={8}>
          <SliderCtrl 
            cardtitle={cardtitle.slider}
            sliderChange = {this.sliderChange}
            graphChange = {this.graphChange}
            rcmd = {rcmd}
          />
        </Col>
        <Col span={6}>
          <Script 
            cardtitle={cardtitle.script}
            doPrescribe = {this.doPrescribe}
          />
        </Col>
        </Row>
      </>
    );
  }
}

export default App;