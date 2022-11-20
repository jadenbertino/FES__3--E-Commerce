import './Home.css'

export default function Home() {
  return (
  <>
  <section id="landing">
      <nav>
        <div class="nav__container">
          <figure class="nav__logo">
            <img src="./assets/Library.svg" alt="" />
          </figure>
          <ul class="nav__links">
            <li><a href="#highlights" class="nav__link">About</a></li>
            <li><a href="#books" class="nav__link">Books</a></li>
            <li>
              <a class="nav__link nav__link--primary no-cursor">Contact</a>
            </li>
          </ul>
          <button class="btn__menu" onclick="openMenu() /*runs js*/ ">
            <i class="fas fa-bars"></i>
          </button>
        </div>
        <div class="menu__backdrop">
          <button
            class="btn__menu btn__menu--close"
            onclick="closeMenu() /*runs js*/"
          >
            <i class="fas fa-times"></i>
          </button>
          <ul class="menu__list">
            <li class="menu__list-item">
              <a href="#highlights" class="menu__link" onclick="closeMenu() /*runs js*/"
                >About</a
              >
            </li>
            <li class="menu__list-item">
              <a href="#books" class="menu__link" onclick="closeMenu() /*runs js*/"
                >Books</a
              >
            </li>
            <li class="menu__list-item">
              <a
                class="menu__link no-cursor"
                onclick="closeMenu() /*runs js*/"
                >Contact</a
              >
            </li>
          </ul>
        </div>
      </nav>
      <header>
        <div class="header__container">
          <div class="header__description">
            <h1>America's most awarded online library platform</h1>
            <h3>
              Find your dream book with
              <span class="text--purple">Library</span>
            </h3>
            <a href="#books">
              <button class="btn">Browse Books Now</button>
            </a>
          </div>
          <figure class="header__img--wrapper">
            <img src="./assets/Undraw_Books.svg" alt="" class="header__img" />
          </figure>
        </div>
      </header>
    </section>
    <main>
      <section id="highlights">
        <div class="container">
          <div class="row">
            <h2>Why choose <span class="text--purple">Library</span></h2>
            <div class="highlights__wrapper">
              <div class="highlight">
                <div class="highlight__img--wrapper">
                  <i class="fas fa-bolt highlight__img"></i>
                </div>
                <h3 class="highlight__subtitle">Easy and Quick</h3>
                <p class="highlight__para">
                  Get access to the book you purchased online instantly.
                </p>
              </div>
              <div class="highlight">
                <div class="highlight__img--wrapper">
                  <i class="fas fa-book-open highlight__img"></i>
                </div>
                <h3 class="highlight__subtitle">10,000+ Books</h3>
                <p class="highlight__para">
                  Library has books in all your favourite categories.
                </p>
              </div>
              <div class="highlight">
                <div class="highlight__img--wrapper">
                  <i class="fas fa-tags highlight__img"></i>
                </div>
                <h3 class="highlight__subtitle">Affordable</h3>
                <p class="highlight__para">
                  Get your hands on popular books for as little as $10.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="books">
        <div class="container">
          <div class="row">
            <h2 class="section__title">
              Featured <span class="text--purple">Books</span>
            </h2>
            <div class="books__container">
              <div class="book">
                <figure class="book__img--wrapper">
                  <img
                    src="./assets/crack the coding interview.png"
                    alt=""
                    class="book__img"
                  />
                </figure>
                <div class="book__title">Cracking The Coding Interview</div>
                <div class="book__ratings">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
                <div class="book__price">
                  <span class="book__price--normal">$59.95</span> $14.95
                </div>
              </div>
              <div class="book">
                <figure class="book__img--wrapper">
                  <img
                    src="./assets/atomic habits.jpg"
                    alt=""
                    class="book__img"
                  />
                </figure>
                <div class="book__title">Atomic Habits</div>
                <div class="book__ratings">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
                <div class="book__price">
                  <span class="book__price--normal">$59.95</span> $14.95
                </div>
              </div>
              <div class="book">
                <figure class="book__img--wrapper">
                  <img
                    src="./assets/david goggins.jpeg"
                    alt=""
                    class="book__img"
                  />
                </figure>
                <div class="book__title">Can't Hurt Me</div>
                <div class="book__ratings">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
                <div class="book__price">
                  <span class="book__price--normal">$59.95</span> $14.95
                </div>
              </div>
              <div class="book">
                <figure class="book__img--wrapper">
                  <img src="./assets/deep work.jpeg" alt="" class="book__img" />
                </figure>
                <div class="book__title">Deep Work</div>
                <div class="book__ratings">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
                <div class="book__price">
                  <span class="book__price--normal">$59.95</span> $14.95
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="recent">
        <div class="container">
          <div class="row">
            <h2 class="section__title">
              Latest <span class="text--purple">Books</span>
            </h2>
            <div class="books__container">
              <div class="book">
                <figure class="book__img--wrapper">
                  <img src="./assets/book-1.jpeg" alt="" class="book__img" />
                </figure>
                <div class="book__title">The 10X Rule</div>
                <div class="book__ratings">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
                <div class="book__price">
                  <span class="book__price--normal">$59.95</span> $14.95
                </div>
              </div>
              <div class="book">
                <figure class="book__img--wrapper">
                  <img src="./assets/book-2.jpeg" alt="" class="book__img" />
                </figure>
                <div class="book__title">Be Obsessed Or Be Average</div>
                <div class="book__ratings">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
                <div class="book__price">
                  <span class="book__price--normal">$59.95</span> $14.95
                </div>
              </div>
              <div class="book">
                <figure class="book__img--wrapper">
                  <img src="./assets/book-3.jpeg" alt="" class="book__img" />
                </figure>
                <div class="book__title">Rich Dad Poor Dad</div>
                <div class="book__ratings">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
                <div class="book__price">
                  <span class="book__price--normal">$59.95</span> $14.95
                </div>
              </div>
              <div class="book">
                <figure class="book__img--wrapper">
                  <img src="./assets/book-4.jpeg" alt="" class="book__img" />
                </figure>
                <div class="book__title">Cashflow Quadrant</div>
                <div class="book__ratings">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
                <div class="book__price">
                  <span class="book__price--normal">$59.95</span> $14.95
                </div>
              </div>
              <div class="book">
                <figure class="book__img--wrapper">
                  <img src="./assets/book-5.jpeg" alt="" class="book__img" />
                </figure>
                <div class="book__title">48 Laws of Power</div>
                <div class="book__ratings">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
                <div class="book__price">
                  <span class="book__price--normal">$59.95</span> $14.95
                </div>
              </div>
              <div class="book">
                <figure class="book__img--wrapper">
                  <img src="./assets/book-6.jpeg" alt="" class="book__img" />
                </figure>
                <div class="book__title">The 5 Second Rule</div>
                <div class="book__ratings">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
                <div class="book__price">
                  <span class="book__price--normal">$59.95</span> $14.95
                </div>
              </div>
              <div class="book">
                <figure class="book__img--wrapper">
                  <img src="./assets/book-7.jpg" alt="" class="book__img" />
                </figure>
                <div class="book__title">Your Next Five Moves</div>
                <div class="book__ratings">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
                <div class="book__price">
                  <span class="book__price--normal">$59.95</span> $14.95
                </div>
              </div>
              <div class="book">
                <figure class="book__img--wrapper">
                  <img src="./assets/book-8.jpeg" alt="" class="book__img" />
                </figure>
                <div class="book__title">Mastery</div>
                <div class="book__ratings">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
                <div class="book__price">
                  <span class="book__price--normal">$59.95</span> $14.95
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="explore">
        <div class="container">
          <div class="row--col">
            <h2>Explore more <span class="text--purple">Books</span></h2>
            <a href="#books">
              <button class="btn">Browse Books</button>
            </a>
          </div>
        </div>
      </section>
      <section id="footer">
        <div class="container">
          <div class="row--col">
            <figure class="footer__logo--wrapper">
              <img src="./assets/Library.svg" alt="" class="footer__logo" />
            </figure>
            <div class="footer__links">
              <a href="#landing" class="footer__link">Home</a>
              <a href="#highlights" class="footer__link">About</a>
              <a href="#books" class="footer__link">Books</a>
              <a class="footer__link no-cursor">Contact</a>
            </div>
            <p class="footer__copyright">Copyright &copy; 2021 Library</p>
          </div>
        </div>
      </section>
    </main>
  </>
  )
}