import React from "react";
import { Button } from "antd";
import CardHead from "../CardHead";
import "./Script.scss";

const Script = ({ cardtitle }) => {
  return (
    <div className={"cardWrapper"}>
      <div className={"card-script"}>
        <CardHead cardtitle={cardtitle} />
        <div className="scripttxt scroll">
          김나리 환자는 신장기능이 정상 수준이지만 유병기간이 평균보다 길기
          때문에 D그룹으로 분류되었고, D그룹의 의학적 패턴을 통해 본 환자에게
          Lantus 10U와 Novorapid 6U 투여를 제안함
        </div>
        <Button
          type="primary"
          style={{
            padding: "6px 12px",
            margin: "20px",
            fontSize: "14px",
            fontWeight: "bold"
          }}
        >
          처방하기
        </Button>
      </div>
    </div>
  );
};

export default Script;
