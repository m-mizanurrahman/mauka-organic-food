import React from 'react';
import food from '../../asset/Group 207.png'
import Food from '../../asset/Group 205.png'
import leaf from '../../asset/Group 114.png'
const OrganicFood = () => {
    return (
        <div className="container-fluid">
            <div>
                <img class="rounded mx-auto d-block" src={leaf} alt="pata" />
                <h4 className="m-4 text-center">Welcome to Nature</h4>
                <p style={{ marginBottom: '5%' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />
                    incididunt ut labore et dolore magna aliqua.</p>

            </div>
            <div className=" row">
                <img className="mb-2 col-lg-3" src={food} alt="" />
                <img className="mb-2 col-lg-3" src={Food} alt="" />
                <img className="mb-2 col-lg-3" src={food} alt="" />
                <img className="mb-2 col-lg-3" src={food} alt="" />

            </div>
        </div>
    );
};

export default OrganicFood;