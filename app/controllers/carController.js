const Car = require("../models/car.js");

module.exports = {
  createCar: function (req, res) {
    try {
      const carDatas = req.body;
      const picture_url = req.imgData;
      const data = {
        ...carDatas,
        picture_url,
      };
      Car.create(data);
      res.status(201).json({
        message: "Success Add Data!",
      });
    } catch (error) {
      console.log(error.message);
    }
  },

  getAllCar: function (req, res) {
    let cars = Car.list();
    res.status(200).json({
      message: "Success Get All Car!",
      data: cars,
    });
  },

  getCarById: function (req, res) {
    const car = req.car;
    res.status(200).json({
      message: "Success Get Car!",
      data: car,
    });
  },

  deleteCar: function (req, res) {
    try {
      const { id } = req.car;
      Car.delete(id);
      res.status(200).json({
        message: "Success Delete Data!",
      });
    } catch (error) {
      console.log(error.message);
    }
  },

  updateCar: function (req, res) {
    try {
      const { id } = req.car;
      const updatedCar = req.body;
      const picture_url = req.imgData || req.car.picture_url;
      const data = {
        ...updatedCar,
        picture_url,
      };
      Car.update(id, data);
      res.status(201).json({
        message: "Success Update Data!",
      });
    } catch (error) {
      console.log(error.message);
    }
  },
};
