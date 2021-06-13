import React from 'react';
import footerLogo from '../../asset/Group 225.png'
import './Footer.css'
import facebook from '../../asset/Group 99.png'
import instagram from '../../asset/Group 105.png'
import linkedIn from '../../asset/Group 100.png'
import tuitar from '../../asset/tutar.png'

const Footer = () => {
    return (
        <div style={{ marginTop: '100px' }} className="container-fluid footer text-white text-start">
            <div className="row ">
                <div style={{ marginTop: '200px' }} className="col-lg-3">
                    <img src={footerLogo} alt="" />
                    <p className="text-start"  >Lorem ipsum dolor sit amet, <br /> consectetur adipiscing
                        elit, <br /> sed do eiusmod tempor </p>
                    <p className="text-start">-----------</p>
                    <p className="text-start">© Copyright 2020 Nature</p>

                </div>
                <div style={{ marginTop: '200px' }} className="col-lg-3 text-start">
                    <p className="text-start" >Informations</p>
                    <p className="text-start">About Us</p>
                    <p className="text-start">Products</p>
                    <p className="text-start">Contact Us</p>
                    <p className="text-start">Terms of Services</p>
                </div>
                <div style={{ marginTop: '200px' }} className="col-lg-3">

                    <p className="text-start">About Us</p>
                    <p className="text-start">Products</p>
                </div>
                <div style={{ marginTop: '200px' }} className="text-start  col-lg-3">
                    <p className="text-start">Follow Us</p>
                    <img style={{ width: '12%' }} src={facebook} alt="" />
                    <img style={{ width: '12%' }} src={instagram} alt="" />
                    <img style={{ width: '12%' }} src={linkedIn} alt="" />
                    <img style={{ width: '15%' }} src={tuitar} alt="" />

                </div>
            </div>

        </div>
    );
};

export default Footer;