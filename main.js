document.addEventListener('DOMContentLoaded', () => {
      // Smooth scrolling for navigation links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();

          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
          });
        });
      });

      // How it works tabs functionality
      const tabButtons = document.querySelectorAll('.tab-button');
      const tabContents = document.querySelectorAll('.tab-content');

      tabButtons.forEach(button => {
        button.addEventListener('click', () => {
          // Deactivate all buttons and hide all contents
          tabButtons.forEach(btn => btn.classList.remove('active'));
          tabContents.forEach(content => content.classList.remove('active'));

          // Activate clicked button and show corresponding content
          button.classList.add('active');
          document.getElementById(button.dataset.target).classList.add('active');
        });
      });

      // Set initial active tab
      if (tabButtons.length > 0) {
        tabButtons[0].click();
      }

      // Optional: Add a scroll-reveal effect for sections
      const sections = document.querySelectorAll('section');
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('hidden');
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      sections.forEach(section => {
        section.classList.add('hidden'); // Add a hidden class initially
        observer.observe(section);
      });

      // Burger menu functionality
      const burgerMenu = document.querySelector('.burger-menu');
      const navRight = document.querySelector('.nav-right');

      burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('active');
        navRight.classList.toggle('active');

        // ARIA attributes
        const isExpanded = burgerMenu.getAttribute('aria-expanded') === 'true';
        burgerMenu.setAttribute('aria-expanded', !isExpanded);
      });

      // Close menu when a link is clicked
      const navLinks = document.querySelectorAll('.nav-links a');
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          if (navRight.classList.contains('active')) {
            burgerMenu.classList.remove('active');
            navRight.classList.remove('active');
            burgerMenu.setAttribute('aria-expanded', 'false');
          }
        });
      });
    });