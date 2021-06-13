import React from 'react';
import leaf from '../../asset/Group 114.png'
import eucalyptux from '../../asset/eucalyptus-essential-oil-soap-green-background-zero-waste-natural-organic-bathroom-tools_80743-2766.png'
import containers from '../../asset/containers-with-products-table-with-copy-space_23-2148366089.png'
import plot from '../../asset/potted-plant-near-cosmetics-bottles-jars_23-2147787938.png'
const Blog = () => {
    return (
        <div style={{ marginTop: '150px' }} className="container-fluid">
            <div>
                <img class="rounded mx-auto d-block" src={leaf} alt="pata" />
                <h4 style={{ textAlign: 'center' }} className="m-4">Read Our Blog</h4>
                <p style={{ marginBottom: '5%' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />
                    incididunt ut labore et dolore magna aliqua.</p>


            </div>
            <div className=" row">
                <div className="col-lg-4">
                    <img class="rounded mx-auto d-block" src={eucalyptux} alt="" />
                    <div style={{ padding: '5%', marginLeft: '20%', marginRight: '20%' }}>
                        <h5 className="text-center">Blog Post One</h5>
                        <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed
                            do eiusmod.</p>
                        <p>Read More</p>
                        <p>---------</p>

                    </div>

                </div>
                <div className="col-lg-4">
                    <img class="rounded mx-auto d-block" src={containers} alt="" />
                    <div style={{ padding: '5%', marginLeft: '20%', marginRight: '20%' }}>
                        <h5 className="text-center">Blog Post One</h5>
                        <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed
                            do eiusmod.</p>
                        <p>Read More</p>
                        <p>---------</p>


                    </div>
                </div>
                <div className="col-lg-4">
                    <img class="rounded mx-auto d-block" src={plot} alt="" />
                    <div style={{ padding: '5%', marginLeft: '20%', marginRight: '20%' }}>
                        <h5 className="text-center">Blog Post One</h5>
                        <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed
                            do eiusmod.</p>
                        <p>Read More</p>
                        <p>---------</p>
                    </div>

                </div>
            </div >
        </div >
    );
};

export default Blog;