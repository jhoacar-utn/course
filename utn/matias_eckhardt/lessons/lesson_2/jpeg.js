const my_message = () => {
  //Arrow function
  console.log("Trabaje con imagenes JPEG");
  console.log(this.name);
};

const other_message = function () {
  console.log("Trabaje con imagenes JPEG");
  console.log(this.name);
};

const object = {
  name: "Example",
  jpeg: my_message,
};

object.jpeg();

const principal = {
  logic: "Logic Pure",
};

const extractImage = () => {
  console.log("extract image");
};

const exportImage = () => {
  console.log("export image");
};

module.exports.extractImage = extractImage;
module.exports.exportImage = exportImage;

module.exports = principal;
