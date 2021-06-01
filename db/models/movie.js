'use strict';
module.exports = (sequelize, DataTypes) => {
	const Movie = sequelize.define(
		'Movie',
		{
			title: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			genre: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			actors: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			director: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			avgRating: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			description: {
				type: Sequelize.TEXT,
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
