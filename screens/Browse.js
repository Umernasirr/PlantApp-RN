import React from 'react';
import { Layout, Text, Avatar, Divider } from '@ui-kitten/components';
import Spacer from '../components/Spacer';
import CardDisplay from '../components/CardDisplay';

import { categories, avatar } from '../constants/mocks';
import { StyleSheet } from 'react-native';
const Browse = () => {
	return (
		<Layout style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
			<Spacer>
				{/* <Image /> */}
				<Layout style={styles.header}>
					<Text category="h2">Browse</Text>
					<Avatar style={styles.avatar} source={avatar} />
				</Layout>

				<Layout
					style={{
						flexDirection: 'row',
						flexFlow: 'column-wrap',
						flexWrap: 'wrap',

						alignContent: 'center',
						justifyContent: 'center',
					}}
				>
					{categories.map((cat) => (
						<CardDisplay key={cat.id} text={cat.name} image={cat.image} count={cat.count} />
					))}
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
		marginBottom: 30,
	},
	avatar: {
		position: 'absolute',
		right: 0,
	},
});
export default Browse;
