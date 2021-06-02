'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		/*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
		return queryInterface.bulkInsert(
			'Movies',
			[
				{
					title: 'Jurassic Park 3',
					genre: 'Action, Adventure',
					actors: 'Sam Neill, Jeff Goldblum, William Macy',
					director: 'Joe Johnston',
					avgRating: 0.0,
					description:
						"A pragmatic paleontologist visiting an almost complete theme park is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: 'The Lord of the Rings',
					genre: 'Fantasy, Adventure',
					actors:
						'Elijah Wood, Ian McKellen, Orlando Bloom, Sean Astin',
					director: 'Peter Jackson',
					avgRating: 0.0,
					description:
						'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: 'The Conjuring: The Devil Made Me Do It',
					genre: 'Horror, Thriller',
					actors:
						'Vera Farmiga, Sterling Jerins, Patrick Wilson, Julian Hillard',
					director: 'Michael Chaves',
					avgRating: 0.0,
					description:
						"Paranormal investigators Ed and Lorraine Warren take on one of the most sensational cases of their careers after a cop stumbles upon a dazed and bloodied young man walking down the road. Accused of murder, the suspect claims demonic possession as his defense, forcing the Warrens into a supernatural inquiry unlike anything they've ever seen before.",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: 'Avatar',
					genre: 'Science Fiction',
					actors: 'Sam Worthington, Zoe Saldana, Stephen Lang',
					director: 'James Cameron',
					avgRating: 0.0,
					description:
						'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home. When his brother is killed in a robbery, paraplegic Marine Jake Sully decides to take his place in a mission on the distant world of Pandora.',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: 'Titanic',
					genre: 'Drama, Romance',
					actors: 'Leonardo DiCaprio, Kate Winslet, Billy Zane',
					director: 'James Cameron',
					avgRating: 0.0,
					description:
						'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: 'The Avengers',
					genre: 'Action',
					actors:
						'Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth',
					director: 'Joss Whedon',
					avgRating: 0.0,
					description:
						"Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: 'Toy Story',
					genre: 'Animated, Comedy',
					actors: '	Wallace Shawn, Tim Allen, Tom Hanks, Don Rickles',
					director: 'John Lasseter',
					avgRating: 0.0,
					description:
						"Woody (Tom Hanks), a good-hearted cowboy doll who belongs to a young boy named Andy (John Morris), sees his position as Andy's favorite toy jeopardized when his parents buy him a Buzz Lightyear (Tim Allen) action figure. Even worse, the arrogant Buzz thinks he's a real spaceman on a mission to return to his home planet. When Andy's family moves to a new house, Woody and Buzz must escape the clutches of maladjusted neighbor Sid Phillips (Erik von Detten) and reunite with their boy.",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: 'Resident Evil (film)',
					genre: 'Horror, Thriller',
					actors:
						'Milla Jovovich, Michelle Rodriguez, Eric Mabius, James Purefoy',
					director: 'Paul W. S. Anderson',
					avgRating: 0.0,
					description: `A virus has escaped into a secret facility called "The Hive," which chemically turns the staff (Umbrella Corporation) into man eating zombies and releasing the mutated lab animals that they were studying. The complex computer (The Red Queen) shuts down the base to prevent from infection.`,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		/*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
		return queryInterface.bulkDelete('Movies', null, {});
	},
};
