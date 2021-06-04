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
				{
					title: 'Finding Nemo',
					genre: 'Animation, Adventure, Comedy',
					actors: 'Albert Brooks, Ellen DeGeneres, Alexander Gould',
					director: 'Andrew StantonLee, Unkrich',
					avgRating: 0.0,
					description:
						'After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home.',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: 'Aladdin',
					genre: 'Animation, Adventure, Comedy, Romance, Fantasy',
					actors: 'Scott Weinger, Robin Williams, Linda Larkin',
					director: 'Ron Clements, John Musker',
					avgRating: 0.0,
					description:
						'A kindhearted street urchin and a power-hungry Grand Vizier vie for a magic lamp that has the power to make their deepest wishes come true.',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: 'Spirited Away',
					genre: 'Mystery, Fantasy, Animation, Adventure',
					actors: 'Daveigh Chase, Suzanne Pleshette, Miyu Irino',
					director: 'Hayao Miyazaki',
					avgRating: 0.0,
					description:
						"During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: 'The Grand Budapest Hotel',
					genre: 'Adventure, Comedy, Crime',
					actors: 'Ralph Fiennes, F. Murray Abraham, Mathieu Amalric',
					director: 'Wes Anderson',
					avgRating: 0.0,
					description:
						"A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: 'The Terminator',
					genre: 'Action, SciFi',
					actors: 'Arnold SchwarzeneggerLinda HamiltonMichael Biehn',
					director: 'James Cameron',
					avgRating: 0.0,
					description:
						"A human soldier is sent from 2029 to 1984 to stop an almost indestructible cyborg killing machine, sent from the same year, which has been programmed to execute a young woman whose unborn son is the key to humanity's future salvation.",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: 'Isle of Dogs',
					genre: 'Comedy, Drama',
					actors: 'Bryan Cranston, Koyu Rankin, Edward Norton',
					director: 'Wes Anderson',
					avgRating: 0.0,
					description:
						"Set in Japan, Isle of Dogs follows a boy's odyssey in search of his lost dog.",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: 'Monty Python and the Holy Grail',
					genre: 'Adventure, Comedy, Fantasy',
					actors: 'Graham Chapman, John Cleese, Eric Idle',
					director: 'Terry Gilliam, Terry Jones',
					avgRating: 0.0,
					description:
						'King Arthur and his Knights of the Round Table embark on a surreal, low-budget search for the Holy Grail, encountering many, very silly obstacles.',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: 'Mean Girls',
					genre: 'Comedy',
					actors: 'Lindsay Lohan, Jonathan Bennett, Rachel McAdams',
					director: 'Mark Waters',
					avgRating: 0.0,
					description:
						'Cady Heron is a hit with The Plastics, the A-list girl clique at her new school, until she makes the mistake of falling for Aaron Samuels, the ex-boyfriend of alpha Plastic Regina George.',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: "Ferris Bueller's Day Off",
					genre: 'Comedy',
					actors: 'Matthew Broderick, Alan Ruck, Mia Sara',
					director: 'John Hughes',
					avgRating: 0.0,
					description:
						'A high school wise guy is determined to have a day off from school, despite what the Principal thinks of that.',
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
