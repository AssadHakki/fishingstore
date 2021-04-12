import React from 'react';
import Shopping from './../../assets/homepage_bg.jpeg';
import './styles.scss';
const Directory = props => {
    return (
        <div className="directory">
            <div className="wrap">
                <div className="item"              
                    style={{ backgroundImage: `url(${Shopping})`}}  >      
                      <a>Join the store</a>    
                </div>  
            </div>
        </div>

    );
};

export default Directory;