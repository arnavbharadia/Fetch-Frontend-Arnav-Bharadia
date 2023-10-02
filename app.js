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
    const imageGrid = document.getElementById("image-grid");
    imageGrid.innerHTML = ""; // Clear previous images

    const selectedBreeds = Array.from(breedSelect.selectedOptions).map(option => option.value);

    const numRows = 3; // Define the number of rows
    const numCols = 4; // Define the number of columns

    // Create rows and columns
    for (let i = 0; i < numRows; i++) {
        const row = document.createElement("div");
        row.className = "row";

        for (let j = 0; j < numCols; j++) {
            const col = document.createElement("div");
            col.className = "column";
            row.appendChild(col);
        }

        imageGrid.appendChild(row);
    }

    const columns = document.querySelectorAll(".column");

    let colIndex = 0;

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

                columns[colIndex].appendChild(imgContainer);
                imgContainer.appendChild(img);

                // Add a hover effect to enlarge the image
                imgContainer.addEventListener("mouseover", () => {
                    img.style.transform = "scale(1.1)";
                    img.style.transition = "transform 0.2s ease-in-out";
                });

                imgContainer.addEventListener("mouseout", () => {
                    img.style.transform = "scale(1)";
                });

                colIndex = (colIndex + 1) % columns.length; // Cycle through columns
            });
        } catch (error) {
            console.error(`Error fetching images for ${breed}:`, error);
        }
    }
}

// Call the loadImages function when the page loads
window.addEventListener("load", loadImages);


// Event listeners
window.addEventListener("load", fetchBreeds);
loadImagesButton.addEventListener("click", loadImages);

// Fetch and display images for selected breeds
async function loadImages() {
    const imageGrid = document.getElementById("image-grid");
    imageGrid.innerHTML = ""; // Clear previous images

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
                imageGrid.appendChild(imgContainer);
            });
        } catch (error) {
            console.error(`Error fetching images for ${breed}:`, error);
        }
    }
}

// Call the loadImages function when the page loads
window.addEventListener("load", loadImages);

// Fetch and display images for selected breeds
async function loadImages() {
    const imageGrid = document.getElementById("image-grid");
    imageGrid.innerHTML = ""; // Clear previous images

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
                imageGrid.appendChild(imgContainer);
            });
        } catch (error) {
            console.error(`Error fetching images for ${breed}:`, error);
        }
    }
}

// Call the loadImages function when the page loads
window.addEventListener("load", loadImages);
