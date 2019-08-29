import React from 'react';
import { Button } from 'antd';
import CardHead from '../CardHead'
import './Script.scss';

const Script = ({cardtitle}) => {
    return (
        <div className={'cardWrapper'}>
            <div className={'card'}>
                <CardHead
                cardtitle={cardtitle}
                />
                <div className="scripttxt scroll">
                    {/* <div className='txt'> */}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent maximus suscipit neque, eget placerat turpis. Aliquam ac pharetra purus. Sed condimentum felis vel ullamcorper suscipit. Donec tempus arcu lorem. Sed cursus tellus tellus, et congue dui sagittis et. Cras tincidunt semper nulla vel rutrum. Donec condimentum risus non ante egestas, in laoreet odio sodales. Curabitur quam arcu, malesuada ac dignissim vitae, fermentum id diam. Donec finibus urna id justo sollicitudin, nec lobortis nibh mollis. Fusce sollicitudin sed ante a aliquam. Duis sagittis, leo in consectetur bibendum, nulla purus dapibus enim, vel elementum tellus est quis erat.
                    {/* </div> */}
                </div>
                <Button 
                    type="primary" 
                    style={{padding:'6px 12px',margin:'20px',fontSize:'14px',fontWeight:'bold'}}
                >
                    처방하기
                </Button>
            </div>
        </div>
    );
};

export default Script;