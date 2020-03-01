let menuLists = document.querySelectorAll(".menu-list");
let menuLabels = document.querySelectorAll(".menu-label");
let toggleMenuBtn = document.getElementById("toggleNav");
let linkTabs = document.querySelectorAll(".linkTabs");

for (let linkTab of linkTabs) {
  linkTab.hidden = true;
}

toggleMenuBtn.addEventListener("click", () => {
  document.getElementById("showTab").classList.toggle("show");
});
for (let menuList of menuLists) {
  menuList.hidden = true;
}

for (let menuLabel of menuLabels) {
  menuLabel.addEventListener("click", event => {
    for (let menuLabel of menuLabels) {
      menuLabel.classList.remove("active");
    }
    for (let menuList of menuLists) {
      menuList.hidden = true;
    }
    event.target.nextElementSibling.hidden = false;

    event.target.classList.add("active");
  });
}

function showTab(event, category) {
  for (let linkTab of linkTabs) {
    linkTab.hidden = true;
  }
  document.getElementById(category).hidden = false;
}

addEventListener("click", () => {
  if (!event.target.matches(".linkTabs, .nav-item, .linkTabs a, .linkTabs p")) {
    for (let linkTab of linkTabs) {
      linkTab.hidden = true;
    }
  }
});

window.sr = ScrollReveal();

sr.reveal(
  ".info .animate",
  { duration: 2000, origin: "bottom", distance: "300px" },
  550
);
