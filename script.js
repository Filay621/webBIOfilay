document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor-glow');
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    // Smooth cursor following
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Animate cursor
    function animateCursor() {
        const dx = mouseX - cursorX;
        const dy = mouseY - cursorY;
        
        cursorX += dx * 0.1;
        cursorY += dy * 0.1;
        
        cursor.style.transform = `translate(${cursorX - 10}px, ${cursorY - 10}px) scale(1)`;
        
        requestAnimationFrame(animateCursor);
    }
    
    animateCursor();

    // Cursor hover effects
    const hoverElements = document.querySelectorAll('.bio-content, .skill-card, .glowing-text');
    
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.transform = `translate(${cursorX - 10}px, ${cursorY - 10}px) scale(2)`;
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.style.transform = `translate(${cursorX - 10}px, ${cursorY - 10}px) scale(1)`;
        });
    });

    // Parallax effect for header
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        header.style.backgroundPosition = `center ${scrolled * 0.5}px`;
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.bio-content, .skill-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'all 0.6s ease-out';
        observer.observe(element);
    });

    // Автоматическая установка громкости при загрузке
    const audioPlayer = document.querySelector('audio');
    if (audioPlayer) {
        audioPlayer.volume = 0.1; // Установка громкости на 10%
    }

    // Добавление кнопок Steam
    const playerControls = document.querySelector('.player-controls');
    if (playerControls) {
        const steamButtons = document.createElement('div');
        steamButtons.className = 'steam-buttons';
        steamButtons.innerHTML = `
            <a href="https://steamcommunity.com/id/sosiskaFOX" target="_blank" class="steam-button neon-button">Steam Profile 1</a>
            <a href="https://steamcommunity.com/id/Filay621" target="_blank" class="steam-button neon-button">Steam Profile 2</a>
        `;
        playerControls.appendChild(steamButtons);
    }
}); 