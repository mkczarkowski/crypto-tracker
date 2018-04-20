import React from 'react';
import ReactDOM from 'react-dom';
import {StyleRoot} from "radium";
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<StyleRoot><App/></StyleRoot>, document.getElementById('root'));
registerServiceWorker();
