const Sequelize = require('sequelize');
const connection = require('./db');

const answers = connection.define('answers', {
    body:{
        type: Sequelize.TEXT,
        allowNull:false
    },
    questionID:{
        type: Sequelize.INTEGER,
        allowNull:false
    }
})

answers.sync({force:false});

module.exports = answers;