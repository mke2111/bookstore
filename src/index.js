import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import App from './Components/App';

const initialState = [
  { id: Math.floor(Math.random() * 100) + 1, title: 'Book1', category: 'Horror' },
  { id: Math.floor(Math.random() * 100) + 1, title: 'Book2', category: 'Action' },
  { id: Math.floor(Math.random() * 100) + 1, title: 'Book3', category: 'Biography' },
  // { id: Math.floor(Math.random() * 100) + 1, title: 'Book4', category: 'History' },
  // { id: Math.floor(Math.random() * 100) + 1, title: 'Book5', category: 'Kids' },
  // { id: Math.floor(Math.random() * 100) + 1, title: 'Book6', category: 'Learning' },
  { id: Math.floor(Math.random() * 100) + 1, title: 'Book7', category: 'Sci-Fi' },
];

const store = createStore(reducer, { books: initialState });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
