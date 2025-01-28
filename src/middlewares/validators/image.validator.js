import Joi from "joi";

const Schema = Joi.object({
  name: Joi.string().optional(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6),
});

const validate = (req, res, next) => {
  const { error } = Schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

export default validate;
