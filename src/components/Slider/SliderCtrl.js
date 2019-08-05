import React from 'react';
import EachSlider from './EachSlider';
import CardHead from '../CardHead'
import './SliderCtrl.scss';

const title = ['아침','점심','저녁','기저'];
const SliderCtrl = ({cardtitle, rcmd, sliderChange }) => {
    return (
        <div className={'cardWrapper'}>
            <div className={'card'}>
                <CardHead
                cardtitle={cardtitle}
                />
                <div className="slider">
                    {title.map((v,idx)=>(
                        <>
                        <EachSlider 
                            eachrcmd={rcmd[idx]}
                            sliderChange={sliderChange}
                            title={v}
                        />
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SliderCtrl;