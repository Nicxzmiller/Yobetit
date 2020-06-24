import React, { PureComponent } from "react";
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux'

class Profile extends PureComponent{

    render() {
        const {isLoggedIn} = this.props;
        if (!isLoggedIn) return <Redirect to='/login' />;
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
                            <td>{this.props.username}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{this.props.email}</td>
                        </tr>
                        {/*<tr>*/}
                        {/*    <td>Date</td>*/}
                        {/*    <td>{this.state.date}</td>*/}
                        {/*</tr>*/}
                        </tbody>
                    </table>
                </div>
                <div>
                    <h1>SLOT MACHINE</h1>

                </div>
            </div>
        )
    }

}

const mapState = ({user: {username, email, isLoggedIn}}) => ({
    username,
    email,
    isLoggedIn
});

export default connect(mapState)(Profile);