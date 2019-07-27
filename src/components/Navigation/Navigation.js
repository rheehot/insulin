import React from 'react';
import { Input } from 'antd';
import "./Navigation.scss";
import logo from '../../asset/logo.png'; 
const { Search } = Input;
const Navigation = () => {
    return (
        <div className={"nav"}>
            <div className={"logo"}><img src={logo} alt="logo"/></div>
            <Search
                placeholder="환자이름"
                onSearch={value => console.log(value)}
                style={{ width: 200 }}
            />
            <div className={"dept"}>진료과: 내분비과</div>
            <div className={"docname"}>주치의/담당의: 000/000</div>
            <div className={"worktime"}>업무일자 2019.02.01 - 2019.05.05</div>
            <div className={"record"}>재원 이력: 2019.01.01 - 재원 중</div>
        </div>
    );
};

export default Navigation;