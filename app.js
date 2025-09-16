// Premium Western Architects Website JavaScript
// Enhanced with sophisticated animations and interactions - Fixed Navigation

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeNavigation();
    initializeScrollEffects();
    initializeAnimations();
    initializeCounters();
    initializeContactForm();
    initializePortfolio();
    initializeHeroInteractions();
    initializeMicroInteractions();
    
    console.log('Western Architects Premium Website Loaded Successfully! 🏗️');
});

// ===== NAVIGATION SYSTEM - FIXED =====
function initializeNavigation() {
    const navbar = document.getElementById('navbar');
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Mobile menu toggle with smooth animations
    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleMobileMenu();
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navMenu.contains(e.target) && !mobileMenu.contains(e.target)) {
                closeMobileMenu();
            }
        });
    }
    
    // Enhanced smooth scrolling with active link highlighting - FIXED
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            console.log('Navigation clicked:', targetId); // Debug log
            
            if (targetId && targetId.startsWith('#')) {
                const targetSection = document.querySelector(targetId);
                console.log('Target section found:', targetSection); // Debug log
                
                if (targetSection) {
                    // Calculate scroll position with offset for fixed header
                    const headerHeight = navbar.offsetHeight || 80;
                    const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    
                    // Smooth scroll to target
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    closeMobileMenu();
                    
                    // Update active link
                    updateActiveNavLink(this);
                    
                    console.log('Scrolling to:', targetPosition); // Debug log
                }
            }
        });
    });
    
    // Navbar scroll effects with performance optimization
    let ticking = false;
    let lastScrollY = 0;
    
    function updateNavbar() {
        const scrollY = window.pageYOffset;
        
        // Add scrolled class for styling
        if (scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Smart navbar hide/show
        if (scrollY > lastScrollY && scrollY > 200) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollY = scrollY;
        ticking = false;
        
        // Update active section highlighting
        updateActiveSection();
    }
    
    function requestNavbarUpdate() {
        if (!ticking) {
            requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestNavbarUpdate, { passive: true });
    
    function toggleMobileMenu() {
        const isActive = mobileMenu.classList.contains('active');
        
        if (isActive) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    }
    
    function openMobileMenu() {
        mobileMenu.classList.add('active');
        navMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Animate menu items
        const menuItems = navMenu.querySelectorAll('.nav-item');
        menuItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                item.style.transition = 'all 0.3s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }
    
    function closeMobileMenu() {
        mobileMenu.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
        
        // Reset menu item styles
        const menuItems = navMenu.querySelectorAll('.nav-item');
        menuItems.forEach(item => {
            item.style.transition = '';
            item.style.opacity = '';
            item.style.transform = '';
        });
    }
    
    function updateActiveNavLink(activeLink) {
        navLinks.forEach(link => link.classList.remove('active'));
        activeLink.classList.add('active');
    }
    
    function updateActiveSection() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.pageYOffset + 150;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
}

// ===== HERO INTERACTIONS - FIXED =====
function initializeHeroInteractions() {
    const heroCTA = document.querySelector('.hero-cta');
    const heroPortfolio = document.querySelector('.hero-portfolio');
    
    console.log('Hero CTA button:', heroCTA); // Debug log
    console.log('Hero Portfolio button:', heroPortfolio); // Debug log
    
    if (heroCTA) {
        heroCTA.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Hero CTA clicked'); // Debug log
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Smooth scroll to contact section
            const contactSection = document.querySelector('#contact');
            if (contactSection) {
                const navbar = document.getElementById('navbar');
                const headerHeight = navbar ? navbar.offsetHeight : 80;
                const targetPosition = contactSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                setTimeout(() => {
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }, 200);
                
                console.log('Scrolling to contact section'); // Debug log
            }
        });
    }
    
    if (heroPortfolio) {
        heroPortfolio.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Hero Portfolio clicked'); // Debug log
            
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Smooth scroll to portfolio section
            const portfolioSection = document.querySelector('#portfolio');
            if (portfolioSection) {
                const navbar = document.getElementById('navbar');
                const headerHeight = navbar ? navbar.offsetHeight : 80;
                const targetPosition = portfolioSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                setTimeout(() => {
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }, 200);
                
                console.log('Scrolling to portfolio section'); // Debug log
            }
        });
    }
}

