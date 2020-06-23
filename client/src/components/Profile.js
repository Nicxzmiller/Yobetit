import React, { Component } from "react";
import jwt_decode from 'jwt-decode';

class Profile extends Component{
    constructor(){
        super();
        this.state = {
            username:'',
            email:''
            // date: new Date()
        }
    }

    componentDidMount() {
        const token = localStorage.usertoken;
        const decoded = jwt_decode(token);
        this.state({
            username: decoded.username,
            email:decoded.email
            // date: decoded.date
        })
    }

    render() {
        return(
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">PROFILE</h1>
                    </div>
                    <table className="table col-md-6 mx-auto">
                        <tbody>
                        <tr>
                            <td>Username</td>
                            <td>{this.state.username}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{this.state.email}</td>
                        </tr>
                        {/*<tr>*/}
                        {/*    <td>Date</td>*/}
                        {/*    <td>{this.state.date}</td>*/}
                        {/*</tr>*/}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}

export default Profile;