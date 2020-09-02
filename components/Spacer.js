import React from 'react';

import { StyleSheet } from 'react-native';
import { Layout } from '@ui-kitten/components';
const Spacer = ({ children }) => {
	return <Layout style={styles.spacer}>{children}</Layout>;
};

const styles = StyleSheet.create({
	spacer: {
		margin: 15,
	},
});

export default Spacer;
