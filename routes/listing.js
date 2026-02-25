const express = require("express");
const router = express.Router();

const wrapAsync = require("../utils/wrapAsync.js");

const Listing = require("../models/listing.js");

const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");

const listingController = require("../controllers/listing.js");

const multer = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage })

//combinig index and create route
router.route("/")
.get(wrapAsync(listingController.index))

.post(isLoggedIn, validateListing, upload.single('listing[image]') ,wrapAsync(listingController.createListing))

//New Route
router.get("/new", isLoggedIn, listingController.renderNewForm);

//combining show and update and delete route
router.route("/:id")
.get(wrapAsync(listingController.showListing))
.put(isLoggedIn, isOwner,upload.single('listing[image]') ,validateListing,wrapAsync(listingController.updateListing))
.delete( isLoggedIn, isOwner, wrapAsync(listingController.destroyListing))


//Index Route
// router.get("/", wrapAsync(listingController.index));
// meaning: router ke pass fet req aayi hamare root route ke pass waise hi index naam ka callback execute ho jaye



//Show Route
//router.get("/:id", wrapAsync(listingController.showListing));

//Create Route
// router.post("/",isLoggedIn, validateListing, wrapAsync(listingController.createListing));

//Edit Route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm));

//Update Route
//router.put("/:id", isLoggedIn, isOwner, validateListing,wrapAsync(listingController.updateListing));

//delete route
//router.delete("/:id", isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));

module.exports = router;