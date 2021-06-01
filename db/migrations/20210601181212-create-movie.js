'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      genre: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      actors: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      director: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      avgRating: {
        type: Sequelize.DECIMAL(2,1)
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Movies');
  }
};
