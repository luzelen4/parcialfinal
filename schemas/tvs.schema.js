const Joi = require('joi');

const id = Joi.number()
const marca = Joi.string().min(2).max(50)
const referencia = Joi.string().min(5).max(50)
const modelo = Joi.number()
const pulgadas = Joi.number()
const color = Joi.string().min(2).max(20)

const createTVSchema = Joi.object({
    marca: marca.required(),
    referencia: referencia.required(),
    modelo: modelo.required(),
    pulgadas: pulgadas.required(),
    color: color.required()
});

const updateTVSchema = Joi.object({
    marca: marca.required(),
    referencia: referencia.required(),
    modelo: modelo.required(),
    pulgadas: pulgadas.required(),
    color: color.required()
});

const getTVSchema = Joi.object({
    id: id.required()
});

module.exports = {
    createTVSchema,
    updateTVSchema,
    getTVSchema
}