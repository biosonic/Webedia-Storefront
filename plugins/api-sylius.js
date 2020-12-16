import axios, { AxiosRequestConfig } from 'axios';
import https from 'https'
import { ls } from './ls';
import {config} from '~/config'

const authorisation = () => {
  const token = ls.get('user--token');
  if (token) {
    return {'Authorization': "Bearer " + token,}
  }
  else {
    return {};
  }
}

const apiBase = axios.create({
  baseURL: config.sylius.api,
  // headers: {'Cookie': 'boban=stojan'},
  withCredentials: true,
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  })
});

apiBase.interceptors.response.use(
  function (response) {
    return response;
  }, 
  async function (error) {
    if (process.client && error.response.status == 401) {
      ls.set('user--token', false)
    }
    return Promise.reject(error);
  }
);

const apiSylius = {

  async get(url, config = {}) {
    config.headers = {
      'Content-Type': 'application/json;charset=UTF-8',
      ...authorisation(),
    }
    const response = await apiBase.get(url, config);
    return response.data;
  },

  async post(url, data = {}, config = {}) {
    config.headers = {
      'Content-Type': 'application/json;charset=UTF-8',
      ...authorisation(),
    }
    const response = await apiBase.post(url, data, config);
    return response.data;
  },

  async put(url, data = {}, config = {}) {
    config.headers = {
      'Content-Type': 'application/json;charset=UTF-8',
      ...authorisation(),
    }
    const response = await apiBase.put(url, data, config);
    return response.data;
  },
  
  async patch(url, data = {}, config = {}) {
    config.headers = {
      'Content-Type': 'application/json;charset=UTF-8',
      ...authorisation(),
    }
    const response = await apiBase.patch(url, data, config);
    return response.data;
  },

  async delete(url, config = {}) {
    config.headers = {
      'Content-Type': 'application/json;charset=UTF-8',
      ...authorisation(),
    }
    const response = await apiBase.delete(url, config);
    return response.data;
  },

};

export { apiSylius };
