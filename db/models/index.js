const defineEvent = require("./tvs.model");

function defineModels( sequelize ){
    defineEvent(sequelize)
    //Other models go here
}

module.exports = defineModels