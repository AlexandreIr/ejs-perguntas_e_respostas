const Sequelize = require('sequelize');
const connection = new Sequelize('question_and_answers', 'Alexandre', '46422278As@$',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;
