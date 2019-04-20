import React from 'react';
import Carrousel from './Carrousel';
import TimeUntil from './TimeUntil';

const Featured = () => {
    return (
        <div style={{position:'relative'}}>

            <Carrousel/>

            <div className="artist_name font_dokdo">
                <div className="wrapper">
                    Ciencia The_DJ_Nite
                </div>
            </div>

            <TimeUntil/>

        </div>
    );
};

export default Featured;