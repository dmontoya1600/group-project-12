'use strict';
module.exports = (sequelize, DataTypes) => {
	const Movie = sequelize.define(
		'Movie',
		{
			title: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			genre: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			actors: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			director: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			avgRating: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			description: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
		},
		{}
	);
	Movie.associate = function (models) {
		// associations can be defined here
		Movie.hasMany(models.Favorite, { foreignKey: 'movieId' });
		Movie.hasMany(models.Viewed_Movie, { foreignKey: 'movieId' });
	};
	return Movie;
};
