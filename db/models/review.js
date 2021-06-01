'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    rating: DataTypes.INTEGER,
    comment: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    userId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'User'
      }
    },
    movieId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Movie'
      }
    }
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.User, { foreignKey: 'userId' });
    Review.belongsTo(models.Movie, {foreignKey: 'movieId'})
  };
  return Review;
};
