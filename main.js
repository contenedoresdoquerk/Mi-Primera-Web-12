const burger = document.querySelector("#navar-resp");
const ul = document.querySelector("nav ul");
const navLinks = document.querySelectorAll(".navbar_link");

// Esta línea estaba mal escrita: "cont" → "const" y "navar_link" → ".navbar_link"
// Además, no era necesaria si ya tienes navLinks arriba, así que la eliminé

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        ul.classList.remove("show");
    });
});
















