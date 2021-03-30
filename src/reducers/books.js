import { CREATE_BOOK, REMOVE_BOOK } from '../Actions/index';

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return {
        ...state, book: action.book,
      };
    case REMOVE_BOOK:
      return state.filter(book => book.id !== action.book.id);
    default:
      return state;
  }
}