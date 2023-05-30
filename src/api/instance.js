import axios from "axios";
import authHeader from "../redux/services/auth-header";

const user = JSON.parse(localStorage.getItem('user'));
const instance = axios.create({
    baseURL: 'http://localhost:3001/',
    headers: authHeader()
});
export default instance;