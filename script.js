// Target date for countdown
const targetDate = new Date("January 1, 2026 00:00:00").getTime();

function updateTimer() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = d.toString().padStart(2, '0');
    document.getElementById("hours").innerText = h.toString().padStart(2, '0');
    document.getElementById("mins").innerText = m.toString().padStart(2, '0');
    document.getElementById("secs").innerText = s.toString().padStart(2, '0');
}

setInterval(updateTimer, 1000);
updateTimer();

function nextSlide(curr, next) {
    document.getElementById(`slide-${curr}`).classList.remove("active-slide");
    document.getElementById(`slide-${curr}`).classList.add("hidden");
    document.getElementById(`slide-${next}`).classList.remove("hidden");
    document.getElementById(`slide-${next}`).classList.add("active-slide");
}
// Opens a specific gift branch
function openSurprise(id) {
    document.getElementById('slide-6').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
    const song = document.getElementById('main-song');
const playIcon = document.querySelector('.play-icon');
const progressFill = document.querySelector('.progress-fill');

// Toggle Play/Pause
playIcon.addEventListener('click', () => {
    if (song.paused) {
        song.play();
        playIcon.innerHTML = '⏸'; // Change icon to pause
    } else {
        song.pause();
        playIcon.innerHTML = '▶'; // Change icon back to play
    }
});

// Update Progress Bar as song plays
song.addEventListener('timeupdate', () => {
    const percentage = (song.currentTime / song.duration) * 100;
    progressFill.style.width = percentage + '%';
});
}

// Returns to the Gift Grid from any branch
function closeSurprise(currentId) {
    document.getElementById(currentId).classList.add('hidden');
    document.getElementById('slide-6').classList.remove('hidden');
}

// Moves through a sequence (like Compliment 1 -> 2 -> 3)
function nextSubSlide(currentId, nextId) {
    document.getElementById(currentId).classList.add('hidden');
    document.getElementById(nextId).classList.remove('hidden');
}