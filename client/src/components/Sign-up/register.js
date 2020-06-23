import React from "react";
import loginImg from "../../images/login.png";
import { register } from "../UserFunctions";

export class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
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
            username:this.state.username,
            email: this.state.email,
            password:this.state.password
        };

        register(user).then(res=>{
            if(res){
                this.props.history.push(`/login`);
            }
        })
    }

    render() {
        return (
            <div className="base-container" ref={this.props.containerRef}>
                <div className="header">Register</div>
                <div className="content">
                    <div className="image">
                        <img src={loginImg} />
                    </div>
                    <div className="form" noValidate onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="text" name="password" placeholder="Password" value={this.state.password} onChange={this.onChange}/>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button type="submit" className="btn">
                        Register
                    </button>
                </div>
            </div>
        );
    }
}

export default Register;
