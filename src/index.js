import React from 'react';
import ReactDOM from 'react-dom';
import Provider from './components/Provider';
import './index.css';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<Provider /> , document.getElementById('root'));
registerServiceWorker();
