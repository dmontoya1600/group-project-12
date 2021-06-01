'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    hashedPassword: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Collection, { foreignKey: 'userId' });
    User.hasMany(models.Viewed_Movie, { foreignKey: 'userId' });
    User.hasMany(models.Favorite, { foreignKey: 'userId' });
    User.hasMany(models.Review, { foreignKey: 'userId' });
  };
  return User;
};
