const Joi = require('joi');

exports.createBannerValidator = (data) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    subtitle: Joi.string().required(),
  });

  return schema.validate(data);
};

exports.updateBannerValidator = (data) => {
  const schema = Joi.object({
    title: Joi.string().optional(),
    subtitle: Joi.string().optional(),
  });

  return schema.validate(data);
};
