const cloudinary = require("../../config/cloudinary.js");

const cloudinaryDelete = async (req, res, next) => {
  await cloudinary.uploader.destroy(
    req.car.picture_url.public_id,
    function (error, result) {
      if (!!error) {
        console.log(error);
        return res.status(400).json({
          message: "Gagal Hapus file!",
        });
      }
    }
  );
  next();
};

module.exports = cloudinaryDelete;
