import { makeAutoObservable } from "mobx";
import { fromPromise, IPromiseBasedObservable } from "mobx-utils";
import { GetBooksResponse } from "../../../api/books/types";
import { getBooks } from "../../../api/books/api";

class BookStore {
  constructor() {
    makeAutoObservable(this);
  }

  booksData?: IPromiseBasedObservable<GetBooksResponse[]>;
  getBooksAction = async () => {
    try {
      this.booksData = fromPromise(getBooks());
    } catch (error) {
      console.log(error);
    }
  };
}

export const bookStore = new BookStore();
