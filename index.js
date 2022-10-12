function openMenu() {
  document.body.classList += " menu--open"
  /* 
  - goes to the object "document -> body -> list of it's classes" then appends the given class
  - You need the space so that it is separated from any existing classes
  when it gets appended 
  */ 
}

function closeMenu() {
  document.body.classList.remove('menu--open')
  /* 
  - goes to the object "document -> body -> list of it's classes" then removes the given class
  */
}