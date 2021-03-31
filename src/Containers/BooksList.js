/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Book from '../Components/Book';
import { removeBook, changeFilter } from '../Actions/index';
import CategoryFilter from '../Components/CategoryFilter';
import '../index.css';

const BooksList = ({
  books, filter, changeCat, delete: handleRemoveBook,
}) => {
  const changeCategory = (e) => {
    changeCat(e.target.value);
  };

  const filteredBooks = () => {
    if (filter === 'All') {
      return books.sort((a, b) => a.id - b.id);
    }
    return books.filter((book) => book.category === filter).sort((a, b) => a.id - b.id);
  };

  return (
    <>
      <div className="bnh">
        <CategoryFilter handleFilter={changeCategory} />
        {/* <table>
          <thead>
            <tr>
              <th>
                Book ID
              </th>
              <th>
                Title
              </th>
              <th>
                Category
              </th>
            </tr>
          </thead>
          <tbody> */}
        {filteredBooks().map((book) => <Book key={book.id} book={book} delete={handleRemoveBook} />)}
        {/* </tbody>
        </table> */}
      </div>
    </>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
  delete: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  changeCat: PropTypes.func.isRequired,
};

const mapStateProps = (state) => ({ books: state.books, filter: state.filter });

const mapDispatchToProps = (dispatch) => ({
  delete: (book) => dispatch(removeBook(book)),
  changeCat: (category) => dispatch(changeFilter(category)),
});

export default connect(mapStateProps, mapDispatchToProps)(BooksList);
