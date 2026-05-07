const cookieBanner = document.getElementById("cookieBanner");

const acceptBtn = document.getElementById("acceptCookies");

const moreBtn = document.querySelector(".more-btn");


// Visa banner när sidan laddas
window.addEventListener("load", () => {
  setTimeout(() => {
    cookieBanner.classList.add("show");
  }, 300);
});


// Stäng banner
function closeBanner() {
  cookieBanner.classList.remove("show");
  cookieBanner.classList.add("hide");
}


// Båda knapparna stänger bannern
acceptBtn.addEventListener("click", closeBanner);
moreBtn.addEventListener("click", closeBanner);