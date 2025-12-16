<script>
        // Create particles
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 50;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                
                // Random position
                particle.style.left = Math.random() * 100 + '%';
                
                // Random size
                const size = Math.random() * 4 + 2;
                particle.style.width = size + 'px';
                particle.style.height = size + 'px';
                
                // Random animation delay
                particle.style.animationDelay = Math.random() * 15 + 's';
                
                // Random color
                const colors = ['#3b82f6', '#60a5fa', '#a855f7'];
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                particle.style.backgroundColor = randomColor;
                particle.style.boxShadow = `0 0 10px 2px ${randomColor}80`;
                
                particlesContainer.appendChild(particle);
            }
        }
        
        // Initialize particles
        createParticles();
        
        // Mobile Menu Toggle
        document.getElementById('menuToggle').addEventListener('click', function() {
            document.getElementById('navLinks').classList.toggle('active');
        });
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
                
                // Close mobile menu if open
                document.getElementById('navLinks').classList.remove('active');
            });
        });
        
        // Counter Animation
        function animateCounters() {
            const counters = document.querySelectorAll('.stat-number');
            
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                const increment = target / 100;
                
                function updateCounter() {
                    const current = +counter.innerText;
                    
                    if (current < target) {
                        counter.innerText = Math.ceil(current + increment);
                        setTimeout(updateCounter, 20);
                    } else {
                        counter.innerText = target;
                        
                        // Add symbol for specific counters
                        if (counter.getAttribute('data-target') === '100') {
                            counter.innerText = target + '%';
                        } else if (counter.getAttribute('data-target') === '95') {
                            counter.innerText = target + '%';
                        } else {
                            counter.innerText = target + '+';
                        }
                    }
                }
                
                updateCounter();
            });
        }
        
        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Trigger counter animation when stats section is visible
                    if (entry.target.classList.contains('stats-container')) {
                        animateCounters();
                        observer.unobserve(entry.target);
                    }
                }
            });
        }, observerOptions);
        
        // Observe stats container
        const statsContainer = document.querySelector('.stats-container');
        if (statsContainer) {
            observer.observe(statsContainer);
        }
        
        // Testimonial Slider
        let slideIndex = 1;
        
        function currentSlide(n) {
            showSlide(slideIndex = n);
        }
        
        function showSlide(n) {
            const slides = document.querySelectorAll('.testimonial-card');
            const dots = document.querySelectorAll('.dot');
            
            if (n > slides.length) { slideIndex = 1 }
            if (n < 1) { slideIndex = slides.length }
            
            // Move slider
            const slider = document.getElementById('testimonialSlider');
            slider.style.transform = `translateX(-${(slideIndex - 1) * 100}%)`;
            
            // Update dots
            for (let i = 0; i < dots.length; i++) {
                dots[i].classList.remove('active');
            }
            
            dots[slideIndex - 1].classList.add('active');
        }
        
        // Auto slide
        setInterval(() => {
            slideIndex++;
            showSlide(slideIndex);
        }, 5000);
        
        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('nav');
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(10, 10, 10, 0.95)';
                navbar.style.boxShadow = '0 5px 20px rgba(59, 130, 246, 0.2)';
            } else {
                navbar.style.background = 'rgba(10, 10, 10, 0.7)';
                navbar.style.boxShadow = 'none';
            }
        });
    </script>
