import Joi from "joi";

const userSchema = Joi.object({
  name: Joi.string().optional(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6),
});

const validateUser = (req, res, next) => {
  const { error } = userSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

export default validateUser;
