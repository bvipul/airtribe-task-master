const {
  updateProfileValidator,
} = require("../../validators/user");
const validateRequestSchema = require("../../middleware/validateRequestSchema");
const userService = require("../../services/user");

const usersController = () => {
  const router = require("express").Router();

  router.put("/profile", updateProfileValidator, validateRequestSchema, async (req, res) => {
    const user = req.user;
  
    const {
      name,
      email
    } = req.body;
  
    const userFromDB = await userService.getById(user.id);
  
    if (name) {
      userFromDB.name = name;
    }
  
    if (email) {
      userFromDB.email = email;
    }
  
    await userFromDB.save();
  
    return res.status(200).json({
      message: "Profile udated successfully"
    });
  });

  router.get("/profile", async (req, res) => {
    const user = req.user;

    const userFromDB = await userService.getById(user.id);

    return res.status(200).json({
      user: userFromDB.apiResponse()
    });
  });

  return router;
};

module.exports = usersController();