// Function to trigger heart animation when "Kiss me" is clicked
function showHeart() {
	const heart = document.querySelector(".heart");
	heart.style.animation = "none";
	setTimeout(() => {
		heart.style.animation = "scaleHeart 1s ease-in-out infinite";
	}, 10);
}

// Function to redirect to the second page when "I love you more" is clicked
function nextPage() {
	window.location.href = "page2.html"; // Redirect to page2.html
}

function addHearts() {
	const heartsContainer = document.getElementById("heartsContainer");

	// Check if the container already has 10 hearts, limit the maximum number
	if (heartsContainer.children.length >= 10) {
		alert("The heart is full! 💖");
		return;
	}

	// Create a new heart element
	const heart = document.createElement("span");
	heart.classList.add("heart");
	heart.innerHTML = "❤️"; // You can use other characters or images for the heart

	// Append the heart to the container
	heartsContainer.appendChild(heart);
}
