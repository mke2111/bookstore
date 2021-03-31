import React from 'react';
import BooksList from '../Containers/BooksList';
import BooksForm from '../Containers/BooksForm';
import Header from './Header';

const App = () => (
  <div className="bgd">
    <Header />
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
