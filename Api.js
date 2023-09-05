import axios from 'axios';
import { ErrorMessage } from 'formik';


let apiURL = "http://localhost:5073/";
let axios_instance = axios.create({
    baseURL: apiURL,
    timeout: 65000,
  });
  

class Api {
  invoke = (path, method, callback, data) => {
    let config = {
        method: method,
        url: path,
    }
    if (data !== undefined) {
        config["data"] = data;
    }
    else {
        config["headers"] = { 'Content-Type': 'application/json' }
    }
    axios_instance.request(config)
        .then(res => {
            if (res.data.statusCode === 401) {
                window.location.pathname = "";
                sessionStorage.clear();
                ErrorMessage.loading("Session expired. Redirecting you to login page.", 4).then(() => window.location.reload());
            }
            else
            callback(res.data,res.status, true);
        })
        .catch(err => {
            if (err.response && err.response.status === 403 && path !== 'login') {
                ErrorMessage.destroy();
                ErrorMessage.loading("Session expired. Redirecting you to login page.", 4).then(() => window.location.reload());
            } else {
                callback(null,err&&err.response&&err.response.status, false);
            }
        })
}
}

export default Api;
