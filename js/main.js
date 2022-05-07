console.log("Hello world");

const target = document.getElementById("menu");
target.addEventListener('click', function() {
  target.classList.toggle('open');
  target.addEventListener('change', function () {
    target.classList.toggle("open-menu")
  })
});
