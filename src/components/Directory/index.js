import React from 'react';
import Shopping from './../../assets/homepage_bg.jpeg';
import './styles.scss';
const Directory = props => {
    return (
        <div className="directory">
            <div className="wrap">
                <div className="item"              
                    style={{ backgroundImage: `url(${Shopping})`}}  >      
                    <div className="centre">
                        <h1>Welcome to Fish'ON</h1>
                        <h3>For All Your Fishing Gear, Supplies And Equipments</h3>
                       
                      <a>Join the store</a>    
                    </div>                  
                </div>  
            </div>
        </div>

    );
};

export default Directory;