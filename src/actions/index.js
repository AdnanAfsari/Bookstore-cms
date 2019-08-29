export const createBook = (book) => {
  return (
    {
      type: 'CREATE_BOOK',
      book
    }
  );
}

export const removeBook = (id) => {
  return (
    {
     type: 'REMOVE_BOOK',
     id
   }
 );
}

export const changeFilter = (filter) => {
  return (
    {
      type: 'CHANGE_FILTER',
      filter
    }
  );
}
