const { DataTypes } = require('sequelize');

function defineTV( sequelize ) {
    sequelize.define('tv', {
        //Model attributes are defined here
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        marca: {
            type: DataTypes.STRING,
            allowNull: false
        },
        referencia:{
            type: DataTypes.STRING,
            allowNull: false
        },
        modelo:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        pulgadas:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        color:{
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        //Other model options go here
        timestamps: false
    });
}

module.exports = defineTV;