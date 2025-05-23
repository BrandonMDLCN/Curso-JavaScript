const { clear } = require("console");

/* 
Scenario
Create an images object that will be used to store the images. The object should have a list property, which will be an array of image objects and methods:

contains - which takes as its argument the title of the image and returns true if the image is already placed in the list (otherwise it returns false)
add – which takes three arguments (title, artist, and date) and creates a new object based on them and adds it to the list (if it has not already been added)
show - which displays all images on the list;
clear – which removes all objects from the list.
While creating an object, use the Image constructor prepared in the earlier task.

Test the script by calling the sequence:
*/
let Image = function (title, artist, date)
{
    this.title = title, 
    this.artist = artist, 
    this.date = date
};

let images = {
    list: [],
    contains(title) {
        let existe = false;
        for(titulo of this.list)
        {
            if(titulo.title === title)
            {
                existe = true;
                break;
            }
        }
        return existe
    },
    add(title, artist, date){
        if (!this.contains(title)){
            this.list.push(new Image(title, artist, date))
        }
    },
    show(){
        console.log(this.list);
    },
    clear(){
        this.list = [];
    }
};


images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.add('The Last Supper', 'Leonardo da Vinci', 1495);
images.add('The Starry Night', 'Vincent van Gogh', 1889);
images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.show();
// -> Mona Lisa (Leonardo da Vinci, 1503)
// -> Last Supper (Leonardo da Vinci, 1495)
// -> The Starry Night (Vincent van Gogh, 1889)
images.clear();
images.show();

/*
restuesta cisco
*/
let imagesa = {
    list: [],
    contains: function(title) {
        let retVal = false;
        for(image of this.list) {
            if(image.title === title) {
                retVal = true;
                break;
            }
        }
        return retVal;
    },
    add: function(title, artist, date) {
        if(!this.contains(title)) {
            this.list.push(new Image(title, artist, date));
        }
    },}