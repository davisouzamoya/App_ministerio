import axios from 'axios';
const apiKey = 'd5fdcf1e79d66ef93411d9673bec9dea'

const base = axios.create({
    baseURL: 'https://api.vagalume.com.br/',
    params:{
            apiKey:'d5fdcf1e79d66ef93411d9673bec9dea'
          } 
});

const secondURL = axios.create({
  baseURL: 'https://www.vagalume.com.br/',
  params:{
          apiKey:'d5fdcf1e79d66ef93411d9673bec9dea'
        } 
});

const seachVideoApi = axios.create({
  baseURL: 'https://www.googleapis.com/',
  params:{
          part:'snippet',
          key:'AIzaSyAsiWCNK0DSAZeCnqM996uJwYwblk7Ehgo',
        } 
});

export {
  base,
  secondURL,
  seachVideoApi
};