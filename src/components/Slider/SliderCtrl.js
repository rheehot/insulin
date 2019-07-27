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
                        <div className="slidertitle">{v}</div>
                        <EachSlider 
                            eachrcmd={rcmd[idx]}
                            sliderChange={sliderChange}
                        />
                        </>
                    ))}
                    {/* <div className="slidertitle">아침</div>
                    <EachSlider 
                        eachrcmd={rcmd[0]}

                    />
                    <div className="slidertitle">점심</div>
                    <EachSlider 
                        eachrcmd={rcmd[1]}
                    />
                    <div className="slidertitle">저녁</div>
                    <EachSlider 
                        eachrcmd={rcmd[2]}
                    />
                    <div className="slidertitle">기저</div>
                    <EachSlider 
                        eachrcmd={rcmd[3]}
                    /> */}
                </div>
            </div>
        </div>
    );
};

export default SliderCtrl;