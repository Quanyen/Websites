const btn = document.getElementById("phone-menubar-btn");
const nav = document.getElementById("phone-menubar");

btn.addEventListener("click", () => {
    nav.classList.toggle("active");
    btn.classList.toggle("active");
});