// Music Player and Theme Toggle JavaScript
document.addEventListener('DOMContentLoaded', function() {
// Audio initialization - will be set when track loads
const audio = new Audio();
const playButton = document.getElementById('playButton');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const progressBar = document.getElementById('progressBar');
const progressContainer = document.getElementById('progressContainer');
const currentTimeSpan = document.getElementById('currentTime');
const durationSpan = document.getElementById('duration');
const trackTitle = document.querySelector('.music-player .track-title');

// Track list - using placeholder since audio files don't exist
const tracks = [
{ title: '🎵 Snowfall & You Relax', src: 'assets/audio/Snowfall_and_you_relax.mp3' },
{ title: '🎵 Another Track', src: 'assets/audio/another-track.mp3' },
];
let currentTrackIndex = 0;
let audioAvailable = false;

// Load track function
function loadTrack(index) {
const track = tracks[index];
if (track) {
trackTitle.textContent = track.title;

if (track.src) {
audio.src = track.src;
audio.load();
audioAvailable = true;
} else {
audioAvailable = false;
}

// Reset progress bar
progressBar.style.width = '0%';
currentTimeSpan.textContent = '0:00';
durationSpan.textContent = audioAvailable ? '0:00' : 'N/A';
}
}

// Play/Pause functionality
playButton.addEventListener('click', () => {
if (!audioAvailable) {
// Show demo message when no audio is available
trackTitle.textContent = '🎵 Audio files not available - Demo Mode';
return;
}

if (audio.paused) {
audio.play().then(() => {
playButton.textContent = '⏸';
playButton.dataset.playing = 'true';
gtag('event', 'play_music', {
event_category: 'Music Player',
event_label: 'Played: ' + tracks[currentTrackIndex].title,
value: 1
});
}).catch(e => {
console.log('Play failed:', e);
});
} else {
audio.pause();
playButton.textContent = '▶';
playButton.dataset.playing = 'false';
gtag('event', 'pause_music', {
event_category: 'Music Player',
event_label: 'Paused: ' + tracks[currentTrackIndex].title,
value: 1
});
}
});

// Previous track
prevButton.addEventListener('click', () => {
if (!audioAvailable) return;

currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
loadTrack(currentTrackIndex);
gtag('event', 'prev_track', {
event_category: 'Music Player',
event_label: 'Previous Track: ' + tracks[currentTrackIndex].title,
value: 1
});
});

// Next track
nextButton.addEventListener('click', () => {
if (!audioAvailable) return;

currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
loadTrack(currentTrackIndex);
gtag('event', 'next_track', {
event_category: 'Music Player',
event_label: 'Next Track: ' + tracks[currentTrackIndex].title,
value: 1
});
});

// Time update handler
audio.addEventListener('timeupdate', () => {
if (audioAvailable && audio.duration) {
const progress = (audio.currentTime / audio.duration) * 100;
progressBar.style.width = `${progress}%`;
currentTimeSpan.textContent = formatTime(audio.currentTime);
durationSpan.textContent = formatTime(audio.duration);
}
});

// Audio ended handler
audio.addEventListener('ended', () => {
if (!audioAvailable) return;

playButton.textContent = '▶';
playButton.dataset.playing = 'false';
// Auto-play next track
currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
loadTrack(currentTrackIndex);
if (tracks.length > 1) {
audio.play().catch(e => console.log('Auto-play next failed:', e));
}
});

// Progress bar click handler
progressContainer.addEventListener('click', (e) => {
if (audioAvailable && audio.duration) {
const width = progressContainer.clientWidth;
const clickX = e.offsetX;
audio.currentTime = (clickX / width) * audio.duration;
}
});

// Format time utility
function formatTime(seconds) {
if (isNaN(seconds) || seconds === Infinity) return '0:00';
const minutes = Math.floor(seconds / 60);
const secs = Math.floor(seconds % 60);
return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// Load initial track
loadTrack(currentTrackIndex);

// --- Theme Toggle Functionality ---
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference or default to 'dark'
const savedTheme = localStorage.getItem('theme') || 'dark';
body.setAttribute('data-theme', savedTheme);

// Update toggle button appearance
function updateThemeToggle() {
const currentTheme = body.getAttribute('data-theme');
const sunIcon = themeToggle.querySelector('.sun-icon');
const moonIcon = themeToggle.querySelector('.moon-icon');

if (currentTheme === 'light') {
sunIcon.style.opacity = '0';
moonIcon.style.opacity = '1';
} else {
sunIcon.style.opacity = '1';
moonIcon.style.opacity = '0';
}
}

// Theme toggle click handler
themeToggle.addEventListener('click', () => {
const currentTheme = body.getAttribute('data-theme');
const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
body.setAttribute('data-theme', newTheme);
localStorage.setItem('theme', newTheme);
updateThemeToggle();
});

// Initialize theme toggle appearance
updateThemeToggle();

// --- Typewriter Effect ---
const titles = ["Certified Salesforce Marketing Cloud Dev", "x9 Salesforce CRM Certified Professional", "Full-Stack Salesforce Professional"];
let titleIndex = 0;
let charIndex = 0;
const typewriterText = document.getElementById('typewriter-text');
const typewriterCursor = document.querySelector('.typewriter-cursor');
let isDeleting = false;
let typingSpeed = 100;
let deletingSpeed = 50;
let delayBetweenTitles = 1500;

function type() {
if (!typewriterText || !typewriterCursor) return;

const currentTitle = titles[titleIndex];
if (isDeleting) {
typewriterText.textContent = currentTitle.substring(0, charIndex - 1);
charIndex--;
} else {
typewriterText.textContent = currentTitle.substring(0, charIndex + 1);
charIndex++;
}

let currentTypingSpeed = isDeleting ? deletingSpeed : typingSpeed;

if (!isDeleting && charIndex === currentTitle.length) {
currentTypingSpeed = delayBetweenTitles;
isDeleting = true;
} else if (isDeleting && charIndex === 0) {
isDeleting = false;
titleIndex = (titleIndex + 1) % titles.length;
currentTypingSpeed = 500;
}

setTimeout(type, currentTypingSpeed);
}

type();

// --- Mobile Navigation ---
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
navToggle.addEventListener('click', () => {
navLinks.classList.toggle('active');
navToggle.classList.toggle('active');
});

// Smooth scroll for nav links
document.querySelectorAll('.scroll-link').forEach(anchor => {
anchor.addEventListener('click', function (e) {
e.preventDefault();
const targetId = this.getAttribute('href');
const targetElement = document.querySelector(targetId);
if (targetElement) {
targetElement.scrollIntoView({
behavior: 'smooth'
});
}

// Close mobile menu after clicking a link
if (navLinks.classList.contains('active')) {
navLinks.classList.remove('active');
navToggle.classList.remove('active');
}
});
});
}

// --- Music Player Scroll Hide Logic ---
const musicPlayerWrapper = document.querySelector('.music-player-wrapper');
if (musicPlayerWrapper) {
let lastScrollY = window.scrollY;
let hideTimeout;

function handleScroll() {
const currentScrollY = window.scrollY;
clearTimeout(hideTimeout);

if (currentScrollY > lastScrollY && currentScrollY > 100) {
hideTimeout = setTimeout(() => {
musicPlayerWrapper.classList.add('player-hidden');
}, 150);
} else {
musicPlayerWrapper.classList.remove('player-hidden');
}

lastScrollY = currentScrollY;
}

window.addEventListener('scroll', handleScroll);
handleScroll();
}

// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Error handling for audio loading
audio.addEventListener('error', (e) => {
console.log('Audio file not found - running in demo mode');
audioAvailable = false;
trackTitle.textContent = '🎵 Music Player (Demo Mode)';
playButton.textContent = '▶';
playButton.dataset.playing = 'false';
durationSpan.textContent = 'N/A';
});

audio.addEventListener('loadedmetadata', () => {
if (audioAvailable) {
durationSpan.textContent = formatTime(audio.duration);
}
});
});