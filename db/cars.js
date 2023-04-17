const fs = require("fs");
const path = require("path");
const dir = path.resolve();
const carsFilePath = path.join(dir, "db", "cars.json");

const save = (carsList) => {
  const stringifyData = JSON.stringify(carsList);
  fs.writeFileSync(carsFilePath, stringifyData);
  console.log(`Success add data!`);
};

module.exports = {
  save,
};
