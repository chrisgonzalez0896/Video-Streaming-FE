export default class Video {
    constructor(title, author, description, videoFile, timestamp, size){
        this.title       = title;
        this.author      = author;
        this.description = description;
        this.videoFile   = videoFile;
        this.timestamp   = timestamp;
        this.size        = size;
    }
}