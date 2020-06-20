import React from "react";
import "./About.css";

function About() {
    return(
        <div className="about">
            <br/>
            <br/>
            <a href="https://www.buymeacoffee.com/nicxzmiller" target="">
                <img src="https://cdn.buymeacoffee.com/buttons/arial-black.png" alt="Buy Me A Coffee" style={{height: "40px", width: "180px", borderRadius:"20px"}} />
            </a>

            <br/><br/>
            <div className="dev">
                <h4>Developed by: </h4>
                <div style={{fontSize: "20px"}}>
                    This site was developed by Nicholas Markus
                </div>
                <br/>
                <h4>Connect with me</h4>
                <div>
                    You can connect with me via {" "}
                    <a href="https://www.linkedin.com/in/nicholas-chun-markus-0b0136a2/" target="">
                        linkedIn
                    </a>
                </div>
                <br/>
            </div>
        </div>
    );
}

export default About;