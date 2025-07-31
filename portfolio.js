
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    mobileMenuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      mobileMenuBtn.innerHTML = navMenu.classList.contains('active')
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('#nav-menu a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
      });
    });

    // Active link highlighting
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', () => {
      let current = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - 300) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    });

    // Form submission
    function sendMessage() {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      // In a real implementation, you would send this data to a server
      console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

      // Show success message
      alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon.`);

      // Reset form
      document.getElementById('contact-form').reset();

      return false; // Prevent form submission for this demo
    }
 