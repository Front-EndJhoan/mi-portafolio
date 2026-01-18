document.addEventListener("DOMContentLoaded", function(){
    const cards = document.querySelectorAll(".card");
    const btnPrev = document.getElementById("btnPrev");
    const btnNext = document.getElementById("btnNext");

    let currentIndex = 0;

    function updateCard() {
        cards.forEach(card => card.classList.remove("active"));
        cards[currentIndex].classList.add("active");
    }

    btnPrev.addEventListener("click", () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = cards.length - 1;
        }
        updateCard();
    });

    btnNext.addEventListener("click", () => {
        currentIndex++;
        if (currentIndex >= cards.length) {
            currentIndex = 0;
        }
        updateCard();
    })
})