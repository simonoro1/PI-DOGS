const {DataTypes } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:')


module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('dog', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        weight: {
            type: DataTypes.JSON,
            allowNull: false,
        },
        height: {
            type: DataTypes.JSON,
            allowNull: false,
        },
        life_span: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        temperament: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.JSON,
        
        }       
    })
};

