const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const passportLocalMongoose = require("passport-local-mongoose").default;

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    } 
    // Username and password(with hashed and salted) passport local khud hi add kr dega
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);