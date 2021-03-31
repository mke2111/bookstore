/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';
import '../css-circular-prog-bar.css';

const Book = ({ book, delete: handleRemoveBook }) => (
  <div className="d-flex flex-row justify-content-around book-margin">
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
    <div className="d-flex align-items-center">
      <div className="progress-circle p10">
        <span>10%</span>
        <div className="left-half-clipper">
          <div className="first50-bar" />
          <div className="value-bar" />
        </div>
      </div>
      <h3>64%</h3>
    </div>
    <div>
      <h3>Current Chapter</h3>
      <h3>Chapter 16</h3>
      <button type="button">Update progress</button>
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
