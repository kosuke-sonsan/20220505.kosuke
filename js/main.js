console.log("Hello world");

const target = document.getElementById("menu");
target.addEventListener('click', function() {
  target.classList.toggle('open');
});

const menuOpen = document.getElementsById("menu")
menuOpen.addEventListener("click", function () {
  menu.classList.toggle("open-menu");
})
console.log("menuOpen");

const menuClose = document.getElementById("menu")
menuClose.addEventListener("click", function () {
  menu.classList.toggle("close-menu");
})

console.log("menuClose");