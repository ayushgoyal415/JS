class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  get_summary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }

  get_age() {
    const years = new Date().getFullYear - this.year;
    return `${this.title} is ${years} years old`;
  }

  revise(new_year) {
    this.year = new_year;
    this.revised = true;
  }

  static top_book_store() {
    return "Barnes & Noble";
  }
}

// The data members and methods defined in the constructor are added to the class instance (an object)
// The data members and methods defined outside the constructor (eg get_summary) are defined inside object.__proto__
// The data members defined using 'static' keyword are not defined inside object instance
const book = new Book("Book One", "John Doe", "2013");

console.log(book);
console.log(book.get_summary());
console.log(Book.top_book_store());
