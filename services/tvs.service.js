const {models} = require('../libs/sequelize')

//Funcion para listar todos los TV
async function index() {
    const tvs = await models.tv.findAll();
    return tvs;
}

//Funcion para crear un nuevo TV
async function store(body) {
    const tvs = await models.tv.create(body);
    return tvs;
}

//Funcion para mostrar un TV
async function show(id) {
    const tvs = await models.tv.findByPk(id);
    return tvs;
}

//Funcion para actualizar un TV
async function update(id, body) {
    const [affectedRows, [updatedTV]] = await models.tv.update(body, {
        where: {
            id
        },
        returning: true
    });
    return updatedTV;
}

//Funcion para eliminar un TV
async function destroy(id) {
    const tvs = await models.tv.findByPk(id);
    const deletedTV = await models.tv.destroy({
        where: {
            id
        },
        returning: true
    });
    if(deletedTV){
        return tvs;
    }
    return null;
}

//Exportar las funciones del controlador
module.exports = {
    index,
    store,
    show,
    update,
    destroy
}