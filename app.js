if(process.env.NODE_ENV != "production"){
    require('dotenv').config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
// const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");


const Review = require("./models/review.js");

const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

const session = require("express-session");
const MongoStore = require("connect-mongo").default;
const flash = require("connect-flash");

const passport = require("passport");
//passport ke ander "pbkdf2" hashing algo use hoti hai
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");



//requiring ejs-mate for templating (Designing)
// works same as includes/partials
const ejsMate = require("ejs-mate"); 

//const Mongo_URL = "mongodb://127.0.0.1:27017/Havenly";
const dbUrl = process.env.ATLASDB_URL;

// console.log("DB URL:", dbUrl);
main()
    .then(() => {
        console.log("Connected to DB");
    })
    .catch((err) => {
        console.log(err);
    })

async function main() {
    await mongoose.connect(dbUrl);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

app.engine("ejs", ejsMate);

app.use(express.static(path.join(__dirname, "/public")));


const store = MongoStore.create({
    mongoUrl: dbUrl,
    crypto: {
        secret: process.env.SECRET,
    },
    touchafter: 24 * 60 * 60,  // it means agar session update nhi hoa toh 24 hours ke baad automatically update ho jayega
});

store.on("error", () => {
    console.log("ERROR in Mongo Session", err);
});


//Using Sessions
const sessionOptions = {
    store,
    secret : process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie : {
        expires : Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly : true,
    }
}

// app.get("/", (req,res) => {
//     res.send("Hi, I am root");
// });



app.use(session(sessionOptions));
app.use(flash());

//passport sessions ko bhi use kara hai taki user ko baar baar login na karna pade ek particular session ke liye
app.use(session(sessionOptions));
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate())); // Meaning: Passport ke ander jo humne localstrategy create kari hai, jo new user aaye woh localstrategy ke through authenticate hone chahiye
                                                       // aur un users ko authenticate karane ke liye authenticate method use hoga
passport.serializeUser(User.serializeUser());  // means user se related jitni bhi info hai usko session ke under store karate hai serialize karna user ko
passport.deserializeUser(User.deserializeUser()); // removing info related to user from session 

app.use((req,res,next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
})

//demo user
// app.get("/demouser", async (req,res) => {
//     let fakeUser = new User ({
//         email: "student@gmail.com",
//         username: "Mr Bisht"
//     });

//     let registeredUser = await User.register(fakeUser, "helloworld");
//     res.send(registeredUser);
// })



app.get("/", (req,res) => {
    res.redirect("/listings");
});


app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);


// app.get("/testListing", async(req,res) => {
//     let sampleListing = new Listing({
//         title: "My New Villa",
//         description: "By the beach",
//         price: 1200,
//         location: "Calangute, Goa",
//         country: "India",
//     });

//     await sampleListing.save();
//     console.log("Sample was saved");
//     res.send("Successful testing");
// });

app.use((req,res,next) => {
    next(new ExpressError(404, "Page Not Found"));
})

app.use((err,req,res,next) => {
    let { statusCode = 500 , message = "Something went wrong" } = err;
    res.status(statusCode).render("error.ejs", { err } );
    // res.status(statusCode).send(message);
});

app.listen(8080, () => {
    console.log("Server is listening to the port 8080");
});