// ===== SCROLL EFFECTS & ANIMATIONS =====
function initializeScrollEffects() {
    // Create intersection observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const fadeObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Add stagger effect for multiple elements
                const siblings = entry.target.parentNode.children;
                if (siblings.length > 1) {
                    Array.from(siblings).forEach((sibling, index) => {
                        if (sibling.classList.contains('fade-in')) {
                            setTimeout(() => {
                                sibling.classList.add('visible');
                            }, index * 100);
                        }
                    });
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for fade-in animation
    const animatedElements = document.querySelectorAll(`
        .service-card, .portfolio-card, .award-content, .team-card, 
        .stat-card, .contact-card, .credential-item, .section-header
    `);
    
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        fadeObserver.observe(el);
    });
    
    // Premium parallax effect for hero background
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const heroSection = document.querySelector('.hero');
        const heroContent = document.querySelector('.hero-content');
        
        if (heroSection && heroContent) {
            const rate = scrolled * -0.5;
            heroContent.style.transform = `translateY(${rate}px)`;
        }
    }
    
    let parallaxTicking = false;
    function requestParallaxUpdate() {
        if (!parallaxTicking) {
            requestAnimationFrame(updateParallax);
            parallaxTicking = true;
            setTimeout(() => { parallaxTicking = false; }, 16);
        }
    }
    
    window.addEventListener('scroll', requestParallaxUpdate, { passive: true });
}

// ===== ENHANCED ANIMATIONS =====
function initializeAnimations() {
    // Animate hero elements on load
    const heroElements = document.querySelectorAll('.hero-badge, .hero-title, .hero-tagline, .hero-description, .hero-buttons');
    
    heroElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(40px)';
        
        setTimeout(() => {
            element.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200 + 500);
    });
    
    // Animate service cards with hover effects
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-12px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Enhanced portfolio card interactions
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    portfolioCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            const overlay = this.querySelector('.portfolio-image-overlay');
            if (overlay) {
                overlay.style.opacity = '1';
            }
            const img = this.querySelector('.portfolio-img');
            if (img) {
                img.style.filter = 'brightness(0.7)';
                img.style.transition = 'filter 0.3s';
            }
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            const overlay = this.querySelector('.portfolio-image-overlay');
            if (overlay) {
                overlay.style.opacity = '0';
            }
            const img = this.querySelector('.portfolio-img');
            if (img) {
                img.style.filter = 'brightness(1)';
            }
        });
    });
    
    // Animate award timeline
    const awardItems = document.querySelectorAll('.award-item');
    const awardObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.3 });
    
    awardItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(50px)';
        item.style.transition = `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.2}s`;
        awardObserver.observe(item);
    });
}

// ===== ANIMATED COUNTERS =====
function initializeCounters() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    function animateCounter(element) {
        const target = parseInt(element.getAttribute('data-target'));
        if (!target) return;
        
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            
            if (current >= target) {
                element.textContent = target;
            } else {
                element.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            }
        };
        
        updateCounter();
    }
    
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.7 });
    
    statNumbers.forEach(stat => {
        counterObserver.observe(stat);
    });
}

