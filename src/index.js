import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'mdbreact/dist/css/mdb.css';

import App from './App';
import UserLogin from './Signin';

import * as serviceWorker from './serviceWorker';

if( sessionStorage.getItem("username") == null ){
	
	ReactDOM.render( <UserLogin /> , document.getElementById('root') );
}else{

ReactDOM.render( <App /> , document.getElementById('root') );

}


serviceWorker.unregister();
