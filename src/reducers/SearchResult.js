const initState = {
  result: [],
};

const searchResult = (state = initState, { type, payload }) => {
  switch (type) {
    case "SET_RESULT":
      return {
        result: [...payload],
      };

    default:
      return initState;
  }
};

export default searchResult;

export const setResult = (result) => {
  return {
    type: "SET_RESULT",
    payload: result,
  };
};
