'use strict';
module.exports = (sequelize, DataTypes) => {
  const Favorite = sequelize.define('Favorite', {
    movieId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Movie'
      }
    },
    userId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'User'
      }
    }
  }, {});
  Favorite.associate = function(models) {
    // associations can be defined here
  };
  return Favorite;
};
