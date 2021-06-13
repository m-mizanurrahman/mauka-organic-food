import React from 'react'
import comma from '../../asset/Group 86.png'
import women from '../../asset/woman-in-brown-jacket-and-black-shirt-3484683.png'
import Blog from '../Blog/Blog'
import Subscription from '../Subscription/Subscription'
import './Review.css'



export default function Review() {
    return (
        <div className=" review fluid-container">
            <div className="">
                <img class="rounded mx-auto d-block" style={{ width: '60px', margin: '2%' }} src={comma} alt="" />
                <br />
                <img class="mx-auto d-block" style={{ height: '97.6px', width: '97.6px', borderRadius: '50%' }} src={women} alt="" />

                <h4 className="mt-3 text-center" >Jane Doe</h4>
                <div class="rating"> <input type="radio" name="rating" value="5" id="5" /><label for="5">☆</label> <input type="radio" name="rating" value="4" id="4" /><label for="4">☆</label> <input type="radio" name="rating" value="3" id="3" /><label for="3">☆</label> <input type="radio" name="rating" value="2" id="2" /><label for="2">☆</label> <input type="radio" name="rating" value="1" id="1" /><label for="1">☆</label>
                </div>
                <p className="m-3">Thank you for all the amazing produce and products you deliver each week… <br /> <br />
                    you make my life so easy an bring goodness into our family eating. <br /> <br />
                    I’ve been roasting a lot of brussel sprouts and</p>

            </div>
            <Subscription />
            <Blog />
        </div>
    )
}
