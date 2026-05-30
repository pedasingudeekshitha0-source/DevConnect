function searchDevelopers() {

    let input = document
        .getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();

    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        let tags = Array.from(card.querySelectorAll(".tags span"))
            .map(tag => tag.innerText.toLowerCase());

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
