const books = (state = [], action) => {
  // Actions on book
  switch (action.type) {
    case 'CREATE_BOOK':
      return [...state, action.book];
    case 'REMOVE_BOOK':
      return state.filter((id) => action.id !== id);
    default:
      return state;
  }
};

export default books;
