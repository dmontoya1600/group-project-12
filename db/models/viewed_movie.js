'use strict';
module.exports = (sequelize, DataTypes) => {
  const Viewed_Movie = sequelize.define('Viewed_Movie', {
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
  Viewed_Movie.associate = function(models) {
    // associations can be defined here
  };
  return Viewed_Movie;
};
