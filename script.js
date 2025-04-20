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

    // Список всех музыкальных треков
    const musicTracks = [
        'music/Part-Time_Friends_-_Streets_and_Stories_63956883.mp3',
        'music/XdrianGM - Miracle.mp3'
    ];

    let currentTrackIndex = 0;
    let isPlaying = false;

    // Функция для загрузки и воспроизведения трека
    function playTrack(index) {
        const audioPlayer = document.querySelector('audio');
        if (audioPlayer) {
            currentTrackIndex = index;
            audioPlayer.src = musicTracks[index];
            audioPlayer.volume = 0.1; // Установка громкости на 10%
            
            // Обновляем название трека
            const trackName = document.querySelector('.track-name');
            if (trackName) {
                const fileName = musicTracks[index].split('/').pop().replace('.mp3', '');
                trackName.textContent = fileName;
            }

            // Если был на паузе, запускаем воспроизведение
            if (isPlaying) {
                audioPlayer.play();
            }
        }
    }

    // Функция для переключения на следующий трек
    function nextTrack() {
        currentTrackIndex = (currentTrackIndex + 1) % musicTracks.length;
        playTrack(currentTrackIndex);
    }

    // Функция для переключения на предыдущий трек
    function previousTrack() {
        currentTrackIndex = (currentTrackIndex - 1 + musicTracks.length) % musicTracks.length;
        playTrack(currentTrackIndex);
    }

    // Функция для переключения воспроизведения/паузы
    function togglePlay() {
        const audioPlayer = document.querySelector('audio');
        const playButton = document.querySelector('.play-button');
        
        if (audioPlayer) {
            if (audioPlayer.paused) {
                audioPlayer.play();
                isPlaying = true;
                playButton.textContent = '⏸';
            } else {
                audioPlayer.pause();
                isPlaying = false;
                playButton.textContent = '▶';
            }
        }
    }

    // Инициализация плеера
    const audioPlayer = document.querySelector('audio');
    if (audioPlayer) {
        // Создаем контейнер для плеера
        const playerContainer = document.createElement('div');
        playerContainer.className = 'player-container';
        
        // Добавляем название трека
        const trackNameDiv = document.createElement('div');
        trackNameDiv.className = 'track-name';
        playerContainer.appendChild(trackNameDiv);

        // Добавляем кнопки управления
        const controlButtons = document.createElement('div');
        controlButtons.className = 'control-buttons';
        controlButtons.innerHTML = `
            <button class="control-button previous" onclick="previousTrack()">⏮</button>
            <button class="control-button play-button" onclick="togglePlay()">▶</button>
            <button class="control-button next" onclick="nextTrack()">⏭</button>
        `;
        playerContainer.appendChild(controlButtons);

        // Добавляем кнопки Steam
        const steamButtons = document.createElement('div');
        steamButtons.className = 'steam-buttons';
        steamButtons.innerHTML = `
            <a href="https://steamcommunity.com/id/sosiskaFOX" target="_blank" class="steam-button">
                <img src="https://community.cloudflare.steamstatic.com/public/shared/images/header/logo_steam.svg" alt="Steam" class="steam-icon">
                sosiskaFOX
            </a>
            <a href="https://steamcommunity.com/id/Filay621" target="_blank" class="steam-button">
                <img src="https://community.cloudflare.steamstatic.com/public/shared/images/header/logo_steam.svg" alt="Steam" class="steam-icon">
                Filay621
            </a>
        `;
        playerContainer.appendChild(steamButtons);

        // Добавляем контейнер на страницу
        const playerControls = document.querySelector('.player-controls');
        if (playerControls) {
            playerControls.appendChild(playerContainer);
        }

        // Инициализируем первый трек
        playTrack(0);

        // Добавляем обработчик окончания трека
        audioPlayer.addEventListener('ended', () => {
            nextTrack();
        });

        // Делаем функции глобально доступными
        window.previousTrack = previousTrack;
        window.nextTrack = nextTrack;
        window.togglePlay = togglePlay;
    }

    // Автоматическая установка громкости при загрузке
    if (audioPlayer) {
        audioPlayer.volume = 0.1; // Установка громкости на 10%
    }
}); 