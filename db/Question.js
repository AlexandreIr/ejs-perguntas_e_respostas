const Sequelize = require ('sequelize');
const connection = require('./db');

const questions = connection.define('questions', {
    title:{
        type: Sequelize.STRING,
        allowNull:false
    }, 
    description: {
        type: Sequelize.TEXT,
        allowNull:false
    }
});

questions.sync({force:false}).then(()=>{
});

module.exports = questions;