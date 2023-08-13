const router = require("express").Router();
const { catchErrors } = require("../handlers/errorhandlers");
const userController = require("../controllers/usercontrollers");

router.post("/login", catchErrors(userController.login));
router.post("/register", catchErrors(userController.register));

module.exports = router;