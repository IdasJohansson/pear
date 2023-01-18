import axios from 'axios'; 

const PearAPI = axios.create({
    baseURL: "https://localhost:7176/api/"
}); 

export default PearAPI; 

//The axios.create() method is used to create an instance of the axios library with a custom configuration, in this case, the baseURL.
