const router = require("express").Router();
const controller = require("../app/controllers/carController.js");
const app = require("../app/index.js");
const middleware = require("../app/middleware/");

app.get("/", (req, res) => {
  read.render("index", {
    name: req.query.name || "Guest",
  });
});

router.get("/", (req, res) => {
  res.status(200).json({
    message: {
      from_us: ""
    },
  });
});

router.post(
  `/api/v1/cars`,
  middleware.upMemoryImg.single("picture"),
  middleware.cloudinaryUpload,
  controller.createCar
);
router.get(`/api/v1/cars`, controller.getAllCar);
router.get(`/api/v1/cars/:id`, middleware.checkCar, controller.getCarById);
router.delete(
  `/api/v1/cars/:id`,
  middleware.checkCar,
  middleware.cloudinaryDelete,
  controller.deleteCar
);
router.put(
  `/api/v1/cars/:id`,
  middleware.checkCar,
  middleware.upMemoryImg.single("picture"),
  middleware.cloudinaryUpload,
  controller.updateCar
);

module.exports = router;
