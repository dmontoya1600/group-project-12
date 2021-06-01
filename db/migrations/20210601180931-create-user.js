'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userName: {
        allowNull: false,
        type: Sequelize.STRING(20),
        unique: true
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING(20)
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING(20)
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(100),
        unique: true
      },
      hashedPassword: {
        allowNull: false,
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Users');
  }
};
