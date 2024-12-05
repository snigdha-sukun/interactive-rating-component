const submitBtn = document.getElementById('submit-btn');
const ratingText = document.getElementById('rating-text');
const ratingContainer = document.getElementById('rating-container');
const thankYouContainer = document.getElementById('thank-you-container');
const optionsContainer = document.getElementById('rating-options-container');

function selectRatingOption(selected) {
    const lastSelectedOption = document.querySelector(".selected");
    const selectedClass = "selected"
    if(lastSelectedOption) {
        lastSelectedOption.classList.remove(selectedClass);
    }

    selected.classList.add(selectedClass);
}

function submitRating() {
    const selectedOption = document.querySelector(".selected");
    if (selectedOption) {
        ratingText.textContent = selectedOption.getAttribute("data-value");
        ratingContainer.style.display = 'none';
        thankYouContainer.style.display = 'flex';
    }
}

submitBtn.addEventListener('click', submitRating);

optionsContainer.addEventListener("click", (event) => {
    if (!event.target.getAttribute("data-value")) return;
    selectRatingOption(event.target);
});

