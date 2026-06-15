import type { Book } from "../types/api";
import { api } from "./api";

export const bookService = {
  getAllBooks: async (): Promise<Book[]> => {
    const response = await api.get<Book[]>("/books");
    return response.data;
  },

  getBookById: async (id: string): Promise<Book> => {
    const response = await api.get<Book>(`/books/${id}`);
    return response.data;
  },

  createBook: async (bookData: Omit<Book, "id">): Promise<Book> => {
    const response = await api.post<Book>("/books", bookData);
    return response.data;
  },
};
