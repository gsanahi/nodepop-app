const mongoose = require("mongoose");
// elimino el warning de mongoose
mongoose.set("strictQuery", true);

// modelo de mongoose
const Ad = require("../models/ad");

// array de objetos
const data = require("./data-db");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/nodepop-app");
  // limpiar base de datos antes de inicializarla
  await Ad.collection.drop().catch(() => {});

  // me aseguro de crear todos los indices
  await Ad.ensureIndexes();

  // agrego los ads
  await Ad.insertMany(data);

  mongoose.disconnect();
}

main().catch((err) => console.log(err));
