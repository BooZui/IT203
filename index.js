const sideLinks = document.querySelectorAll(
    ".sidebar .side-menu > li:not(#nav) > a"
);
const menuLinks = document.querySelectorAll(".content main");
const addSelector = document.querySelector(".content");

sideLinks.forEach((item) => {
    const li = item.parentElement;
    item.addEventListener("click", () => {
        sideLinks.forEach((i) => {
            i.parentElement.classList.remove("active");
        });
        li.classList.add("active");
    });
});

const sideBar = document.querySelector(".sidebar");

window.addEventListener("resize", () => {
    if (window.innerWidth < 768) {
        sideBar.classList.add("close");
        navBar.classList.add("close");
    } else {
        sideBar.classList.remove("close");
        navBar.classList.remove("close");
    }
});

const menuBar = document.querySelector(".bx.bx-menu");
const navBar = document.querySelector("#nav");

menuBar.addEventListener("click", () => {
    sideBar.classList.toggle("close");
    navBar.classList.toggle("close");
});

const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("change", function () {
    if (this.checked) {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }
});

// home new content

const homeNew = document.getElementById("home-new");
const bottomList = homeNew.querySelectorAll(".new-list li .bottom-list");

bottomList.forEach((itemFor) => {
    const divFolow = itemFor.parentElement.querySelector(".new-infor");
    itemFor.addEventListener("click", () => {
        divFolow.classList.toggle("active");
    });
});
