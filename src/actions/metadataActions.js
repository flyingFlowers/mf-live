/* global API_HOST */
import fetch from 'isomorphic-fetch';
import config from '../../config';

const API_HOST = `${config.ENDHOST}`;
const url = '/api/metadata';

const REQUEST = 'metadata/REQUEST';
const OK = 'metadata/OK';
const ERROR = 'metadata/ERROR';

export const metadataActions = {
  REQUEST,
  OK,
  ERROR,
};

const getMetadataRequest = () => ({
  type: REQUEST,
});

const getMetadataOk = payload => ({
  type: OK,
  payload,
});

const getMetadataError = payload => ({
  type: ERROR,
  payload,
});

export const getMetadata = (host = API_HOST) => (dispatch) => {
  dispatch(getMetadataRequest());
  return fetch(`${host}${url}`, { credentials: 'include' })
  .then(response => response.json())
  .then(json => dispatch(getMetadataOk(json)))
  .catch((error) => {
    dispatch(getMetadataError(error));
  });
};
