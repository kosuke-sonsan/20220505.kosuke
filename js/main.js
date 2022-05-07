console.log("Hello world");

const target = document.getElementById("menu");
target.addEventListener('click', () => {
  target.classList.toggle('open');
});