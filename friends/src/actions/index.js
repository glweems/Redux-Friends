import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const GET_FRIENDS_START = 'GET_FRIENDS_START';
export const GET_FRIENDS_SUCCESS = 'GET_FRIENDS_SUCESS';
export const GET_FRIENDS_FAILURE = 'GET_FRIENDS_FAILURE';
export const ADD_FRIENDS_START = 'ADD_FRIENDS_START';
export const ADD_FRIENDS_SUCCESS = 'ADD_FRIENDS_SUCCESS';

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post('http://localhost:5000/api/login', creds)
    .then(res => {
      localStorage.setItem('token', res.data.payload);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      getFriends(dispatch);
    })
    .catch(err => {
      dispatch({
        type: LOGIN_FAILURE,
        payload: 'You have an error logging in'
      });
    });
};

// //Axios get request to return a list of friends
export const getFriends = dispatch => {
  dispatch({ type: GET_FRIENDS_START });
  return axios
    .get('http://localhost:5000/api/friends', {
      headers: { authorization: localStorage.getItem('token') }
    })
    .then(res => {
      dispatch({
        type: GET_FRIENDS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_FRIENDS_FAILURE,
        payload: 'You have an error getting friends'
      })
    );
};

//Axios post request to add friend to FriendsList

export const addFriend = (dispatch, friend) => {
  dispatch({ type: ADD_FRIENDS_START });
  return axios
    .post('http://localhost:5000/api/friends', friend, {
      headers: { authorization: localStorage.getItem('token') }
    })
    .then(response => console.log('Resolved', response))
    .catch(err => console.log('Rejected', err));
};
