const Joi = require('joi')

const schemaCupom = Joi.object({
  id: Joi.number().required(),
  code: Joi.string().required(),
  amount: Joi.string().required(),
  discount_type: Joi.string()
    .valid('fixed_cart', 'fixed_product', 'percent')
    .required(),
  description: Joi.string().allow('', null).required()
}).unknown(true)

const schemaListaCupons = Joi.array()
  .items(schemaCupom)
  .required()

module.exports = {
  schemaCupom,
  schemaListaCupons
}