import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!
const initialState = {
  currentVideo: null,
  videoList: exampleVideoData
}

var configureStore = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
);

export default configureStore;
