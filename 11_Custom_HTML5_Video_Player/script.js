'use strict';

/* Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/* Functions */

function togglePlay() {
    if(video.paused) {
        const method = video.paused ? 'play' : 'pause';
        video[method]();
}

function updateButton() {
    
}

/* Event Listeners */

video.addEventListener('click', togglePlay);
video.addEventListener('play', togglePlay);

toggle.addEventListener('click', togglePlay);

