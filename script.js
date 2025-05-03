document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    const navLinksArray = document.querySelectorAll('.nav-link, .btn-download-nav');
    navLinksArray.forEach(link => {
        link.addEventListener('click', function() {
            if (navLinks.classList.contains('active')) {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            item.classList.toggle('active');
        });
    });

    const demoExecuteBtn = document.getElementById('demoExecuteBtn');
    const demoOutput = document.getElementById('demoOutput');
    
    demoExecuteBtn.addEventListener('click', function() {
        demoOutput.innerHTML = `<p>> Running script...</p>`;
        
        setTimeout(() => {
            demoOutput.innerHTML += `<p>> Hello from Velora!</p>`;
            
            for (let i = 1; i <= 10; i++) {
                setTimeout(() => {
                    demoOutput.innerHTML += `<p>> Setting Part transparency to ${i/10}</p>`;
                    
                    demoOutput.scrollTop = demoOutput.scrollHeight;
                    
                    if (i === 10) {
                        setTimeout(() => {
                            demoOutput.innerHTML += `<p class="success-output">> Script executed successfully!</p>`;
                            demoOutput.scrollTop = demoOutput.scrollHeight;
                        }, 300);
                    }
                }, i * 100);
            }
        }, 500);
    });

    const demoOptions = document.querySelectorAll('.demo-option');
    demoOptions.forEach(option => {
        option.addEventListener('click', function() {
            demoOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
        });
    });

    function initAOS() {
        const animatedElements = document.querySelectorAll('[data-aos]');
        
        const checkInView = () => {
            animatedElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementTop < windowHeight - 100) {
                    element.classList.add('aos-animate');
                }
            });
        };
        
        checkInView();
        
        window.addEventListener('scroll', checkInView);
    }
    
    initAOS();

    const highlightPoints = document.querySelectorAll('.highlight-point');
    highlightPoints.forEach(point => {
        point.addEventListener('mouseenter', function() {
            this.querySelector('.highlight-text').style.opacity = '1';
        });
        
        point.addEventListener('mouseleave', function() {
            this.querySelector('.highlight-text').style.opacity = '0';
        });
    });

    const hero = document.querySelector('.hero');
    const glowEffect = document.createElement('div');
    glowEffect.classList.add('cursor-glow');
    hero.appendChild(glowEffect);
    
    hero.addEventListener('mousemove', function(e) {
        glowEffect.style.left = e.pageX + 'px';
        glowEffect.style.top = e.pageY + 'px';
    });

    const customCursor = document.querySelector('.custom-cursor');
    const cursorDot = document.querySelector('.cursor-dot');
    
    document.addEventListener('mousemove', function(e) {
        customCursor.style.left = e.clientX + 'px';
        customCursor.style.top = e.clientY + 'px';
        
        cursorDot.style.left = e.clientX + 'px';
        cursorDot.style.top = e.clientY + 'px';
    });
    
    document.addEventListener('mousedown', function() {
        customCursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
    });
    
    document.addEventListener('mouseup', function() {
        customCursor.style.transform = 'translate(-50%, -50%) scale(1)';
    });
    
    const interactiveElements = document.querySelectorAll('a, button, .demo-option, .feature-card, .faq-question');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            customCursor.style.width = '50px';
            customCursor.style.height = '50px';
            customCursor.style.mixBlendMode = 'normal';
            customCursor.style.backgroundColor = 'rgba(108, 92, 231, 0.2)';
            cursorDot.style.transform = 'translate(-50%, -50%) scale(1.5)';
        });
        
        element.addEventListener('mouseleave', function() {
            customCursor.style.width = '30px';
            customCursor.style.height = '30px';
            customCursor.style.mixBlendMode = 'difference';
            customCursor.style.backgroundColor = 'transparent';
            cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });

    const style = document.createElement('style');
    style.textContent = `
        .cursor-glow {
            position: absolute;
            width: 300px;
            height: 300px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(108, 92, 231, 0.15) 0%, rgba(108, 92, 231, 0) 70%);
            pointer-events: none;
            transform: translate(-50%, -50%);
            z-index: 0;
            transition: transform 0.1s ease;
        }
        
        .success-output {
            color: #27c93f;
        }
    `;
    document.head.appendChild(style);
    
    function animateCards() {
        const cards = document.querySelectorAll('.feature-card');
        const delay = 100;
        
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * delay);
        });
    }
    
    setTimeout(animateCards, 500);
    
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
    
    function addParticle(e) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        particle.style.left = e.clientX + 'px';
        particle.style.top = e.clientY + 'px';
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 1000);
    }
    
    document.querySelectorAll('.btn-primary').forEach(btn => {
        btn.addEventListener('click', addParticle);
    });
    
    const particleStyle = document.createElement('style');
    particleStyle.textContent = `
        .particle {
            position: fixed;
            width: 5px;
            height: 5px;
            background-color: var(--primary-color);
            border-radius: 50%;
            pointer-events: none;
            z-index: 999;
            animation: particle-animation 1s forwards;
        }
        
        @keyframes particle-animation {
            0% {
                transform: translate(-50%, -50%) scale(1);
                opacity: 1;
            }
            100% {
                transform: translate(-50%, -50%) translate(0, -80px) scale(0);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(particleStyle);
}); 