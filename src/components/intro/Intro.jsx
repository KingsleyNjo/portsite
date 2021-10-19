import React from "react";
import "./intro.css";

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Welcome,To my Website</h2>
                    <h1 className="i-name">I'm Kingsley</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Software Developer</div>
                            <div className="i-title-item">Technical Writer</div>
                            <div className="i-title-item">MernStack Developer</div>
                            <div className="i-title-item">Content Creator</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        I develop and build websites applications using technologies 
                        such as React, Redux, NodeJS. I also have some good knowledge 
                        about DataStructures and Algorithms
                    </p>
                </div>
                
            </div>
            <div className="i-right">
                <img src="images/laptop3.jpeg" style={{ marginTop:"20px"}}alt="" className="i-img" />
            </div>
        </div>
    );
};

export default Intro;
