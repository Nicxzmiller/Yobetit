import React from "react";
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import loginImg from "../../images/login.png";
import { authenticate } from "../../store/actions";

class Login extends React.PureComponent {
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
        const {dispatch} = this.props;

        const user = {
            email: this.state.email,
            password:this.state.password
        };

        dispatch(authenticate(user));
    }

    render() {
        const {error, isLoggedIn} = this.props;
        if (!error && isLoggedIn) return  <Redirect to='/profile'/>;
        return (
            <div className="base-container" ref={this.props.containerRef}>
                <div className="header">Login</div>
                <div className="content">
                    <div className="image">
                        <img src={loginImg} />
                    </div>
                    <form className="form" noValidate onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.onChange}/>
                        </div>
                        <div className="footer">
                            <button type="submit" className="btn">
                                Login
                            </button>
                        </div>
                    </form>
                    {error && <div className='error'>{error}</div>}
                </div>
            </div>
        );
    }
}

const mapState = ({user: {error, isLoading, isLoggedIn}}) => ({
    error,
    isLoading,
    isLoggedIn
});

export default connect(mapState)(Login);