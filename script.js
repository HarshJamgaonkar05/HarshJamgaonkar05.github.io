function showLetter() {
    const popup = document.getElementById('letter-popup');
    popup.classList.add('show');
    popup.style.display = 'flex';
}

function closeLetter() {
    const popup = document.getElementById('letter-popup');
    popup.classList.remove('show');
    setTimeout(() => popup.style.display = 'none', 300);
}

const timelineImages = [
    { src: 'Memory1.jpg', caption: 'Our first photo 💕 - 13th November 2024' },
    { src: 'Memory2.jpg', caption: 'Our First Cool Photo 🤣 - 15th November 2024' },
    { src: 'Memory3.jpg', caption: 'The Tapri Vali Walk 😊 - 17th November 2024 ' },
    { src: 'Memory4.jpg', caption: 'That moment jab realise hua ki bancho sunrise ho gaya 🌅 - 20th November 2024' },
    { src: 'Memory5.mp4', caption: 'First Kinder Joy ✨ - 20th November 2024' },
    { src: 'Memory6.jpg', caption: 'Our only "Normal Photo" xD 🎉 - 20th November 2024' },
    { src: 'Memory8.jpg', caption: 'Them Video Calls🥹🥹 - 23rd December 2024' },
    { src: 'Memory7.jpg', caption: 'Meri Pookie Yashvi 🧸 - 15th January 2025' },
    { src: 'Memory9.jpg', caption: 'The magical Night 💫 - 26th January 2025' },
    { src: 'Memory10.jpg', caption: 'Forever Content Coordi X Design Core - 17th February 2025' },
    { src: 'Memory13.jpg', caption: 'Yashvi ka baccha fr 👶 - 27th February 2025' },
    { src: 'Memory12.jpg', caption: 'In our Ghibli Era - 30th March 2025' },
    { src: 'Memory14.jpg', caption: 'Meri Hottie Yashvi - 15th March 2025' },
    { src: 'Memory15.jpg', caption: 'Meri Hottie Yashvi - 30th March 2025' },
    { src: 'Memory11.jpg', caption: 'Content Coordi X Design Core Signing off - 16th April 2025' },
    { src: 'Memory16.jpg', caption: 'Love you Forever💖 - 20th April 2025' }
];

let currentSlide = 0;

function showTimeline() {
    const popup = document.getElementById('timeline-popup');
    popup.classList.add('show');
    popup.style.display = 'flex';
    updateSlide();
}

function closeTimeline() {
    const popup = document.getElementById('timeline-popup');
    popup.classList.remove('show');
    setTimeout(() => popup.style.display = 'none', 300);
}

function updateSlide() {
    const mediaContainer = document.getElementById('timeline-media-container');
    const captionElement = document.getElementById('timeline-caption');

    mediaContainer.innerHTML = '';
    const currentItem = timelineImages[currentSlide];
    const extension = currentItem.src.split('.').pop().toLowerCase();

    if (extension === 'mp4') {
        const video = document.createElement('video');
        video.src = currentItem.src;
        video.controls = true;
        video.autoplay = true;
        video.classList.add('popup-media');
        mediaContainer.appendChild(video);
    } else {
        const img = document.createElement('img');
        img.src = currentItem.src;
        img.alt = 'Memory';
        img.classList.add('popup-media');
        mediaContainer.appendChild(img);
    }

    captionElement.textContent = currentItem.caption;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % timelineImages.length;
    updateSlide();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + timelineImages.length) % timelineImages.length;
    updateSlide();
}

window.addEventListener('load', () => {
    const bgMusic = document.getElementById('bg-music');
    const muteBtn = document.getElementById('mute-btn');

    setTimeout(() => {
        bgMusic.volume = 0.05;
        bgMusic.play().then(() => {
            muteBtn.innerText = '🔊';
        }).catch(() => {
            muteBtn.innerText = '🔇';
        });
    }, 500);

    document.body.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play().then(() => {
                muteBtn.innerText = '🔊';
            });
        }
    }, { once: true });

    muteBtn.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play();
            muteBtn.innerText = '🔊';
        } else {
            bgMusic.pause();
            muteBtn.innerText = '🔇';
        }
    });

    // 🎉 Confetti on load
    confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#b95c7a', '#f2acc5', '#ffc0cb'],
    });
});
