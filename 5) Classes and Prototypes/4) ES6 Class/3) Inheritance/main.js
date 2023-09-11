class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  get_summary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
}

class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year); // Invoking Book constructor
    this.month = month;
  }
}

const mag1 = new Magazine("Mag One", "John Doe", "2018", "January");
console.log(mag1);
console.log(mag1.get_summary());
