/* global document */
import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('Recommendations'));

window.Recommendations = App;
