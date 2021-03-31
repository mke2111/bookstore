import React from 'react';
import BooksList from '../Containers/BooksList';
import BooksForm from '../Containers/BooksForm';

const App = () => (
  <div className="app">
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
