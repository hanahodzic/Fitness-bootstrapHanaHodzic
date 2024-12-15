document.addEventListener('DOMContentLoaded', function() {

    // Glatan/tecan pomak za anchor linkove
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); 
            const targetId = this.getAttribute('href').slice(1);  // Dobivanje target section ID
            const targetElement = document.getElementById(targetId);

            // Scroll-uj tecno do target elementa
            window.scrollTo({
                top: targetElement.offsetTop - 50, //header visina
                behavior: 'smooth'
            });
        });
    });

    // Mijenjanje navbar background boje pri scrollanju
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('nav');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = '#444'; // Tamnija boja pri scroll
        } else {
            navbar.style.backgroundColor = '#333'; // Default background boja
        }
    });

    // Faq sa Accordion-style i toggle funkcijom
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            item.classList.toggle('open');
            const answer = item.querySelector('.faq-answer');
            answer.style.display = item.classList.contains('open') ? 'block' : 'none';
        });
    });

    // Form validacija za contact form
    const contactForm = document.querySelector('#contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            const nameInput = document.querySelector('#name');
            const emailInput = document.querySelector('#email');
            const messageInput = document.querySelector('#message');
            if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
                alert('Please fill out all fields.');
                event.preventDefault();
            }
        });
    }

    // Dynamic Greeting- zavisno od doba dana kada se gleda stranica
    const greetingElement = document.querySelector('#greeting');
    const currentHour = new Date().getHours();
    if (greetingElement) {
        if (currentHour < 12) {
            greetingElement.textContent = 'Dobro jutro!'; // jutro
        } else if (currentHour < 18) {
            greetingElement.textContent = 'Dobar dan!'; // dan
        } else {
            greetingElement.textContent = 'Dobro večer!'; // noc
        }
    }

    // Image Carousel (Slider) funkcionalnost
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

    // display prve slike u carousel
    showImage(currentImageIndex);

    // Popup Modal f.
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

    // Responsive-mobile meni toggle f.
    const toggleButton = document.querySelector('#toggle-btn');
    const navList = document.querySelector('#nav-list');
    if (toggleButton && navList) {
        toggleButton.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
    }

});
;
