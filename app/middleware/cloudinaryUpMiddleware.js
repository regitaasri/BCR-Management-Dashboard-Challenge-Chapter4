const cloudinary = require("../../config/cloudinary.js");

const cloudinaryUpload = async (req, res, next) => {
  if (req.car?.id) {
    if (!req.file) {
      next();
    }
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
  }
  const fileBase64 = req.file.buffer.toString("base64");
  const file = `data:${req.file.mimetype};base64,${fileBase64}`;

  let uploadImg = await cloudinary.uploader.upload(
    file,
    { folder: "car-api-test" },
    function (error, result) {
      if (!!error) {
        console.log(error);
        return res.status(400).json({
          message: "Gagal upload file!",
        });
      }
    }
  );

  req.imgData = {
    url: uploadImg.secure_url,
    public_id: uploadImg.public_id,
  };
  next();
};

module.exports = cloudinaryUpload;
