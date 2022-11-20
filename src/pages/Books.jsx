<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <script src="https://kit.fontawesome.com/c8e4d183c2.js" crossorigin="anonymous"></script>
  <script src="index.js" defer></script>
  <script src="books.js" defer></script>
  <title>Library</title>
</head>

<body>
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
</body>

</html>