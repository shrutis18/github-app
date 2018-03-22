import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware,createStore} from 'redux';
import {connect, Provider} from 'react-redux'
import reducer from './reducer.js'
import thunk from 'redux-thunk'
import {mapStateToProps,mapDispatchToProps} from './actions.js'
import './index.css';
import App from './App';
const store = createStore(reducer);
const AppWithStore = connect(mapStateToProps, mapDispatchToProps) (App);

ReactDOM.render(<Provider store ={store}>
<AppWithStore/>
</Provider>
, document.getElementById('root'));
