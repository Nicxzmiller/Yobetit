import React from "react";
import "./App.scss";
import { Login, Register } from "./components/index";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Profile from './components/Profile';
// import {render} from "react-dom";


class App extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         isLogginActive: true
    //     };
    // }

    // componentDidMount() {
    //     //Add .right by default
    //     this.rightSide.classList.add("right");
    // }
    //
    // changeState() {
    //     const { isLogginActive } = this.state;
    //
    //     if (isLogginActive) {
    //         this.rightSide.classList.remove("right");
    //         this.rightSide.classList.add("left");
    //     } else {
    //         this.rightSide.classList.remove("left");
    //         this.rightSide.classList.add("right");
    //     }
    //     this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
    // }

    // render() {
    //     const { isLogginActive } = this.state;
    //     const current = isLogginActive ? "Register" : "Login";
    //     const currentActive = isLogginActive ? "login" : "register";
    //     return (
    //         <div className="App">
    //             <div className="login">
    //                 <div className="container" ref={ref => (this.container = ref)}>
    //                     {isLogginActive && (
    //                         <Login containerRef={ref => (this.current = ref)} />
    //                     )}
    //                     {!isLogginActive && (
    //                         <Register containerRef={ref => (this.current = ref)} />
    //                     )}
    //                 </div>
    //                 <RightSide
    //                     current={current}
    //                     currentActive={currentActive}
    //                     containerRef={ref => (this.rightSide = ref)}
    //                     onClick={this.changeState.bind(this)}
    //                 />
    //             </div>
    //         </div>
    //     );
    // }


    render(){
        return(
            <Router>
                <div className="App">
                    <Navbar />
                    <Route exact path="/" component={LandingPage}/>
                    <div className="container">
                        <Route  path="/register" component={Register}/>
                        <Route  path="/login" component={Login}/>
                        <Route  path="/profile" component={Profile}/>
                    </div>
                </div>
            </Router>
        )
    }

}

// const RightSide = props => {
//     return (
//         <div className="App">
//             <div className="right-side" ref={props.containerRef} onClick={props.onClick}>
//                 <div className="inner-container">
//                     <div className="text">{props.current}</div>
//                 </div>
//             </div>
//         </div>
//     );
// };

export default App;
