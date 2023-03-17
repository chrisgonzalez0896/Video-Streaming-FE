export default class Video {
    constructor(title, author, description, encodedBinaryString, timestamp, size){
        console.log('ay im constructing here')
        this.title               = title;
        this.author              = author;
        this.description         = description;
        this.encodedBinaryString = encodedBinaryString;
        this.timestamp           = timestamp;
        this.size                = size;
    }
}