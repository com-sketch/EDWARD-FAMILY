// Smooth Scroll Navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Toggle "Read More" Section in About Us
const readMoreBtn = document.getElementById('read-more-btn');
const fullStory = document.getElementById('full-story');

readMoreBtn.addEventListener('click', () => {
    if (fullStory.classList.contains('hidden')) {
        fullStory.classList.remove('hidden');
        readMoreBtn.textContent = "Read Less";
    } else {
        fullStory.classList.add('hidden');
        readMoreBtn.textContent = "Read More";
    }
});
