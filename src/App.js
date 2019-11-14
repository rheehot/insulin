import React, { Component } from "react";
import { Navigation, Group, SliderCtrl, Script, Graph } from "./components";
import { Row, Col } from "antd";
import { todayKr, getRandomVal } from "./utils";
import { groupData, graphData, sample1 } from "./asset";

const patientsData = groupData.map((v, idx) => ({
  ...v,
  id: idx + 1,
  room: `${getRandomVal(1, 12)}-${getRandomVal(100, 500)}`
}));

class App extends Component {
  state = {
    cardtitle: {
      group: "환자군 분류",
      slider: "인슐린 투여 시나리오",
      script: "처방하기",
      graph: ""
    },
    person: null,
    personData: {
      group: 0,
      x: 0,
      y: 0,
      name: "이름",
      age: 0,
      height: 0,
      weight: 0,
      bmi: 0,
      fsugar: 0,
      sugar: 0
    },
    group: "all",
    patients: patientsData,
    rcmd: [0, 0, 0, 0],
    graphData: graphData
  };

  selectPerson = async value => {
    const find = this.state.patients.find(v => v.id === +value);
    await this.setState({
      person: value,
      group: find.group,
      personData: find,
      rcmd: this.state.rcmd.map(v => Math.floor(Math.random() * 20))
    });
    this.personChange();
  };

  personChange = () => {
    let newData;

    //1번환자 샘플케이스
    if (+this.state.person === 1) {
      newData = this.state.graphData.map((d, idx) => {
        d.sugar = sample1[idx];
        return d;
      });
    } else {
      //그외 랜덤 데이터 삽입
      newData = this.state.graphData.map(d => {
        const range = d.status === "공복" ? [50, 200] : [100, 500];
        d.sugar = getRandomVal(...range);
        return d;
      });
    }
    this.setState({
      graphData: newData
    });
  };

  sliderChange = () => {
    const newGarphData = this.state.graphData.map(d => {
      const range = d.status === "공복" ? [50, 200] : [100, 500];
      if (d.date > +todayKr) {
        d.sugar = getRandomVal(...range);
      }
      return d;
    });
    this.setState({
      graphData: newGarphData
    });
  };

  componentDidMount(){
    this.selectPerson(1);
  }

  render() {
    const {
      cardtitle,
      rcmd,
      person,
      graphData,
      patients,
      group,
      personData
    } = this.state;
    return (
      <>
        <Row>
          <Col span={24}>
            <div className="header"></div>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Navigation
              selectPerson={this.selectPerson}
              data={patients}
              person={person}
            />
          </Col>
        </Row>
        <Row gutter={20}>
          <Col span={20} offset={2}>
            <Graph
              graphData={graphData}
              cardtitle={cardtitle.graph}
              graphChange={this.graphChange}
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
              selectPerson={this.selectPerson}
              sliderChange={this.sliderChange}
              data={patients}
              rcmd={rcmd}
              person={person}
              group={group}
              personData={personData}
            />
          </Col>
          <Col span={8}>
            <SliderCtrl
              cardtitle={cardtitle.slider}
              sliderChange={this.sliderChange}
              graphChange={this.graphChange}
              rcmd={rcmd}
            />
          </Col>
          <Col span={4}>
            <Script
              cardtitle={cardtitle.script}
              doPrescribe={this.doPrescribe}
            />
          </Col>
        </Row>
      </>
    );
  }
}

export default App;
