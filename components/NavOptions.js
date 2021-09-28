import { useNavigation } from "@react-navigation/core";
import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import { selectOrigin } from "../slices/navSlice";

const data = [
	{
		id: "123",
		title: "Get a ride",
		image: "https://links.papareact.com/3pn",
		screen: "MapScreen",
	},
	{
		id: "456",
		title: "Order food",
		image: "https://links.papareact.com/28w",
		screen: "EatsScreen",
	},
];
const NavOptions = () => {
    const navigation = useNavigation();
	const origin = useSelector(selectOrigin);
	return (
		<FlatList
			data={data}
			horizontal
			keyExtractor={(item) => item.id}
			renderItem={({ item }) => (
				<TouchableOpacity
					disabled={!origin}
					onPress={() => navigation.navigate(item.screen)}
					style={tw` p-2 pl-6 pb-6 pt-4 bg-gray-200 shadow-md m-2 w-40`}
				>
					<View style={tw`${!origin && 'opacity-20'}`}>
						<Image
							style={{ width: 100, height: 120, resizeMode: "contain" }}
							source={{ uri: item.image }}
						/>
						<Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
						<Icon
							name="arrowright"
							type="antdesign"
							color="white"
							style={tw` mt-2 p-2 bg-gray-500 rounded-full w-10`}
						/>
					</View>
				</TouchableOpacity>
			)}
		/>
	);
};

export default NavOptions;
