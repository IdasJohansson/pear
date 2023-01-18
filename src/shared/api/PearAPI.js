import axios from 'axios'; 

const PearAPI = axios.create({
    baseURL: "https://localhost:7176/api/"
}); 

export default PearAPI; 