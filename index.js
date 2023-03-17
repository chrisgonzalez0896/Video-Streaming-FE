//need to revert back to turning the file into raw binary, then create a instance of the Buffer class with that as a param
//for the constructor (highlight over Buffer to see the params)





import Video               from './Video.js';
import { uploadVideoToDb } from './api/index.js';
// import { Buffer } from 'buffer';

const videoPlayer       = document.getElementById("main-player");
const playButton        = document.getElementById("play-button");
const videoTitle        = document.getElementById("video-title");
const videoAuthor       = document.getElementById("video-author");
const uploadVideoButton = document.getElementById("video-submit");
const testVideo         = document.getElementById("main-player")

console.log(testVideo.childNodes[1].src);




const testVideoInfo = {
    title: "Stabwound - Necrophagist intro guitar cover",
    author: "cg96"
};

async function uploadVideo(videoObject) {
    //todo: loading animation
    await uploadVideoToDb(videoObject);
    //todo: end loading animation
};

async function processFile(file) {

    const reader = new FileReader();

    const binaryString = await new Promise((resolve, reject) => {
      reader.onload = (event) => {
        const binaryString = event.target.result;
        resolve(binaryString);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsBinaryString(file);
    });

    const encodedData = btoa(binaryString);
    // const decodedData = atob(encodedData);

    console.log('encodedData: ', encodedData);
    // console.log('decodedData: ', decodedData);

    return encodedData;

    // const reader = new FileReader();
    // let binaryString;
  
    // await new Promise((resolve) => {

    //     // const buf = new Buffer();
    //     reader.onload = function(event) {
    //         binaryString = reader.result;
    //         resolve(binaryString);
    //     };

    //     reader.readAsBinaryString(file);
    // });
    // const encodedData = Buffer.from(fileContents).toString('base64');
    // console.log('encodedData: ', encodedData)
    // return encodedData;

    // const reader = new FileReader();
    // const binaryString = await new Promise((resolve, reject) => {
    //   reader.onload = (event) => {
    //     const binaryString = event.target.result;
    //     resolve(binaryString);
    //   };
    //   reader.onerror = (error) => {
    //     reject(error);
    //   };
    //   reader.readAsBinaryString(file);
    // });
    // console.log('binaryString: ', binaryString)
    // let buf = Buffer.from(binaryString);
    // return binaryString;
};

function convertSize(oldSize){
    //the db takes in a small int here, so we store the # of mb the video is times ten, then subtract 32767
    return Math.ceil(oldSize / 100000) - 32767
};

uploadVideoButton.onchange = async (e) => {
    const videoToUpload       = e.target.files[0];
    const encodedBinaryString = await processFile(videoToUpload);
    const timestamp           = new Date();
    const sizeForDb           = convertSize(videoToUpload.size);
    console.log('ts in onchange: ', timestamp)
    const videoObject         = new Video('stabwound intro guitar cover', 'cg0896', 'some guitar playing', encodedBinaryString, timestamp, sizeForDb);
    //todo: make a guard statement here for if the video size is too big
    await uploadVideo(videoObject);
};

// playButton.addEventListener("click", () => {videoPlayer.paused ? videoPlayer.play() : videoPlayer.pause()});

videoTitle.textContent  = testVideoInfo.title;
videoAuthor.textContent = testVideoInfo.author;