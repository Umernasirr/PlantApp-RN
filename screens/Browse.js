import React, { useState } from 'react';
import { Layout, Text, Avatar, Divider } from '@ui-kitten/components';
import Spacer from '../components/Spacer';
import CardDisplay from '../components/CardDisplay';

import { categories, avatar } from '../constants/mocks';
import { StyleSheet, TouchableOpacity } from 'react-native';
const Browse = ({ navigation }) => {
	const [currentSelected, setCurrentSelected] = useState('Products');

	const [currentTag, setCurrentTag] = useState('products');

	return (
		<Layout style={{ flex: 1, paddingTop: 50, alignContent: 'center' }}>
			<Spacer>
				{/* <Image /> */}
				<Layout style={styles.header}>
					<Text category="h2">Browse</Text>
					<Avatar onPress={() => navigation.navigate('Settings')} style={styles.avatar} source={avatar} />
				</Layout>

				<Layout style={styles.nav}>
					<TouchableOpacity onPress={() => setCurrentTag('products')}>
						<Text style={[styles.navText, styles.greenText]} category="h2">
							Products
						</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => setCurrentTag('inspirations')}>
						<Text style={styles.navText} category="h2">
							Inspirations
						</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => setCurrentTag('shop')}>
						<Text style={styles.navText} category="h2">
							Shop
						</Text>
					</TouchableOpacity>
				</Layout>
				<Divider />
				<Spacer />
				<Layout
					style={{
						flexDirection: 'row',
						flexFlow: 'column-wrap',
						flexWrap: 'wrap',

						alignContent: 'center',
						justifyContent: 'center',
					}}
				>
					{categories.map((cat) => {
						{
							// cat.tags.map((tag) =>
							// 	tag === currentTag ? (
							// 		<CardDisplay key={cat.id} text={cat.name} image={cat.image} count={cat.count} />
							// 	) : null
							// );
							{
								return cat.tags.map((tag) => {
									if (tag === currentTag) {
										return (
											<CardDisplay
												key={cat.id}
												text={cat.name}
												image={cat.image}
												count={cat.count}
											/>
										);
									}
								});
							}
						}
					})}
				</Layout>
			</Spacer>
		</Layout>
	);
};

const styles = StyleSheet.create({
	header: {
		flexDirection: 'row',
		// borderColor: 'red',
		// borderWidth: 1,
		marginBottom: 20,
		marginHorizontal: 20,
	},
	avatar: {
		position: 'absolute',
		right: 0,
	},
	nav: {
		flexDirection: 'row',
		marginBottom: 15,
		marginHorizontal: 10,
	},
	navText: {
		fontSize: 16,
		paddingHorizontal: 10,
	},
	greenText: {
		color: '#00E096',
		fontWeight: 'bold',
		fontSize: 17,
	},
});
export default Browse;
