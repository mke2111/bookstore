/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';
import '../css-circular-prog-bar.css';

const Book = ({ book, delete: handleRemoveBook }) => (
  <div className="d-flex flex-row justify-content-between book-margin">
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
      <div className="info">
        <h4 className="f-14">{ book.category }</h4>
        <h2 className="f-22 font-weight-bold">
          {book.title}
        </h2>
        <h4 className="f-14 pb-21">Author</h4>
      </div>
      <div className="d-flex flex-row justify-content-between">
        <p className="f-14 pointer bd-right pr-2">Comments</p>
        <p>
          <button className="f-14 bd-right" type="button" onClick={() => handleRemoveBook(book)}>Remove</button>
        </p>
        <p className="f-14 pointer pl-2">Edit</p>
      </div>
    </div>
    <div className="d-flex align-items-center">
      <div className="progress-circle p10">
        <div className="left-half-clipper">
          <div className="first50-bar" />
          <div className="value-bar" />
        </div>
      </div>
      <h3>10%</h3>
    </div>
    <div>
      <h3 className="f-13 ">Current Chapter</h3>
      <h3 className="f-16">Chapter 16</h3>
      <button className="f-13 blue-btn" type="button">Update progress</button>
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
