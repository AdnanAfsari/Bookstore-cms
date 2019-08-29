const books = (state = [], action) => {
  // Actions on book
  switch (action.type){
    case 'CREATE_BOOK':
      return [...state, Object.assign({}, action.book)];
    case 'REMOVE_BOOK':
      return state.filter(book => action.book.id !== book.id);
    default:
      return state;
  }

}

export default books;
