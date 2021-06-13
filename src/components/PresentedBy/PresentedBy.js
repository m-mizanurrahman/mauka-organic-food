import React from 'react';
import branch from '../../asset/Group 39.png'
import smallLeaf from '../../asset/Group 64.png'
import greenery from '../../asset/Group 55.png'

const PresentedBy = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div>
                    <h4 className="text-center" style={{ marginTop: '8%' }} >Proudly presented by</h4>
                    <p className="m-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />
                        incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div className="row">
                    <img className="m-4  col-lg-2" src={branch} alt="" />
                    <img className="m-4 col-lg-2" src={smallLeaf} alt="" />
                    <img className="m-4 col-lg-2" src={greenery} alt="" />
                    <img className="m-4 col-lg-2" src={smallLeaf} alt="" />
                    <img className="m-4 col-lg-2" src={branch} alt="" />
                </div>
            </div>
        </div>
    );
};

export default PresentedBy;