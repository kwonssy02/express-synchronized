const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db.sqlite',
    logging: false // default: console.log
});

const User = sequelize.define('User', {
    name: {
        type: Sequelize.STRING, // varchar 255
        unique: true
    }
});

module.exports = {
    Sequelize,
    sequelize,
    User
}

