const mongoose = require("mongoose");
// elimino el warning de mongoose
mongoose.set("strictQuery", true);

// modelo de mongoose
const Ad = require("../models/ad");

// array de objetos
const data = require("./data-db");

function preguntaSiNo(texto) {
  return new Promise((resolve, reject) => {
    const interface = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    interface.question(texto, (respuesta) => {
      interface.close();
      if (respuesta.toLowerCase() === "si") {
        resolve(true);
        return;
      }
      resolve(false);
    });
  });
}

async function main() {
  const continuar = await preguntaSiNo("Estas seguro, seguro, seguro, que quieres borrar la base de datos? [n]");
  if (!continuar) {
    process.exit();
  }

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
