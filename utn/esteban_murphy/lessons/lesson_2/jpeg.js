
const my_message = ()=>{ //arrow function
    console.log("Working with images JPEG")
    console.log(this.name);

};

const other_message = function(){
    console.log("Working with images JPEG")
    console.log(this.name);
};

const object = {
    "name" : "Example",
    "jpeg" : other_message
}

object.jpeg();

const principal = {
    "logic" : "Logic Pure"
}

const extractImage = ()=>{
    console.log("extract image");
}

const exportImage = ()=>{
    console.log("export image");
}

module.exports.extractImage = extractImage;
module.exports.exportImage = exportImage;

module.exports = principal;