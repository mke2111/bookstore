import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../Actions';

const BooksForm = ({ bookCreator }) => {
  const [bookInfo, setBookInfo] = useState({
    title: '',
    category: '',
  });

  const handleChange = (e) => {
    if (e.target.id === 'titleInput') {
      setBookInfo({ ...bookInfo, title: e.target.value });
    } else {
      setBookInfo({ ...bookInfo, category: e.target.value });
    }
  };

  const handleSubmit = () => {
    if (bookInfo.title !== '' && bookInfo.category !== '') {
      bookCreator(bookInfo);
      setBookInfo({ title: '', category: '' });
    } else {
      setBookInfo({ ...bookInfo });
    }
  };

  const categories = ['', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <>
      <div className="form">
        <div className="inner">
          <h3 className="bold font-weight-bold f-22">ADD NEW BOOK</h3>
          <form>
            <label htmlFor="titleInput">
              <input type="text" className="book-input f-16" id="titleInput" placeholder="Book Title" onChange={handleChange} value={bookInfo.title} />
            </label>
            <label htmlFor="cateSelect">
              <select id="cateSelect" placeholder="Category" className="cat-input f-16" onChange={handleChange} value={bookInfo.category}>
                <option value="">Category</option>
                {categories.map((cat) => (
                  <option placeholder="Category" key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </label>
            <button className="f-13 blue-btn add-book" type="button" onClick={handleSubmit}>Add Book</button>
          </form>
        </div>
      </div>
    </>
  );
};

BooksForm.propTypes = {
  bookCreator: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  bookCreator: (book) => { dispatch(createBook(book)); },
});

export default connect(null, mapDispatchToProps)(BooksForm);
