'use strict';
module.exports = (sequelize, DataTypes) => {
  const Favorite = sequelize.define('Favorite', {
    movieId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Movie'
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User'
      }
    }
  }, {});
  Favorite.associate = function(models) {
    // associations can be defined here
    Favorite.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return Favorite;
};
