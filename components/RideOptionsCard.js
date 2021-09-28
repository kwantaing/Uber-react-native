import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	FlatList,
	Image,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useSelector } from "react-redux";
import { selectTravelTimeInformation } from "../slices/navSlice";

const RideOptionsCard = () => {
	const [selected, setSelected] = useState(null);
	const travelTimeInformation = useSelector(selectTravelTimeInformation);

	const data = [
		{
			id: "Uber-X-123",
			title: "Uber X",
			multiplier: 1,
			image: "https://links.papareact.com/3pn",
		},
		{
			id: "Uber-XL-456",
			title: "Uber XL",
			multiplier: 1.2,
			image: "https://links.papareact.com/5w8",
		},
		{
			id: "Uber-LUX-789",
			title: "Uber LUX",
			multiplier: 1.75,
			image: "https://links.papareact.com/7pf",
		},
	];

	const SURGE_CHARGE_RATE = 1.5;

	return (
		<View>
			<View style={tw`bg-white flex-grow`}>
				<TouchableOpacity style={tw`absolute top-3 left-5 p-3 rounded-full`}>
					<Icon name="chevron-left" type="fontawesome" />
				</TouchableOpacity>
				<Text style={tw`text-center py-5 text-xl`}>
					Select a Ride - {travelTimeInformation?.distance.text}
				</Text>
			</View>
			<FlatList
				data={data}
				keyExtractor={(item) => item.id}
				renderItem={({ item: { id, title, multiplier, image }, item }) => (
					<TouchableOpacity
						onPress={() => setSelected(item)}
						style={tw`flex-row justify-between items-center py-5 px-10 h-20 mb-1 ${
							id === selected?.id && "bg-gray-200"
						}`}
					>
						<Image
							style={{ width: 100, height: 120, resizeMode: "contain" }}
							source={{ uri: image }}
						/>
						<View style={tw`-ml-10 pt-5`}>
							<Text style={tw`text-xl font-semibold`}>{title}</Text>
							<Text>{travelTimeInformation?.duration.text}</Text>
						</View>
						<Text style={tw`text-xl`}>
							{`$${(
								Math.round(
									(0.1 *
										travelTimeInformation?.duration.value *
										SURGE_CHARGE_RATE *
										multiplier +
										Number.EPSILON) *
										100
								) / 1000
							).toFixed(2)}`}
						</Text>
					</TouchableOpacity>
				)}
			/>
			<View style={tw`mt-auto border-t border-gray-200`}>
				<TouchableOpacity
					disabled={!selected}
					style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}
				>
					<Text style={tw`text-center text-white text-xl`}>
						{" "}
						Choose {selected?.title}
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
