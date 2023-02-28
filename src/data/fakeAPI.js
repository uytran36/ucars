import carBrands from "./data.json";
import fs from "fs";

export function getCarBrands() {
  console.log(carBrands);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        status: 200,
        data: carBrands,
      });
    }, 1000);
  });
}

export function getCarBrand(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const brand = carBrands.find((brand) => brand.id === id);
      resolve({
        status: 200,
        data: brand,
      });
    }, 1000);
  });
}

export function createCarBrand(brand) {
  return new Promise((resolve, reject) => {
    console.log({ brand });
    setTimeout(() => {
      carBrands.push({
        ...brand,
        id: carBrands.length + 1,
      });
      let json = JSON.stringify(carBrands);

      fs.writeFile("./data.json", json, "utf8", function (err) {
        if (err) {
          console.log("An error occured while writing JSON Object to File.");
          reject(err);
        }
      });

      resolve({
        status: 200,
        data: carBrands,
      });
    }, 1000);
  });
}

export function updateCarBrand(brand) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = carBrands.findIndex((b) => b.id === brand.id);
      carBrands[index] = brand;
      resolve({
        status: 200,
        data: carBrands,
      });
    }, 1000);
  });
}
