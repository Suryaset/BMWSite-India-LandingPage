const serve = document.getElementById("serve");
const btmnav = document.getElementById("btmnav");
const feature = document.getElementById("feature")


serve.addEventListener("mousemove", () => {
    btmnav.style.display = "none" ;
});

feature.addEventListener("mousemove", () => {
    btmnav.style.display = "flex" ;
});