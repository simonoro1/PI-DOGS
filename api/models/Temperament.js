const {DataTypes } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:')


module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('temperament', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
      
    })
};
