export const getBooksByAuthor = (author) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=inauthor:${author}&filter=free-ebooks&key=AIzaSyDGXhVlS0PoVs2qveKrMj0q4KA3jVQOkTw`
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const resData = await response.json();

      return resData;
    } catch (err) {
      throw err;
    }
  };
};
