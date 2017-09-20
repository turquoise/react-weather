import axios from 'axios';
import my_posts from '../data/posts';
import comments from '../data/comments';

// Posts
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';

// Reduxstagram posts
export const GET_POSTS = 'GET_POSTS';
export const GET_POST = 'GET_POST';
export const GET_COMMENTS = 'GET_COMMENTS';

// Book example
export const SELECT_BOOK = 'SELECT_BOOK';

// Weather
export const FETCH_WEATHER = 'FETCH_WEATHER';

// Posts
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=PAPERCLIP1234';

// Weather
const WEATHER_API_KEY = '46f0d79940ce443ee80d2a76da8bcdb8';
const WEATHER_ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`;

// Weather
export function fetchWeather(city) {
  const url = `${WEATHER_ROOT_URL}&q=${city},GB`;
  const request = axios.get(url);
  
  console.log('request ', request);
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}

// Books
export function selectBook(book) {
  return {
    type: SELECT_BOOK,
    payload: book
  }
}

// Posts
export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(values, callback) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then( () => callback() );
  return {
    type: CREATE_POST,
    payload: request
  }
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
  return {
    type: FETCH_POST,
    payload: request
  }
}

export function deletePost(id, callback) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then( () => callback());
  return {
    type: DELETE_POST,
    payload: id
  }
}

// Wes Bos Reduxstagram
export function getPosts() {
  return {
    type: GET_POSTS,
    payload: my_posts
  }
}

export function getPost(id) {
  return {
    type: GET_POST,
    payload: id
  }
}

export function getComments() {
  return {
    type: GET_COMMENTS,
    payload: comments
  }
}

// // increment likes
// export function increment(index) {
//   return {
//     type: 'INCREMENT_LIKES',
//     index: index
//   }
// }
//
// // add comments
// export function addComment(postId, author, comment) {
//   return {
//     type: 'ADD_COMMENT',
//     postId: postId,
//     author: author,
//     comment: comment
//   }
// }
//
// // remove comments
// export function removeComment(postId, commentId) {
//   return {
//     type: 'REMOVE',
//     commentId: commentId,
//     postId: postId
//   }
// }
