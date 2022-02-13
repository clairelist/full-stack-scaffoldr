import axios from 'axios';
//something like 'import login credentials from login component', for token auth, below (no need for localStorage :-) )

const axiosWithAuth = ()=> {
    const token = localStorage.getItem('token');

    return axios.create({ //creating a base URL -- TODO:: CHANGE THIS SO THE AUTHORIZATION IS USER PROVIDED ! THIS IS BEING POSTED AND OUR SERVER IS HANDLING HTE ACTUAL TOKEN !
        headers: {
            authorization: token
        },
        baseURL: "http://localhost:9000/api"
    });
}

export default axiosWithAuth;