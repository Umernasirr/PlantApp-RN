const categories = [
	{
		id: 1,
		category: 'plants',
		name: 'Plants',
		tags: ['products', 'inspirations', 'shop'],
		count: 100,
		image: require('../assets/icons/plants.png'),
	},

	{
		id: 2,
		category: 'seeds',
		name: 'Seeds',
		tags: ['products', 'shop'],
		count: 20,
		image: require('../assets/icons/seeds.png'),
	},

	{
		id: 3,
		category: 'flowers',
		name: 'Flowers',
		tags: ['products', 'inspirations'],
		count: 50,
		image: require('../assets/icons/flowers.png'),
	},
	{
		id: 4,
		category: 'sprayers',
		name: 'Sprayers',
		tags: ['products', 'shop'],
		count: 35,
		image: require('../assets/icons/sprayers.png'),
	},

	{
		id: 5,
		category: 'pots',
		name: 'Pots',
		tags: ['products'],
		count: 35,
		image: require('../assets/icons/pots.png'),
	},

	{
		id: 6,
		category: 'fertilizers',
		name: 'Fertilizers',
		tags: ['products', 'shop'],
		count: 35,
		image: require('../assets/icons/fertilizers.png'),
	},
];

const products = [
	{
		id: 1,
		name: '16 Best Plants That Thrive In Your Bedroom',
		description:
			'Bedrooms deserve to be decorated with lush greenery just like every other room in the house – but it can be tricky to find a plant that thrives here. Low light, high humidity and warm temperatures mean only certain houseplants will flourish.',
		tags: ['Interior', '27 m²', 'Ideas'],
		images: [
			require('../assets/images/plants_1.png'),
			require('../assets/images/plants_2.png'),
			require('../assets/images/plants_3.png'),
			// showing only 3 images, show +6 for the rest
			require('../assets/images/plants_1.png'),
			require('../assets/images/plants_2.png'),
			require('../assets/images/plants_3.png'),
			require('../assets/images/plants_1.png'),
			require('../assets/images/plants_2.png'),
			require('../assets/images/plants_3.png'),
		],
	},
];

const explore = [
	//  images
	require('../assets/images/explore_1.png'),
	require('../assets/images/explore_2.png'),
	require('../assets/images/explore_3.png'),
	require('../assets/images/explore_4.png'),
	require('../assets/images/explore_5.png'),
	require('../assets/images/explore_6.png'),
];

const splash = require('../assets/icon.png');
const avatar = require('../assets/images/avatar.png');
const profile = {
	username: 'Lorem Ipsum',
	location: 'Lorem Ipsum Dolar',
	email: 'Lorem@ipsum.com',
	avatar: require('../assets/images/avatar.png'),
	budget: 1000,
	monthly_cap: 5000,
	notifications: true,
	newsletter: false,
};

export { categories, products, profile, explore, splash, avatar };
