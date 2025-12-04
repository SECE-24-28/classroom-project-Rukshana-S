import React from "react";
import { GetInTouchStyle } from "./getintouch-style";

const GetInTouchComponent = () => {
    return (
        <GetInTouchStyle>
            <div className="getintouch-outer-container">
                <div className="getintouch-inner-container">

                    {/* LEFT TEXT SECTION */}
                    <div className="getintouch-left-container">
                        <h1>GET IN TOUCH</h1>
                        <p>
                            Have questions or feedback? We're here to help.<br />
                            Send us a message and we'll respond soon.
                        </p>
                        <button>Contact Us</button>
                    </div>

                    {/* RIGHT IMAGE + CIRCLES */}
                    <div className="getintouch-right-container">
                        <div className="circle-big"></div>
                        <div className="circle-small"></div>

                        <img
                            src="https://aptitudeguruhem.com/static/media/get-in-touch.8c521c235d4bd711343c.jpg"
                            alt="getintouch"
                            className="getintouch-image"
                        />
                    </div>

                </div>
            </div>
        </GetInTouchStyle>
    );
};

export default GetInTouchComponent;
