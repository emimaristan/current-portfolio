// TOGGLE ICON NAVBAR
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

//SCROLL AND SECTIONS
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  //STICKY HEADER
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  //REMOVE MENU ICON AND CLOSE NAVBAR WHEN SCROLL
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");

  // ANIMATION FOOTER ONSCROLL
  let hideFooter = document.querySelector(".animate.scroll");

  hideFooter.classList.toggle(
    "show-footer",
    this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight
  );
};

//SCROLL TOP ICON
let iconTop = document.querySelector(".footer-iconTop");

iconTop.addEventListener("click", () =>
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
);
