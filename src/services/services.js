import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/api',
});


export const getProducts = async (url) => {
    let res, err;
    try {
        const response = await instance.get(url);
        res = response.data;
    } catch (error) {
        err = error.message;
    }
    return { res, err };
}
