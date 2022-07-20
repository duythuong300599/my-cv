const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const btnToggle = $(".nav-btn-toggle");
const links = $$(".nav-link");
const navbar = $(".navbar");
const lists = $(".nav-collapse");

const items = $$(".nav-list-item");

console.log(links);

function toggleCollapse() {
  lists.classList.toggle("show");
  navbar.classList.toggle("full");
}

function clickSection() {
  lists.classList.remove("show");
  navbar.classList.remove("full");
}

function activeClass() {
  var active = $(".active");
  active.className = active.className.replace("active", "");
  this.className += " active";
}

btnToggle.addEventListener("click", toggleCollapse);

for (const item of links) {
  item.addEventListener("click", clickSection);
}

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", activeClass);
}
