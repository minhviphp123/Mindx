const btn = document.querySelector(".btn");

const key = document.querySelector(".key");

const vongTron = document.querySelector(".vongTron");

const duoi = document.querySelector(".duoi");
console.log(duoi);

btn.addEventListener("click", function() {
    btn.classList.add("hide");
    key.classList.remove("hide");
})

document.addEventListener("keydown", function(e) {
    vongTron.innerText = e.which;
    duoi.innerHTML = e.key;

})