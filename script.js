function searchDevelopers() {

    let input = document
        .getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();

    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        let tags = card.querySelectorAll(".tags span");
        let found = false;

        tags.forEach(tag => {
            if (tag.innerText.toLowerCase() === input) {
                found = true;
            }
        });

        if (input === "") {
            card.style.display = "block";
        } else if (found) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
