import axios from 'axios';

class Request {
  constructor(base = {}) {
    this.instance = axios.create({
      ...base,
      baseURL: base.baseURL,
      headers: base.headers,
    });
  }

  async request({
    method, path, data, config,
  }) {
    try {
      const result = await this.instance.request({
        ...config,
        method,
        data,
        url: path,
      });

      if (result && result.data) {
        return result.data;
      }
    } catch (err) {
      throw new Error(`Request error: ${err.message}`);
    }

    return null;
  }

  async get({ path, config = {} }) {
    return this.request({ method: 'get', path, config });
  }

  async post({ path, data, config = {} }) {
    return this.request({
      method: 'post', path, data, config,
    });
  }

  async put({ path, data, config = {} }) {
    return this.request({
      method: 'put', path, data, config,
    });
  }

  async delete({ path, config = {} }) {
    return this.request({
      method: 'delete', path, config,
    });
  }
}

export default Request;
