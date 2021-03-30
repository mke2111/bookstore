import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Book from '../Components/Book';
import { createbook, removebook } from '../Actions/index';

const BooksList = ({ books }) => (
  <table>
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
    {books.map((book) => <Book key={book} book={book} />)}
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
  create: (book) => dispatch(createbook(book)),
  delete: (book) => dispatch(removebook(book)),
});

export default connect(mapStateProps, mapDispatchToProps)(BooksList);
