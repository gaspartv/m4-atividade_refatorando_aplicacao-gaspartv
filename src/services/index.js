import { books } from "../database";

export const retrieveBookService = (bookId) => {
  const book = books.find((b) => b.id === bookId);
  return book;
};

export const createBookService = (payload) => {
  const foundBook = books.find((b) => b.name === payload.name);

  if (foundBook) {
    return [409, { message: "Book already exists!" }];
  }

  payload.id = getLastId().toString();

  books.push(payload);

  return [201, payload];
};
