import Video               from './Video.js';
import { uploadVideoToDb } from './api/index.js';
const videoPlayer       = document.getElementById("main-player");
const playButton        = document.getElementById("play-button");
const videoTitle        = document.getElementById("video-title");
const videoAuthor       = document.getElementById("video-author");
// const uploadVideoButton = document.getElementById("uploadVideo");
const testVideo         = document.getElementById("main-player")

document.addEventListener("DOMContentLoaded", () => {
  //TODO: start loading animation
  const form = document.getElementById("uploadVideo");
  form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      await uploadVideoToDb(formData);
  //TODO: end loading animation
  });
});

const testVideoInfo = {
  title: "Stabwound - Necrophagist intro guitar cover",
  author: "cg96"
};

videoTitle.textContent  = testVideoInfo.title;
videoAuthor.textContent = testVideoInfo.author;