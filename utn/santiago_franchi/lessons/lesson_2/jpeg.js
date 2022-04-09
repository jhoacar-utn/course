const my_message = ()=>{
    console.log("Trabaje con imagenes JPEG");
    console.log(this.name);
};

const other_message = function(){
    console.log("Trabaje con imagenes JPEG"); 
    console.log(this.name); 
};

const object = {
    "name": "Example",
    "jpeg": my_message
}

object.jpeg();

const principal = {
    "logic": "Logic Pure"
}

const extractImage = ()=>{
    console.log("extract image");
}


module.exports.jpg_object = object;

module.exports = object;


