// This is your client-side JavaScript file (script.js)

// *** PASTE YOUR GOOGLE APPS SCRIPT URL HERE ***
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbz-SjrAUecj_cqRFsGWrFVmPZacCgo93yzd1ZumxpnTOZDhsT3l3QkCSY3HG1K5ZkPf/exec";


const storyForm = document.getElementById("story-form");
const generateBtn = document.getElementById("generate-btn");
const loadingContainer = document.getElementById("loading-container");
const storyOutputContainer = document.getElementById("story-output-container");
const buttonText = document.querySelector("#generate-btn .button-text"); // Get the text span

storyForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Stop the form from reloading the page

    // 1. Get user inputs from the form
    const prompt = document.getElementById("story-prompt").value;
    const age = document.getElementById("age-group").value;
    const gender = document.getElementById("gender").value;
    const dialect = document.getElementById("dialect").value;

    if (!prompt) {
        alert("Please write what the story should be about!");
        return;
    }

    // 2. Prepare data to send to the back-end
    const data = {
        prompt: prompt,
        age: age,
        gender: gender,
        dialect: dialect
    };

    // 3. Show loading spinner and hide form
    loadingContainer.classList.remove("hidden");
    storyOutputContainer.innerHTML = ""; // Clear old story
    generateBtn.disabled = true;
    buttonText.innerText = "Creating..."; // Update button text

    // 4. Send the data to the Google Apps Script back-end
    fetch(WEB_APP_URL, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
            "Content-Type": "text/plain;charset=utf-8", // Use text/plain for Apps Script
        },
        body: JSON.stringify(data) // Send as a JSON string
    })
    .then(response => response.json())
    .then(result => {
        // 5. Handle the response
        loadingContainer.classList.add("hidden");
        generateBtn.disabled = false;
        buttonText.innerText = "Create My Story!"; // Reset button text

        if (result.status === "success") {
            // We got a story!
            displayStory(result.story);
        } else {
            // An error occurred
            displayError(result.message);
        }
    })
    .catch(error => {
        // Handle network errors
        loadingContainer.classList.add("hidden");
        generateBtn.disabled = false;
        buttonText.innerText = "Create My Story!"; // Reset button text
        displayError("A network error occurred: " + error.message);
    });
});

function displayStory(pages) {
    storyOutputContainer.innerHTML = ""; // Clear any previous content

    pages.forEach((page, index) => {
        // Create the page container
        const pageElement = document.createElement("div");
        pageElement.classList.add("story-page");

        // Add page number
        const pageNumber = document.createElement("h3");
        pageNumber.innerText = `Page ${index + 1}`;
        pageElement.appendChild(pageNumber);

        // Create the image container
        const imageContainer = document.createElement("div");
        imageContainer.classList.add("image-container");

        // Add the image
        const img = document.createElement("img");
        img.src = page.imageUrl;
        img.alt = `Story illustration for page ${index + 1}`;
        imageContainer.appendChild(img);

        // Add speech bubble (if there is speech)
        if (page.speechText && page.speechText.trim() !== "") {
            const speechBubble = document.createElement("div");
            speechBubble.classList.add("speech-bubble");
            speechBubble.innerText = page.speechText;
            imageContainer.appendChild(speechBubble);
        }

        pageElement.appendChild(imageContainer);

        // Add the story text
        const text = document.createElement("p");
        text.classList.add("story-text");
        text.innerText = page.pageText;
        pageElement.appendChild(text);

        // Add the new page to the webpage
        storyOutputContainer.appendChild(pageElement);
    });
}

function displayError(message) {
    storyOutputContainer.innerHTML = `<div class="story-page" style="border-color: red; background-color: #fff0f0;">
        <h3>An Error Occurred</h3>
        <p style="direction: ltr; text-align: left; color: #d00;">${message}</p>
        <p style="direction: ltr; text-align: left;">Please check the Apps Script logs for more details.</p>
    </div>`;
}