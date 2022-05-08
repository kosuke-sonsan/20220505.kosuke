console.log("Hello world");

const target = document.getElementById("menu");
target.addEventListener('click', function () {
  target.classList.toggle('open');
  const nav = document.getElementById('disply');
  nav.classList.toggle('in');
});
