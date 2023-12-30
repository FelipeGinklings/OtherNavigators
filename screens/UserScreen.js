import { View, Text, Button, StyleSheet } from 'react-native';

function UserScreen({ navigation }) {
	const openDrawerHandler = () => {
		navigation.toggleDrawer();
	};

	return (
		<View style={styles.rootContainer}>
			<Text>
				This is the <Text style={styles.highlight}>"User"</Text> screen!
			</Text>
			<View style={{ marginTop: 20 }}>
				<Button title="Open Drawer" onPress={openDrawerHandler} />
			</View>
		</View>
	);
}

export default UserScreen;

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	highlight: {
		fontWeight: 'bold',
		color: '#eb1064',
	},
});
