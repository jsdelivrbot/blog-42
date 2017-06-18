import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';
export const CREATE_POST = 'create_post';
export const DELETE_POST = 'delete_post';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api/posts/';
const API_KEY = 'comblogreduxappheroku';

export function fetchPosts() {
  const url = `${ROOT_URL}?key=${API_KEY}`;
  const response = axios.get(url);

  return {
    type: FETCH_POSTS,
    payload: response
  };
}

export function fetchPost(id) {
  const url = `${ROOT_URL}${id}?key=${API_KEY}`;
  const response = axios.get(url);

  return {
    type: FETCH_POST,
    payload: response
  };
}

export function deletePost(id, callback) {
  const url = `${ROOT_URL}${id}?key=${API_KEY}`;
  const response = axios.delete(url, callback)
  .then(() => callback());
}

export function createPost(data, callback) {
  const url = `${ROOT_URL}?key=${API_KEY}`;
  const response = axios.post(url, data, callback)
  .then(() => callback());
}
