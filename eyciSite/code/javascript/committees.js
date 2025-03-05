// Select all "Read More" buttons
const readMoreBtns = document.querySelectorAll('.read-more-btn');

// Loop through each button
readMoreBtns.forEach(button => {
    button.addEventListener('click', function () {
        // Find the hidden content for this specific button
        const moreContent = this.previousElementSibling;

        // Find the original visible content (assume it's the previous sibling of the hidden content)
        const visibleContent = moreContent.previousElementSibling;

        // Toggle the visibility of the hidden and visible content
        if (moreContent.style.display === 'none' || moreContent.style.display === '') {
            moreContent.style.display = 'block'; // Show the hidden content
            visibleContent.style.display = 'none'; // Hide the original visible content
            this.textContent = 'Read Less'; // Change button text
        } else {
            moreContent.style.display = 'none'; // Hide the hidden content again
            visibleContent.style.display = 'block'; // Show the original visible content
            this.textContent = 'Read More'; // Change button text back
        }
    });
});