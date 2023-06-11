const header = document.querySelector('header')

window.addEventListener ("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0 )
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('open')
};

window.onscroll = () => {
    navbar.classList.remove('open')
}


document.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-arrow-down")) {
      e.target.nextElementSibling.nextElementSibling.classList.toggle("slide");
      if (e.target.style.transform) {
        e.target.style.removeProperty("transform");
      } else {
        e.target.style.transform = "rotate(180deg)";
      }
    }
  });
  