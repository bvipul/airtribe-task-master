const { body } = require("express-validator");

const registerUserValidator = [
  body("name")
    .notEmpty()
    .withMessage("name can't be empty"),
  body("email")
    .notEmpty()
    .withMessage("email can't be empty")
    .isEmail()
    .withMessage("must be a valid email"),
  body("password")
    .notEmpty()
    .withMessage("password can't be empty")
];

const loginUserValidator = [
  body("email")
    .notEmpty()
    .withMessage("email can't be empty")
    .isEmail()
    .withMessage("must be a valid email"),
  body("password")
    .notEmpty()
    .withMessage("password can't be empty")
];

const updateProfileValidator = [
  body("name")
    .optional()
    .isString()
    .withMessage("name must be a string"),
  body("email")
    .optional()
    .isEmail()
    .withMessage("must be a valid email")
];

module.exports = {
  registerUserValidator,
  loginUserValidator,
  updateProfileValidator
};