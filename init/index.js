const mongoose = require("mongoose");
const initData = require("./data");
const Listing = require("../models/listing");

const Mongo_URL = "mongodb://127.0.0.1:27017/Havenly";

main()
    .then(() => {
        console.log("Connected to DB");
    })
    .catch((err) => {
        console.log(err);
    })

async function main() {
    await mongoose.connect(Mongo_URL);
}

const initDB = async () => {
    await Listing.deleteMany({}); // cleaning data (agar database mai koi data pehle se hai toh woh delete ho jayega)

    initData.data = initData.data.map((obj) => ({...obj, owner: "69944d7a07599f40e4d102d1"}));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");

};

initDB();