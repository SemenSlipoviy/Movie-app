import * as React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { createStore, combineReducers, applyMiddleware } from "redux";
import { dataReducer } from "./redux/index";
import { dataInfoReducer  } from "./redux/infoIndex";

import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';


import './index.css';
import App from './App';

const reducers = combineReducers({
  
  dataInfoReducer,
  dataReducer,
 
  
});
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
ReactDOM.render(

  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>


  </React.StrictMode>
  ,
  document.getElementById('root')
);

export default reducers;
