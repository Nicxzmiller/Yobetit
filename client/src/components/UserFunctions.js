import axios from "axios";

export const register = newUser => {
    return axios.post('users/register', {
        email: newUser.email,
        username: newUser.username,
        password: newUser.password
    }).then(res => {
        console.log("User Registered");
    })
};

export const login = user =>{
    return axios.post('users/login', {
        email: user.email,
        password: user.password
    }).then(res => {
        localStorage.setItem('userToken', res.data);
        return res.data;
    })
        .catch(err=>{
            console.log(err)
        })
};