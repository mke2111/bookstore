import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Book from '../Components/Book';
import { createBook, removeBook } from '../Actions/index';

const BooksList = ({ books }) => (
  <table>
    <thead>
      <tr>
        <th>
          BookID
        </th>
        <th>
          Title
        </th>
        <th>
          Category
        </th>
      </tr>
    </thead>
    <tbody>
      {books.map((book) => <Book key={book} book={book} />)}
    </tbody>
  </table>
);

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const mapStateProps = (state) => ({ books: state.books });
const mapDispatchToProps = (dispatch) => ({
  create: (book) => dispatch(createBook(book)),
  delete: (book) => dispatch(removeBook(book)),
});

export default connect(mapStateProps, mapDispatchToProps)(BooksList);
