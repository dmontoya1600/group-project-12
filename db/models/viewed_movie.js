'use strict';
module.exports = (sequelize, DataTypes) => {
  const Viewed_Movie = sequelize.define('Viewed_Movie', {
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
  Viewed_Movie.associate = function(models) {
    // associations can be defined here
    Viewed_Movie.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return Viewed_Movie;
};
