import React, { Component } from 'react';
import { Navigation, Group, SliderCtrl, Script, Graph } from './components';
import { Row, Col } from 'antd';
import {data, graphdata, todayKr, getRandomSugar, fooddata } from './utils';

function getRandomInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
const patientsData= data.map((v,idx)=>({...v,id:idx+1,room:`${getRandomInt(1,12)}-${getRandomInt(100,500)}`}));
const sample = [132,317,155,178,97,182,173,282,79,180,457,187,102,321,172,205,102,165,171,435,150,200,168,189,162,189];
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
      patients: patientsData,
      rcmd:[0,0,0,0],
      graphdata:graphdata,
  }

  selectPerson = async (value) => {
    const find = this.state.patients.find(v => v.id === +value);
    await this.setState({
      person: value,
      group: find.group,
      personData:find,
      rcmd: this.state.rcmd.map(v => Math.floor(Math.random() * (20))),
    });
    this.personChange();
  }

  personChange = () => {
    let newdata;
    if(+this.state.person === 1 ){
      newdata = this.state.graphdata.map((d, idx)=>{
        d.sugar=sample[idx];
        return d;
      })
    }else{
      newdata = this.state.graphdata.map(d=>{
        const range = d.status === '공복' ? [50,200]:[100,500];
        d.sugar=getRandomSugar(...range);
        return d;
      })
    }
     this.setState({
       graphdata: newdata
     })
  }

  sliderChange = () => {
    const newgarphdata=this.state.graphdata.map(d=>{
      const range = d.status === '공복' ? [50,200]:[100,500];
      if(d.date > + todayKr){
        d.sugar=getRandomSugar(...range);
      }
      return d;
    })
    this.setState({
      graphdata:newgarphdata,
    })
  }

  render() {
    const { cardtitle, rcmd, person, graphdata, patients, group, personData }=this.state
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
              data={patients}
              person={person}
          />
        </Col>
      </Row>
      <Row gutter={20}>
        <Col span={20} offset={2}>
          <Graph 
            graphdata={graphdata}
            cardtitle={cardtitle.graph}
            graphChange = {this.graphChange}
            personData={personData}
            person={person}
          />
        </Col>
      </Row>
      {/* Group row */}
      <Row gutter={20}>
        <Col span={8} offset={2}>
          <Group
              cardtitle={cardtitle.group}
              selectPerson = {this.selectPerson}
              sliderChange = {this.sliderChange} 
              data={patients}
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
        <Col span={4}>
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