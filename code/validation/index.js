const { Joi, validate } = require('express-validation');

const usernameSchema = {
  params: Joi.object({
    username: Joi.string().alphanum().min(3).required(),
  }),
};

function getPlayerUsername() {
  return validate(usernameSchema);
}

module.exports = {
  getPlayerUsername,
};
