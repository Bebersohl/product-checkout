import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import './index.css'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/index'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import ItemsRowContainer from './containers/ItemsRowContainer'
import NotFound from './components/NotFound'
import CheckoutContainer from './containers/CheckoutContainer'
import ThankYou from './components/ThankYou'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer, 
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={ItemsRowContainer}/>
        <Route path="checkout/:sku" component={CheckoutContainer}/>
        <Route path="thanks" component={ThankYou}/>
        <Route path="*" component={NotFound}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
