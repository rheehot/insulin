import React from "react";
import { Input, Select } from "antd";
import "./Navigation.scss";
import logo from "../../asset/logo.png";

const { Search } = Input;
const { Option } = Select;
function handleChange(value) {}
const Navigation = ({ selectPerson }) => {
  return (
    <div className={"nav"}>
      <div className={"logo"}>
        <img src={logo} alt="logo" />
      </div>
      <Search
        placeholder="환자번호"
        onSearch={selectPerson}
        style={{ width: 200 }}
      />
      <div className={"dept"}>
        <span className={"sub"}>진료과 </span>
        <Select
          defaultValue="내분비과"
          style={{ width: 120 }}
          onChange={handleChange}
        >
          <Option value="1">외과</Option>
          <Option value="2">내과</Option>
        </Select>
      </div>
      <div className={"docname"}>
        <span className={"sub"}>주치의/담당의</span>
        <Select
          defaultValue="김철수"
          style={{ width: 90 }}
          onChange={handleChange}
        >
          <Option value="1">김철수</Option>
          <Option value="2">김철수</Option>
        </Select>
        <Select
          defaultValue="박영희"
          style={{ width: 90 }}
          onChange={handleChange}
        >
          <Option value="1">박영희</Option>
          <Option value="2">박영희</Option>
        </Select>
      </div>
      <div className={"worktime"}>
        <span className={"sub"}>업무일자</span>
        <Select
          defaultValue="2018.09.19 -"
          style={{ width: 150 }}
          onChange={handleChange}
        >
          <Option value="1">2018.09.19</Option>
          <Option value="2">2018.09.19</Option>
        </Select>
      </div>
      <div className={"record"}>
        <span className={"sub"}>재원 이력</span>
        <Select
          defaultValue="2018.09.19 - 재원중"
          style={{ width: 180 }}
          onChange={handleChange}
        >
          <Option value="1"> 2018.09.19 - 재원중</Option>
          <Option value="2"> 2018.09.19 - 재원중</Option>
        </Select>
      </div>
    </div>
  );
};

export default Navigation;
