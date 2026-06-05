function searchDevelopers() {

    let input = document
        .getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();

    let cards = document.querySelectorAll(".card");

    cards.forEach(function(card) {

        let tags = Array.from(
            card.querySelectorAll(".tags span")
        ).map(function(tag) {
            return tag.innerText.toLowerCase();
        });

        if (input === "") {
            card.style.display = "block";
        }
        else if (tags.includes(input)) {
            card.style.display = "block";
        }
        else {
            card.style.display = "none";
        }

    });
    const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function () {

let searchValue = searchInput.value.toLowerCase();

let cards = document.querySelectorAll(".developer-card");

cards.forEach(card => {

let name = card.querySelector("h3").textContent.toLowerCase();

if(name.includes(searchValue)){
card.style.display = "block";
}else{
card.style.display = "none";
}
const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".developer-card");
const noResults = document.getElementById("noResults");

searchInput.addEventListener("keyup", function () {

    let searchValue = searchInput.value.toLowerCase();
    let visibleCards = 0;

    cards.forEach(card => {

        let text = card.textContent.toLowerCase();

        if (text.includes(searchValue)) {
            card.style.display = "block";
            visibleCards++;
        } else {
            card.style.display = "none";
        }
    });

    if (visibleCards === 0) {
        noResults.style.display = "block";
    } else {
        noResults.style.display = "none";
    }
});
});

});
}
