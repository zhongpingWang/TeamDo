//npm
import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 
import { createStore, applyMiddleware,compose,bindActionCreators } from 'redux';
import { Provider,connect } from 'react-redux';
import thunk from 'redux-thunk';
import { Router, Route, browserHistory,Link,IndexRoute,hashHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux' 


import AppReducer from './redux/reducers/index' 

import routers from './routers/index'

//store
const finalCreateStore = compose(
  applyMiddleware(thunk)
)(createStore);

const store = finalCreateStore(AppReducer);  
const history = syncHistoryWithStore(hashHistory, store)

ReactDOM.render(
  <Provider store={store}> 
     <Router history={browserHistory} routes={routers} />
  </Provider>,
  document.getElementById('app')
);


 