const Joi = require('joi');

exports.courseCreateValidator = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    duration: Joi.number().required().min(1),
    seatLeft: Joi.number().required().min(0),
    shortDescription: Joi.string().required().max(255),
    description: Joi.string().required(),
    curriculum: Joi.string().required(),
    brochureLink: Joi.string().optional().uri(),
  });

  return schema.validate(data);
};

exports.courseUpdateValidator = (data) => {
  const schema = Joi.object({
    name: Joi.string(),
    duration: Joi.number().min(1),
    seatLeft: Joi.number().min(0),
    shortDescription: Joi.string().max(255),
    description: Joi.string(),
    curriculum: Joi.string(),
    brochureLink: Joi.string().uri(),
  });

  return schema.validate(data);
};
