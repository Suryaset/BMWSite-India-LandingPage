const serve = document.getElementById("serve");
const btmnav = document.getElementById("btmnav");
const feature = document.getElementById("feature")


serve.addEventListener("mouseover", () => {
    btmnav.style.display = "none" ;
});

feature.addEventListener("mouseover", () => {
    btmnav.style.display = "flex" ;
});