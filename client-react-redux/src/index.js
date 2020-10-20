import './index.css';
import { receiveMessage } from 'features/chat/chatSlice';
import socket from 'features/chat/socket';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './app/store';
import * as serviceWorker from './serviceWorker';

socket.on('chat', function (message) {
  store.dispatch(receiveMessage(message));
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