// ===== PREMIUM CONTACT FORM =====
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (!contactForm) return;
    
    // Enhanced form validation
    const formInputs = contactForm.querySelectorAll('.form-control');
    
    formInputs.forEach(input => {
        // Real-time validation
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            clearFieldError(this);
        });
        
        // Enhanced focus effects
        input.addEventListener('focus', function() {
            this.parentNode.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentNode.classList.remove('focused');
        });
    });
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        handleFormSubmission(this);
    });
    
    function validateField(field) {
        const value = field.value.trim();
        const fieldName = field.name;
        let isValid = true;
        let errorMessage = '';
        
        // Required field validation
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = `${getFieldLabel(fieldName)} is required`;
        }
        
        // Email validation
        if (fieldName === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address';
            }
        }
        
        // Phone validation
        if (fieldName === 'phone' && value) {
            const phoneRegex = /^[\+]?[\d\s\-\(\)]{10,}$/;
            if (!phoneRegex.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid phone number';
            }
        }
        
        if (!isValid) {
            showFieldError(field, errorMessage);
        } else {
            clearFieldError(field);
        }
        
        return isValid;
    }
    
    function handleFormSubmission(form) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Validate all fields
        let isFormValid = true;
        const requiredFields = form.querySelectorAll('[required]');
        
        requiredFields.forEach(field => {
            if (!validateField(field)) {
                isFormValid = false;
            }
        });
        
        if (!isFormValid) {
            showNotification('Please correct the errors in the form.', 'error');
            return;
        }
        
        // Show loading state
        const submitButton = form.querySelector('button[type="submit"]');
        const originalContent = submitButton.innerHTML;
        
        submitButton.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="animate-spin">
                <path d="M21 12a9 9 0 11-6.219-8.56"/>
            </svg>
            <span>Sending...</span>
        `;
        submitButton.disabled = true;
        
        // Simulate form submission with premium feedback
        setTimeout(() => {
            // Success animation
            submitButton.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22,4 12,14.01 9,11.01"/>
                </svg>
                <span>Message Sent!</span>
            `;
            
            // Reset form and show success
            setTimeout(() => {
                form.reset();
                clearAllFieldErrors();
                submitButton.innerHTML = originalContent;
                submitButton.disabled = false;
                
                showNotification(
                    'Thank you for your message! We will get back to you within 24 hours.', 
                    'success'
                );
                
                // Trigger celebration animation
                createCelebrationEffect(submitButton);
                
            }, 1500);
            
        }, 2000);
        
        // Analytics tracking (would integrate with real analytics)
        console.log('Form submitted:', data);
    }
    
    function showFieldError(field, message) {
        clearFieldError(field);
        
        field.style.borderColor = '#ef4444';
        field.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';
        
        const errorElement = document.createElement('div');
        errorElement.className = 'field-error';
        errorElement.style.cssText = `
            color: #ef4444;
            font-size: 0.875rem;
            margin-top: 0.5rem;
            animation: fadeInUp 0.3s ease;
        `;
        errorElement.textContent = message;
        
        field.parentNode.appendChild(errorElement);
    }
    
    function clearFieldError(field) {
        field.style.borderColor = '';
        field.style.boxShadow = '';
        
        const existingError = field.parentNode.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }
    }
    
    function clearAllFieldErrors() {
        const errorElements = contactForm.querySelectorAll('.field-error');
        errorElements.forEach(error => error.remove());
        
        formInputs.forEach(input => {
            input.style.borderColor = '';
            input.style.boxShadow = '';
        });
    }
    
    function getFieldLabel(fieldName) {
        const labelMap = {
            'name': 'Name',
            'email': 'Email',
            'phone': 'Phone',
            'project-type': 'Project Type',
            'message': 'Message'
        };
        return labelMap[fieldName] || fieldName;
    }
}

// ===== PORTFOLIO INTERACTIONS =====
function initializePortfolio() {
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    
    portfolioCards.forEach(card => {
        card.addEventListener('click', function() {
            const title = this.querySelector('.portfolio-title')?.textContent || 'Project';
            const description = this.querySelector('.portfolio-description')?.textContent || 'Project description';
            const category = this.querySelector('.portfolio-category')?.textContent || 'General';
            const meta = this.querySelector('.portfolio-meta')?.textContent || '';
            const award = this.querySelector('.portfolio-award span')?.textContent || '';
            const imgSrc = this.querySelector('.portfolio-img')?.getAttribute('src') || '';
            const imgAlt = this.querySelector('.portfolio-img')?.getAttribute('alt') || title;
            showProjectModal({ title, description, category, meta, award, imgSrc, imgAlt });
        });
    });

    function showProjectModal({ title, description, category, meta, award, imgSrc, imgAlt }) {
        const modal = createModal();

        modal.innerHTML = `
            <div class="modal-overlay">
                <div class="modal-content">
                    <div class="modal-header">
                        <div class="modal-header-content">
                            <div class="modal-category">${category}</div>
                            <h3>${title}</h3>
                            ${meta ? `<p class="modal-meta">${meta}</p>` : ''}
                        </div>
                        <button class="modal-close" aria-label="Close modal">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="18" y1="6" x2="6" y2="18"/>
                                <line x1="6" y1="6" x2="18" y2="18"/>
                            </svg>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="modal-image-placeholder" style="background: none;">
                            ${imgSrc ? `<img src="${imgSrc}" alt="${imgAlt}" style="width:100%;height:200px;object-fit:cover;border-radius:12px;" />` : `<div class="modal-image-icon">🏗️</div>`}
                        </div>
                        <div class="modal-description">
                            <p>${description}</p>
                            <p>This project exemplifies our commitment to architectural excellence and innovative design solutions. Our team collaborated closely with the client to create a space that not only meets functional requirements but also inspires and delights.</p>
                            ${award ? `
                                <div class="modal-award">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
                                        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
                                        <path d="M4 22h16"/>
                                        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
                                        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
                                        <path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/>
                                    </svg>
                                    <span>${award}</span>
                                </div>
                            ` : ''}
                        </div>
                        <div class="modal-actions">
                            <button class="btn btn--primary btn--premium modal-contact-btn">
                                <span>Start Similar Project</span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M5 12h14M12 5l7 7-7 7"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Animate modal in
        requestAnimationFrame(() => {
            modal.querySelector('.modal-overlay').style.opacity = '1';
            modal.querySelector('.modal-content').style.transform = 'scale(1) translateY(0)';
        });

        // Event listeners
        const closeBtn = modal.querySelector('.modal-close');
        const overlay = modal.querySelector('.modal-overlay');
        const contactBtn = modal.querySelector('.modal-contact-btn');

        closeBtn.addEventListener('click', () => closeModal(modal));
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeModal(modal);
        });

        contactBtn.addEventListener('click', () => {
            closeModal(modal);
            setTimeout(() => {
                // Use the same scroll function as navigation
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                    const navbar = document.getElementById('navbar');
                    const headerHeight = navbar ? navbar.offsetHeight : 80;
                    const targetPosition = contactSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 300);
        });

        // Escape key handler
        function escapeHandler(e) {
            if (e.key === 'Escape') {
                closeModal(modal);
                document.removeEventListener('keydown', escapeHandler);
            }
        }
        document.addEventListener('keydown', escapeHandler);

        // Prevent body scroll
        document.body.style.overflow = 'hidden';
    }
    
    function createModal() {
        const modal = document.createElement('div');
        modal.className = 'project-modal';
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
        `;
        return modal;
    }
    
    function closeModal(modal) {
        const overlay = modal.querySelector('.modal-overlay');
        const content = modal.querySelector('.modal-content');
        
        overlay.style.opacity = '0';
        content.style.transform = 'scale(0.9) translateY(20px)';
        
        setTimeout(() => {
            if (modal.parentNode) {
                modal.parentNode.removeChild(modal);
            }
            document.body.style.overflow = '';
        }, 300);
    }
}

