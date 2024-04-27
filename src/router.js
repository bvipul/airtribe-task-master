const router = require("express").Router();
const usersController = require("./controllers/users");
const usersAuthController = require("./controllers/users/auth");
const isLoggedIn = require("./middleware/isLoggedIn");


router.use("/users", usersAuthController);
router.use("/users", isLoggedIn, usersController);


module.exports = router;