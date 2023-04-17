const upMemoryImg = require("./imgMemoryMiddleware.js");
const checkCar = require("./checkCarMiddleware.js");
const cloudinaryUpload = require("./cloudinaryUpMiddleware.js");
const cloudinaryDelete = require("./cloudinaryDelMiddleware.js");

module.exports = {
  upMemoryImg,
  checkCar,
  cloudinaryUpload,
  cloudinaryDelete,
};
