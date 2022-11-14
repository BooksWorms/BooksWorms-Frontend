const initState = {
  books: [],
};

const homePage = (state = initState, { type, payload }) => {
  switch (type) {
    case "SET_BOOKS":
      return { books: [...payload] };
    default:
      return initState;
  }
};

export default homePage;

export const setBooks = (books) => {
  return {
    type: "SET_BOOKS",
    payload: books,
  };
};
