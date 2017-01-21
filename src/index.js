import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import createSagaMiddleware from 'redux-saga';

export function* helloSaga() {
  console.log('Hello Sagas!')
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer, 
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(helloSaga)

//const action = type => store.dispatch({type})

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
