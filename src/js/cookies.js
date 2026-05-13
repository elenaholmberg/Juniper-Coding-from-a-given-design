const cookieBanner = document.getElementById("cookieBanner");

const acceptBtn = document.getElementById("acceptCookies");

const moreBtn = document.querySelector(".more-btn");

/* ===============================
Visa banner endast om användaren
inte redan accepterat cookies
=============================== */

window.addEventListener("load", () => {
  const cookiesAccepted = localStorage.getItem("cookiesAccepted");

  if (!cookiesAccepted) {
    setTimeout(() => {
      cookieBanner.classList.add("show");
    }, 300);
  }
});

/* ===============================
Stäng banner + spara val
=============================== */

function closeBanner() {
  cookieBanner.classList.remove("show");
  cookieBanner.classList.add("hide");

  localStorage.setItem("cookiesAccepted", "true");
}

/* ===============================
Event listeners
=============================== */

acceptBtn.addEventListener("click", closeBanner);

moreBtn.addEventListener("click", closeBanner);
