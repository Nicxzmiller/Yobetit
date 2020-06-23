import React from "react";
import loginImg from "../../images/login.png";
import { login } from "../UserFunctions";

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState( {[e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault();

        const user = {
            email: this.state.email,
            password:this.state.password
        };

        login(user).then(res=>{
            if(res){
                this.props.history.push(`/profile`);
            }
        })
    }

    render() {
        return (
            <div className="base-container" ref={this.props.containerRef}>
                <div className="header">Login</div>
                <div className="content">
                    <div className="image">
                        <img src={loginImg} />
                    </div>
                    <div className="form" noValidate onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.onChange}/>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button type="submit" className="btn">
                        Login
                    </button>
                </div>
            </div>
        );
    }
}

export default Login;