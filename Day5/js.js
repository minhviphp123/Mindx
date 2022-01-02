const searchBtn = document.querySelector("button");

const searchBox = document.querySelector(".searchBox");

searchBtn.addEventListener("click", function() {

    searchBox.classList.toggle("btn");

    this.previousElementSibling.focus();

})
