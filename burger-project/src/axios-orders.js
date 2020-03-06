import Axios from 'axios';

const instance = Axios.create({
    baseURL: 'https://burgerbuilder-f1bb0.firebaseio.com/'
});

export default instance;