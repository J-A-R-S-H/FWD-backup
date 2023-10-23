class Book {

    constructor(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read


        this.info = function () {
            const readStatus = this.isRead ? "read" : "not read yet";
            return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
        };

    }
}

const theHobbit = new Book("The Hobbit", "JRR Tolkien", 295, false);

const bookInfo = theHobbit.info()
console.log(theHobbit.info());
