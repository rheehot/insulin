import React from 'react';
import "./CardHead.scss";

const CardHead = ({cardtitle}) => {
    return (
        <div className={'cardhead'}>
            <div className={'title'}>{cardtitle}</div>
        </div>
    );
};

export default CardHead;