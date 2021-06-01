'use strict';
module.exports = (sequelize, DataTypes) => {
  const Collection = sequelize.define('Collection', {
    name: {
      type: Sequelize.STRING,
    },
    userId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'User'
      }
    }
  }, {});
  Collection.associate = function(models) {
    // associations can be defined here
    Collection.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return Collection;
};
