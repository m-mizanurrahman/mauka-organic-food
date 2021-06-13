import React from 'react';

const Subscription = () => {
    return (
        <div className=" container-fluid text-center">
            <h3 style={{ marginTop: '200px' }}>Subscribe to Our Newsletter</h3>
            <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />
                incididunt ut labore et dolore magna aliqua.</p>
            <div className="">
                <form style={{ marginLeft: '40%' }} class="row">

                    <div class="col-auto">
                        <input type="text" class="form-control" placeholder="Enter your Email Address" />
                    </div>
                    <div class="col-auto">
                        <button type="submit" class="btn btn-info mb-3"> Subscribe</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Subscription;