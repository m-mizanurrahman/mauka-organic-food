import React from 'react';
import logo from '../../asset/Group 228.png'
import './Navbar.css'


const Navbar = () => {
    return (
        <div >
            <nav class=" navbar-text navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <div className="d-flex ">
                        <a class="navbar-brand" href="#">
                            <img src={logo} alt="" width="68" height="68" class="d-inline-block align-text-top" />
                        </a>
                        <h3 className="organic">organic</h3>
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div class="navbar-nav ">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                            <a class="nav-link" href="#">Products</a>
                            <a class="nav-link" href="#">Blog</a>
                            <a class="nav-link" href="#">About Us</a>
                            <a class="nav-link" href="#">Contact</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    );
};

export default Navbar;