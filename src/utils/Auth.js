import axios from "axios";
import qs from "querystring";

export default class AuthService {
    constructor(domain) {
        this.domain = domain || process.env.API_BASE_URL;
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    login(username, password) {
        return axios({
            method: "POST",
            url: "/auth/login",
            baseURL: this.domain,
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: qs.stringify({username, password}),
        })
        .then((response)=> {
            this.setUser(response.data)
        })
    }

    signup({username, password, firstname, lastname, email}) {
        return axios({
            method: "POST",
            url: "/auth/signup",
            baseURL: this.domain,
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: qs.stringify({username, firstname, lastname, password, email}),
        })
        .then((response)=> {
            this.setUser(response.data);
        })
    }

    loggedIn(){
        const user = this.getUser()
        return !!user; 
    }

    setUser(user){
        localStorage.setItem('user', JSON.stringify(user));
    }

    getUser(){
        return JSON.parse(localStorage.getItem('user'));
    }

    logout(){
       return axios({
            baseURL: this.domain,
            url: "/auth/logout"
        })
        .then((res)=> {
            localStorage.removeItem('user');
        })
    }    
}