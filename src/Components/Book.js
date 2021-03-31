/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, delete: handleRemoveBook }) => (
  <div>
    {/* <tr>
      <td>
        {book.id}
      </td>
      <td>
        {book.title}
      </td>
      <td>
        {book.category}
      </td>
      <td>
        <button type="button" onClick={() => handleRemoveBook(book)}>Remove Book</button>
      </td>
    </tr> */}
    <div>
      <div>
        <h4>{ book.category }</h4>
        <h2>
          {book.title}
        </h2>
        <h4>Author</h4>
      </div>
      <div className="d-flex flex-row">
        <h3>Comments</h3>
        <h3>
          <button type="button" onClick={() => handleRemoveBook(book)}>Remove</button>
        </h3>
        <h3>Edit</h3>
      </div>
    </div>
    <div>
      <h3>64%</h3>
    </div>
  </div>
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  delete: PropTypes.func.isRequired,
};

export default Book;
