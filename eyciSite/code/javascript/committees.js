// Select all "Read More" buttons
const readMoreBtns = document.querySelectorAll('.read-more-btn');

// Loop through each button
readMoreBtns.forEach(button => {
    button.addEventListener('click', function () {
        // Find the hidden content by targeting the next sibling (i.e., .more-content)
        const moreContent = this.previousElementSibling.querySelector('.more-content');
        
        // Toggle the visibility of the hidden content
        if (moreContent.style.display === 'none' || moreContent.style.display === '') {
            moreContent.style.display = 'block'; // Show the hidden content
            this.textContent = 'Read Less'; // Change button text
        } else {
            moreContent.style.display = 'none'; // Hide the hidden content again
            this.textContent = 'Read More'; // Change button text back
        }
    });
});
