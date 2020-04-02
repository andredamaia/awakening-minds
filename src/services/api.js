import axios from 'axios';

const api = axios.create({
    baseURL: 'https://andressa-awakeningminds.com',
});

export default api;