// ===== MICRO-INTERACTIONS =====
function initializeMicroInteractions() {
    // Enhanced button interactions
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            if (!this.disabled) {
                this.style.transform = 'translateY(-2px)';
            }
        });
        
        button.addEventListener('mouseleave', function() {
            if (!this.disabled) {
                this.style.transform = '';
            }
        });
        
        button.addEventListener('mousedown', function() {
            if (!this.disabled) {
                this.style.transform = 'translateY(0) scale(0.98)';
            }
        });
        
        button.addEventListener('mouseup', function() {
            if (!this.disabled) {
                this.style.transform = 'translateY(-2px)';
            }
        });
    });
    
    // Enhanced card hover effects
    const cards = document.querySelectorAll('.service-card, .team-card, .contact-card, .stat-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
    
    // Logo hover effect
    const logo = document.querySelector('.nav-logo');
    if (logo) {
        logo.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        logo.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    }
}

// ===== UTILITY FUNCTIONS =====
function showNotification(message, type = 'info', duration = 5000) {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => {
        notification.remove();
    });
    
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    
    const colors = {
        success: '#10b981',
        error: '#ef4444',
        warning: '#f59e0b',
        info: '#3b82f6'
    };
    
    const icons = {
        success: '✓',
        error: '✗',
        warning: '⚠',
        info: 'ℹ'
    };
    
    notification.innerHTML = `
        <div class="notification-content">
            <div class="notification-icon">${icons[type]}</div>
            <div class="notification-message">${message}</div>
            <button class="notification-close" aria-label="Close notification">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
            </button>
        </div>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${colors[type]};
        color: white;
        padding: 16px 20px;
        border-radius: 12px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        z-index: 10000;
        transform: translateX(100%);
        transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        max-width: 400px;
        font-size: 14px;
        font-weight: 500;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    requestAnimationFrame(() => {
        notification.style.transform = 'translateX(0)';
    });
    
    // Close button
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => removeNotification(notification));
    
    // Auto remove
    setTimeout(() => removeNotification(notification), duration);
}

function removeNotification(notification) {
    if (notification && notification.parentNode) {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }
}

function createCelebrationEffect(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Create particles
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 8px;
            height: 8px;
            background: #d69e2e;
            border-radius: 50%;
            pointer-events: none;
            z-index: 10001;
            left: ${centerX}px;
            top: ${centerY}px;
        `;
        
        document.body.appendChild(particle);
        
        // Animate particle
        const angle = (i / 12) * Math.PI * 2;
        const velocity = 100 + Math.random() * 50;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        particle.animate([
            { 
                transform: 'translate(0, 0) scale(1)',
                opacity: 1
            },
            { 
                transform: `translate(${vx}px, ${vy}px) scale(0)`,
                opacity: 0
            }
        ], {
            duration: 800,
            easing: 'cubic-bezier(0.16, 1, 0.3, 1)'
        }).onfinish = () => {
            particle.remove();
        };
    }
}

