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
					title: 'Us',
					genre: 'Thriller, Horror',
					actors: `Lupita Nyong'o, Winston Duke, Elisabeth Moss`,
					director: 'Jordan Peele',
					avgRating: 0.0,
					description:
						'Accompanied by her husband, son and daughter, Adelaide Wilson returns to the beachfront home where she grew up as a child. Haunted by a traumatic experience from the past, Adelaide grows increasingly concerned that something bad is going to happen. Her worst fears soon become a reality when four masked strangers descend upon the house, forcing the Wilsons into a fight for survival.',
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
					title: 'A Quiet Place (2018)',
					genre: 'Science Fiction, Horror',
					actors: `Bryan Woods, Emily Blunt, John Krasinski`,
					director: 'John Krasinski',
					avgRating: 0.0,
					description:
						'In a post-apocalyptic world, a family is forced to live in silence while hiding from monsters with ultra-sensitive hearing. Two parents do what it takes to keep their children safe in a world full of creatures hunting every sound they can hear.',
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
					title: 'Hereditary (2018)',
					genre: 'Horror, Thriller, Supernatural',
					actors: `Toni Collette, Alex Wolff, Milly Shapiro`,
					director: 'Ari Aster',
					avgRating: 0.0,
					description:
						'When the matriarch of the Graham family passes away, her daughter and grandchildren begin to unravel cryptic and increasingly terrifying secrets about their ancestry, trying to outrun the sinister fate they have inherited.',
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
					title: 'As Above, So Below',
					genre: 'Horror, Thriller, Mystery',
					actors: `Perdita Weeks, Ben Feldman, Edwin Hodge`,
					director: 'John Erick Dowdle',
					avgRating: 0.0,
					description: `Archaeologist Scarlett Marlowe (Perdita Weeks) has devoted her whole life to finding one of history's greatest treasures: Flamel's Philosopher's Stone. According to legend, the artifact can grant eternal life and turn any metal into gold. When she learns that the stone is hidden underground in the Catacombs of Paris, she assembles a crew to guide and document her historic mission. As they begin their descent, the team-members have no way of knowing that they are entering their own personal hell.`,
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
					title: 'The Texas Chain Saw Massacre (1974)',
					genre: 'Horror, Slasher, Mystery',
					actors: `Marilyn Burns, Paul A. Partain, Edwin Neal`,
					director: 'Tobe Hooper',
					avgRating: 0.0,
					description: `When Sally (Marilyn Burns) hears that her grandfather's grave may have been vandalized, she and her paraplegic brother, Franklin (Paul A. Partain), set out with their friends to investigate. After a detour to their family's old farmhouse, they discover a group of crazed, murderous outcasts living next door. As the group is attacked one by one by the chainsaw-wielding Leatherface (Gunnar Hansen), who wears a mask of human skin, the survivors must do everything they can to escape.`,
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
					title: 'The Black Panther(2018)',
					genre: 'Science Fiction, Adventure, Fantasy',
					actors: `Chadwick Boseman, Michael B. Jordan, Lupita Nyong'o`,
					director: 'Ryan Coogler',
					avgRating: 0.0,
					description: `"Black Panther" follows T'Challa who, after the events of "Captain America: Civil War," returns home to the isolated, technologically advanced African nation of Wakanda to take his place as King. However, when an old enemy reappears on the radar, T'Challa's mettle as King and Black Panther is tested when he is drawn into a conflict that puts the entire fate of Wakanda and the world at risk.`,
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
				{
					title: 'Spider-Man: Into the Spider-Verse (2018)',
					genre: 'Science Fiction, Adventure, Action',
					actors: `Shameik Moore, Jake Johnson, Hailee Steinfeld`,
					director: 'Bob Persichetti',
					avgRating: 0.0,
					description: `Bitten by a radioactive spider in the subway, Brooklyn teenager Miles Morales suddenly develops mysterious powers that transform him into the one and only Spider-Man. When he meets Peter Parker, he soon realizes that there are many others who share his special, high-flying talents. Miles must now use his newfound skills to battle the evil Kingpin, a hulking madman who can open portals to other universes and pull different versions of Spider-Man into our world.`,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: 'Logan (2017)',
					genre: 'Science Fiction, Thriller, Drama',
					actors: `Hugh Jackman, Patrick Stewart, Richard E. Grant`,
					director: 'James Mangold',
					avgRating: 0.0,
					description: `In the near future, a weary Logan (Hugh Jackman) cares for an ailing Professor X (Patrick Stewart) at a remote outpost on the Mexican border. His plan to hide from the outside world gets upended when he meets a young mutant (Dafne Keen) who is very much like him. Logan must now protect the girl and battle the dark forces that want to capture her.`,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: 'Avengers: Endgame (2019)',
					genre: 'Science Fiction, Action, Adventure',
					actors: `Robert Downey Jr., Chris Evans, Mark Ruffalo`,
					director: 'Anthony Russo, Joe Russo',
					avgRating: 0.0,
					description: `Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe.`,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: 'Blade Runner 2049 (2017)',
					genre: 'Science Fiction, Action, Fantasy',
					actors: `Ryan Gosling, Harrison Ford, Ana de Armas`,
					director: 'Denis Villeneuve',
					avgRating: 0.0,
					description: `Officer K (Ryan Gosling), a new blade runner for the Los Angeles Police Department, unearths a long-buried secret that has the potential to plunge what's left of society into chaos. His discovery leads him on a quest to find Rick Deckard (Harrison Ford), a former blade runner who's been missing for 30 years.`,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: `Pan's Labyrinth (2006)`,
					genre: 'Fantasy, Drama',
					actors: `Sergi López, Maribel Verdú, Ivana Baquero`,
					director: 'Guillermo del Toro',
					avgRating: 0.0,
					description: `It's 1944 and the Allies have invaded Nazi-held Europe. In Spain, a troop of soldiers are sent to a remote forest to flush out the rebels. They are led by Capitan Vidal, a murdering sadist, and with him are his new wife Carmen and her daughter from a previous marriage, 11-year-old Ofelia. Ofelia witnesses her stepfather's sadistic brutality and is drawn into Pan's Labyrinth, a magical world of mythical beings.`,
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
