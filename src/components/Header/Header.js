import React from 'react';
import headerPic from '../../asset/Group 195.png'
import './Header.css'

const Header = () => {
    return (
        <div style={{ margin: '5% 0% 0% 0%' }} className="container-fluid " >
            <div className="row ">
                <div className="col-lg-5">
                    <h2>Healthy life with</h2>
                    <h1 style={{ fontWeight: '700' }}>Nature Organic</h1>
                    <p className="text-start">Vegetables are the edible parts of a plant <br /> that is used in cooking or can be eaten now.</p>
                    <button type="button" class="btn btn-info">Explore Now</button>
                </div>
                <div className="col-lg-7 background">
                    <img src={headerPic} alt="" />
                </div>

            </div>

        </div>
    );
};

export default Header;