// ===== PERFORMANCE OPTIMIZATIONS =====
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for high-frequency events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ===== DYNAMIC STYLES =====
// Add dynamic styles for notifications and modals
const dynamicStyles = document.createElement('style');
dynamicStyles.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
    
    .animate-spin {
        animation: spin 1s linear infinite;
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 12px;
    }
    
    .notification-icon {
        font-weight: bold;
        font-size: 16px;
        flex-shrink: 0;
    }
    
    .notification-message {
        flex: 1;
        line-height: 1.4;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: inherit;
        cursor: pointer;
        padding: 4px;
        border-radius: 4px;
        opacity: 0.8;
        transition: opacity 0.2s, background 0.2s;
        flex-shrink: 0;
    }
    
    .notification-close:hover {
        opacity: 1;
        background: rgba(255, 255, 255, 0.1);
    }
    
    .modal-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        opacity: 0;
        transition: opacity 0.3s ease;
        backdrop-filter: blur(5px);
    }
    
    .modal-content {
        background: var(--color-white, white);
        border-radius: 16px;
        max-width: 600px;
        width: 100%;
        max-height: 90vh;
        overflow-y: auto;
        transform: scale(0.9) translateY(20px);
        transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    }
    
    .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        padding: 32px 32px 0;
        gap: 20px;
    }
    
    .modal-header-content {
        flex: 1;
    }
    
    .modal-category {
        display: inline-block;
        background: var(--color-gold, #d69e2e);
        color: white;
        padding: 4px 12px;
        border-radius: 50px;
        font-size: 12px;
        font-weight: 600;
        margin-bottom: 12px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }
    
    .modal-header h3 {
        color: var(--color-navy-dark, #1a365d);
        margin: 0 0 8px 0;
        font-size: 1.5rem;
        line-height: 1.3;
    }
    
    .modal-meta {
        color: var(--color-gray-600, #6b7280);
        font-size: 0.875rem;
        margin: 0;
    }
    
    .modal-close {
        background: none;
        border: none;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--color-gray-500, #6b7280);
        cursor: pointer;
        transition: all 0.2s;
        flex-shrink: 0;
    }
    
    .modal-close:hover {
        background: var(--color-gray-100, #f3f4f6);
        color: var(--color-gray-700, #374151);
    }
    
    .modal-body {
        padding: 32px;
    }
    
    .modal-image-placeholder {
        width: 100%;
        height: 200px;
        background: linear-gradient(135deg, #1a365d 0%, #2d3748 100%);
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 24px;
        position: relative;
        overflow: hidden;
    }
    
    .modal-image-icon {
        font-size: 4rem;
        opacity: 0.3;
        color: white;
    }
    
    .modal-description p {
        color: var(--color-gray-700, #374151);
        line-height: 1.7;
        margin-bottom: 16px;
    }
    
    .modal-award {
        display: flex;
        align-items: center;
        gap: 8px;
        color: var(--color-gold, #d69e2e);
        font-weight: 600;
        font-size: 0.95rem;
        margin: 20px 0;
        padding: 12px 16px;
        background: rgba(214, 158, 46, 0.1);
        border-radius: 8px;
        border: 1px solid rgba(214, 158, 46, 0.2);
    }
    
    .modal-actions {
        margin-top: 32px;
        padding-top: 24px;
        border-top: 1px solid var(--color-gray-200, #e5e7eb);
    }
    
    .field-error {
        animation: fadeInUp 0.3s ease;
    }
    
    .focused .form-label {
        color: var(--color-gold, #d69e2e);
    }
    
    .nav-link.active {
        color: var(--color-navy-dark, #1a365d);
        font-weight: 600;
    }
    
    .nav-link.active::after {
        width: 100%;
    }
    
    @media (max-width: 768px) {
        .modal-content {
            margin: 20px;
            max-height: calc(100vh - 40px);
        }
        
        .modal-header,
        .modal-body {
            padding: 24px 20px;
        }
        
        .modal-header {
            padding-bottom: 0;
        }
        
        .modal-actions {
            margin-top: 24px;
            padding-top: 20px;
        }
        
        .modal-header h3 {
            font-size: 1.25rem;
        }
    }
`;

document.head.appendChild(dynamicStyles);