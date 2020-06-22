import React from "react";
import loginImg from "../../images/login.png";
import "./Login.scss";


export class Login extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className="base-container">
                <div className="header">Login</div>
                <div className="content">
                    <div className="image">
                        <img src={loginImg} alt="login"/>
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="email">Username</label>
                            <input type="email" name="email" placeholder="Email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="Password"/>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button type="button" className="btn">Login</button>
                </div>
            </div>
        )
    }
}