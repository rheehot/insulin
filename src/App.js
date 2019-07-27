import React, { Component } from 'react';
import { Navigation, Group, SliderCtrl, Script, Graph } from './components';
import { Row, Col } from 'antd';

class App extends Component {
  state={
      cardtitle:{
          group:'환자군 분류',
          slider:'인슐린 투여 시나리오',
          script:'처방하기',
          graph:'예측 결과'
      },
      group:0,
      person:null,
      rcmd:[10,13,15,8],
      expect: [0,0,0,0,0,0,0,0,
              0,0,0,0,0,0,0,0,
              0,0,0,0,0,0,0,0],
  }
r
  selectGroup = (e) => {
    this.setState({
      group: e.target.value,
    })
  }
  selectPerson = (e) => {
    this.setState({
      person: e.target.value,
      rcmd: this.state.rcmd.map(v => Math.floor(Math.random() * (20))),
    })
  }
  sliderChange = (e) => {
    const time=['9시','12시','18시'];
    const newexpect=this.state.expect.map((v,idx)=>(
      {
        checkAt:time[idx%3],
        sugar: Math.floor(Math.random() * (400) + 100)     
      }
    ));
    this.setState({
      expect: newexpect,
    })
  }
  graphChange = () => {

  }
  doPrescribe = () => {

  }
  searchPerson = () => {

  }

  render() {
    const { cardtitle, rcmd, person, expect }=this.state
    return (
      <>
      <Row gutter={10} justify={"space-between"} type={'flex'}>
        {/* Header */}
        <Col span={24}>
          <Navigation
              searchPerson = {this.searchPerson} 
          />
        </Col>
      </Row>
      {/* Group row */}
      <Row gutter={10}>
        <Col span={9} offset={2}>
          <Group
              cardtitle={cardtitle.group}
              selectGroup = {this.selectGroup}
              selectPerson = {this.selectPerson}
              sliderChange = {this.sliderChange} 
              rcmd = {rcmd}
          />
        </Col>
        <Col span={7}>
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
        {/* graph row */}
        <Row gutter={10}>
        <Col span={20} offset={2}>
          <Graph 
            expect={expect}
            cardtitle={cardtitle.graph}
            graphChange = {this.graphChange}
          />
        </Col>
      </Row>
      </>
    );
  }
}

export default App;