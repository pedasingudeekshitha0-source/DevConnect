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
}
