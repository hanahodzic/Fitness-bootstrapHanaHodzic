document.addEventListener('DOMContentLoaded', function() {

    // Smooth Scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();  // Prevent default anchor behavior
            const targetId = this.getAttribute('href').slice(1);  // Get the target section ID
            const targetElement = document.getElementById(targetId);

            // Scroll smoothly to the target element
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust for header height
                behavior: 'smooth'
            });
        });
    });

    // Change navbar background color on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('nav');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = '#444'; // Darker background on scroll
        } else {
            navbar.style.backgroundColor = '#333'; // Default background color
        }
    });

    // Example: Accordion-style FAQ with toggle functionality
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            item.classList.toggle('open');
            const answer = item.querySelector('.faq-answer');
            answer.style.display = item.classList.contains('open') ? 'block' : 'none';
        });
    });

    // Form validation for contact form
    const contactForm = document.querySelector('#contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            const nameInput = document.querySelector('#name');
            const emailInput = document.querySelector('#email');
            const messageInput = document.querySelector('#message');
            if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
                alert('Please fill out all fields.');
                event.preventDefault();  // Prevent form submission if fields are empty
            }
        });
    }

    // Dynamic Greeting based on the time of day
    const greetingElement = document.querySelector('#greeting');
    const currentHour = new Date().getHours();
    if (greetingElement) {
        if (currentHour < 12) {
            greetingElement.textContent = 'Dobro jutro!'; // Good morning
        } else if (currentHour < 18) {
            greetingElement.textContent = 'Dobar dan!'; // Good afternoon
        } else {
            greetingElement.textContent = 'Dobro večer!'; // Good evening
        }
    }

    // Image Carousel (Slider) functionality
    let currentImageIndex = 0;
    const images = document.querySelectorAll('.carousel img');
    const nextButton = document.querySelector('.carousel-next');
    const prevButton = document.querySelector('.carousel-prev');
    
    function showImage(index) {
        images.forEach((img, i) => {
            img.style.display = (i === index) ? 'block' : 'none';
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', function() {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            showImage(currentImageIndex);
        });
    }

    if (prevButton) {
        prevButton.addEventListener('click', function() {
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
            showImage(currentImageIndex);
        });
    }

    // Initial call to display the first image in the carousel
    showImage(currentImageIndex);

    // Popup Modal functionality
    const modal = document.querySelector('#popupModal');
    const openModalButton = document.querySelector('#openModal');
    const closeModalButton = document.querySelector('#closeModal');
    
    if (openModalButton && modal) {
        openModalButton.addEventListener('click', () => {
            modal.style.display = 'block';
        });
    }
    
    if (closeModalButton) {
        closeModalButton.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    // Mobile menu toggle functionality
    const toggleButton = document.querySelector('#toggle-btn');
    const navList = document.querySelector('#nav-list');
    if (toggleButton && navList) {
        toggleButton.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
    }

});
;
