const booksContainer = document.querySelector(".books__container");

let bookData = getBooks();

/*

  DISPLAY BOOKS

*/

function informationHTML(imgSrc, bookTitle) {
  const html = 
  `<div class="book">
    <figure class="book__img--wrapper">
        <img
          src="${imgSrc}"
          class="book__img"
        />
      </figure>
      <div class="book__information">
        <div class="book__title">${bookTitle}</div>`
  return html
}

function ratingHTML(rating) {
  const stars = Math.floor(rating);
  const halfStars = rating % 1 * 2;
  const html =
    `<div class="book__ratings">`
    +
    `<i class="fas fa-star"></i>`.repeat(stars)
    +
    `<i class="fas fa-star-half-alt"></i>`.repeat(halfStars)
    +
    `</div>`
  return html
}

function priceHTML(originalPrice, salePrice) {
  const priceLine = !salePrice ? // salePrice is null
    `<span>$${originalPrice.toFixed(2)}</span>` :
    `<span class="book__price--normal">$${originalPrice.toFixed(2)}</span> $${salePrice.toFixed(2)}`

  const html = 
    `<div class="book__price">
      ${priceLine}
    </div>
    </div>
    </div>`
  return html
}

function displayBooks() {
  let booksHTML = bookData.map(book => {

    const bookHTML =
      informationHTML(book.url, book.title)
      + 
      ratingHTML(book.rating)
      + 
      priceHTML(book.originalPrice, book.salePrice)

    return bookHTML
  });
  booksContainer.innerHTML = booksHTML.join("");
}

displayBooks()

/*

  FILTER 

*/

function sortBooks() { 
  document.querySelector("#filter").addEventListener("change", (event) => {
    const filterType = event.target.value
    /*
    LOW_TO_HIGH
    HIGH_TO_LOW
    HIGHEST_RATED
    */
    
    if (filterType == 'LOW_TO_HIGH') {
      /*
      OR Notes
      (expr1 || expr2)
      returns expr1 if it can be converted to true, otherwise it returns expr2
      used it below in case the salePrice is null, in which case it uses the original price
      salePrice must come first though
      */
      bookData.sort((a, b) => (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice))
    } else if (filterType == 'HIGH_TO_LOW') {
      bookData.sort((a, b) => (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice))
    } else if (filterType == "HIGHEST_RATED") {
      bookData.sort((a, b) => b.rating - a.rating)
    }
    displayBooks();
  });
}

sortBooks()

/*

  FAKE DATA
  
*/

function getBooks() {
  return [
    {
      id: 1,
      title: "Crack the Coding Interview",
      url: "./assets/crack the coding interview.png",
      originalPrice: 49.95,
      salePrice: 14.95,
      rating: 4.5,
    },
    {
      id: 2,
      title: "Atomic Habits",
      url: "assets/atomic habits.jpg",
      originalPrice: 39,
      salePrice: null,
      rating: 5,
    },
    {
      id: 3,
      title: "Deep Work",
      url: "assets/deep work.jpeg",
      originalPrice: 29,
      salePrice: 12,
      rating: 5,
    },
    {
      id: 4,
      title: "The 10X Rule",
      url: "assets/book-1.jpeg",
      originalPrice: 44,
      salePrice: 19,
      rating: 4.5,
    },
    {
      id: 5,
      title: "Be Obsessed Or Be Average",
      url: "assets/book-2.jpeg",
      originalPrice: 32,
      salePrice: 17,
      rating: 4,
    },
    {
      id: 6,
      title: "Rich Dad Poor Dad",
      url: "assets/book-3.jpeg",
      originalPrice: 70,
      salePrice: 12.5,
      rating: 5,
    },
    {
      id: 7,
      title: "Cashflow Quadrant",
      url: "assets/book-4.jpeg",
      originalPrice: 11,
      salePrice: 10,
      rating: 4,
    },
    {
      id: 8,
      title: "48 Laws of Power",
      url: "assets/book-5.jpeg",
      originalPrice: 38,
      salePrice: 17.95,
      rating: 4.5,
    },
    {
      id: 9,
      title: "The 5 Second Rule",
      url: "assets/book-6.jpeg",
      originalPrice: 35,
      salePrice: null,
      rating: 4,
    },
    {
      id: 10,
      title: "Your Next Five Moves",
      url: "assets/book-7.jpg",
      originalPrice: 40,
      salePrice: null,
      rating: 4,
    },
    {
      id: 11,
      title: "Mastery",
      url: "assets/book-8.jpeg",
      originalPrice: 30,
      salePrice: null,
      rating: 4.5,
    },
  ];
}

