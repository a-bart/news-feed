import config from './config';
import Request from './utils/request';

const newsApiRequest = new Request({
  baseURL: config.api.url,
  headers: {
    'X-Api-Key': config.api.key,
  },
});

export const getTopHeadlines = async (params) => newsApiRequest.get({ path: '/top-headlines', config: { params } });

export const getEverything = async (params) => newsApiRequest.get({ path: '/everything', config: { params } });

export const getSources = async (params) => newsApiRequest.get({ path: '/sources', config: { params } });
