const breedSelect = document.getElementById("breed-select");
const loadImagesButton = document.getElementById("load-images");
const imageGallery = document.querySelector(".image-gallery");

// Fetch list of dog breeds from the API
async function fetchBreeds() {
    try {
        const response = await fetch("https://dog.ceo/api/breeds/list/all");
        const data = await response.json();
        const breeds = Object.keys(data.message);
        breeds.forEach(breed => {
            const option = document.createElement("option");
            option.value = breed;
            option.text = breed;
            breedSelect.appendChild(option);
        });
    } catch (error) {
        console.error("Error fetching breeds:", error);
    }
}

// Fetch and display images for selected breeds
async function loadImages() {
    imageGallery.innerHTML = ""; // Clear previous images
    const selectedBreeds = Array.from(breedSelect.selectedOptions).map(option => option.value);

    for (const breed of selectedBreeds) {
        try {
            const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/5`);
            const data = await response.json();
            const images = data.message;

            images.forEach(imageUrl => {
                const imgContainer = document.createElement("div");
                imgContainer.className = "img-container";
                const img = document.createElement("img");
                img.src = imageUrl;
                img.alt = breed;
                imgContainer.appendChild(img);
                imageGallery.appendChild(imgContainer);
            });
        } catch (error) {
            console.error(`Error fetching images for ${breed}:`, error);
        }
    }
}

// Event listeners
window.addEventListener("load", fetchBreeds);
loadImagesButton.addEventListener("click", loadImages);
