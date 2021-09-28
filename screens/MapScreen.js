import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import Map from "../components/Map";
import NavigateCard from "../components/NavigateCard";
import RideOptionsCard from "../components/RideOptionsCard";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/core";
import { setDestination, setOrigin } from "../slices/navSlice";
import { useDispatch } from "react-redux";

const MapScreen = () => {
	const Stack = createStackNavigator();
	const navigation = useNavigation();
	const dispatch = useDispatch();
	const menuNavigateAndCancelDestination = () => {
		// dispatch(setOrigin(null));
		// dispatch(setDestination(null));
		navigation.navigate("HomeScreen");
	};

	return (
		<View>
			<TouchableOpacity
				onPress={() => menuNavigateAndCancelDestination()}
				style={tw`bg-gray-100 absolute top-10 left-8 z-50 p-3 rounded-full shadow-lg `}
			>
				<Icon name="menu" />
			</TouchableOpacity>
			<View style={tw`h-1/2`}>
				<Map />
			</View>
			<View style={tw`h-1/2`}>
				<Stack.Navigator>
					<Stack.Screen
						name="NavigateCard"
						component={NavigateCard}
						options={{
							headerShown: false,
						}}
					/>
					<Stack.Screen
						name="RideOptionsCard"
						component={RideOptionsCard}
						options={{
							headerShown: false,
						}}
					/>
				</Stack.Navigator>
			</View>
		</View>
	);
};

export default MapScreen;

const styles = StyleSheet.create({});
