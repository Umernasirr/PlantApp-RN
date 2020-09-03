import React from 'react';

import { Layout, Text, Avatar, Divider, Toggle, Button } from '@ui-kitten/components';
import CardDisplay from '../components/CardDisplay';

import { categories, avatar } from '../constants/mocks';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Spacer from '../components/Spacer';
const Settings = ({ navigation }) => {
	const [checkedNotif, setCheckedNotif] = React.useState(false);
	const [checkedNews, setCheckedNews] = React.useState(false);

	const onCheckedChangeNotif = (isChecked) => {
		setCheckedNotif(isChecked);
	};

	const onCheckedChangeNews = (isChecked) => {
		setCheckedNews(isChecked);
	};

	return (
		<Layout style={{ flex: 1, paddingTop: 50, alignContent: 'center' }}>
			<Spacer>
				{/* <Image /> */}
				<Layout style={styles.header}>
					<Text category="h2">Settings</Text>
					<Avatar style={styles.avatar} source={avatar} />
				</Layout>

				<Layout style={styles.info}>
					<Text category="h6" appearance="hint">
						Username
					</Text>
					<Layout style={{ flexDirection: 'row' }}>
						<Text>Umer</Text>
						<Text status="success" style={styles.edit}>
							Edit
						</Text>
					</Layout>
				</Layout>

				<Layout style={styles.info}>
					<Text category="h6" appearance="hint">
						Location
					</Text>
					<Layout style={{ flexDirection: 'row' }}>
						<Text>Pakistan</Text>
						<Text status="success" style={styles.edit}>
							Edit
						</Text>
					</Layout>
				</Layout>

				<Layout style={styles.info}>
					<Text category="h6" appearance="hint">
						Email
					</Text>
					<Layout style={{ flexDirection: 'row' }}>
						<Text>umernasirr@gmail.com </Text>
						<Text status="success" style={styles.edit}>
							Edit
						</Text>
					</Layout>
				</Layout>

				<Spacer>
					<Divider />
				</Spacer>

				<Spacer>
					<Layout style={{ flexDirection: 'row' }}>
						<Text appearance="hint" category="h5">
							Notifications
						</Text>
						<Toggle
							style={styles.toggle}
							status="success"
							checked={checkedNotif}
							onChange={onCheckedChangeNotif}
						></Toggle>
					</Layout>
					<Spacer />
					<Layout style={{ flexDirection: 'row' }}>
						<Text appearance="hint" category="h5">
							Newsletter
						</Text>
						<Toggle
							style={styles.toggle}
							status="success"
							checked={checkedNews}
							onChange={onCheckedChangeNews}
						></Toggle>
					</Layout>
				</Spacer>
				<Spacer>
					<Divider />
				</Spacer>

				<Spacer>
					<Spacer>
						<Button
							onPress={() => navigation.navigate('AuthScreenStack', { screen: 'Welcome' })}
							status="success"
						>
							Sign Out
						</Button>
					</Spacer>
				</Spacer>
				{/* 
				<Layout style={styles.nav}>
					<TouchableOpacity>
						<Text style={[styles.navText, styles.greenText]} category="h2">
							Products
						</Text>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text style={styles.navText} category="h2">
							Inspirations
						</Text>
					</TouchableOpacity>
					<TouchableOpacity>
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
					{categories.map((cat) => (
						<CardDisplay key={cat.id} text={cat.name} image={cat.image} count={cat.count} />
					))}
				</Layout> */}
			</Spacer>
		</Layout>
	);
};

const styles = StyleSheet.create({
	header: {
		flexDirection: 'row',

		marginBottom: 20,
		marginHorizontal: 20,
	},
	avatar: {
		position: 'absolute',
		right: 0,
	},

	info: {
		marginHorizontal: 20,
		marginVertical: 10,
	},
	edit: {
		position: 'absolute',
		right: 0,
		fontWeight: 'bold',
	},
	toggle: { position: 'absolute', right: 0 },
});

export default Settings;
