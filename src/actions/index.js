import axios from 'axios';
import my_posts from '../data/posts';
import comments from '../data/comments';
export const FETCH_POSTS = 'FETCH_POSTS';
export const GET_POSTS = 'GET_POSTS';
export const GET_COMMENTS = 'GET_COMMENTS';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=PAPERCLIP1234';

export function fetchPosts() {

  const posts = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: posts
  };
}

export function getPosts() {
  return {
    type: GET_POSTS,
    payload: my_posts
  }
}

export function getComments() {
  return {
    type: GET_COMMENTS,
    payload: comments
  }
}
