import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from react-dom/client
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root
root.render( // Use render method on the root
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
