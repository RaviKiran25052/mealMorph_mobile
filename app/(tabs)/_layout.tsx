import React from "react";
import { Tabs } from "expo-router";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const TabBarIcon = ({ name, focused, color, label }: {
	name: string,
	focused: boolean,
	color: string,
	label: string
}) => (
	<View className={focused ? "flex-row w-full min-w-[90px] h-full min-h-14 justify-center items-center bg-orange-200 border-2 border-orange-600 rounded-full" : ""}>
		<Icon name={name} size={20} color={color} />
		{focused && <Text className="text-orange-500 font-semibold ml-2">{label}</Text>}
	</View>
);

const _layout = () => {
	return (
		<Tabs
			screenOptions={{
				tabBarStyle: {
					backgroundColor: "#ea580c",
					borderRadius: 50,
					marginBottom: 20,
					marginHorizontal: 20,
				},
				tabBarShowLabel: false,
				tabBarLabelPosition:"beside-icon",
				tabBarActiveTintColor: "#ea580c",
				tabBarInactiveTintColor: "#fff",
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					headerShown: false,
					tabBarIcon: (props) => <TabBarIcon {...props} name="home" label="Home" />,
				}}
			/>

			<Tabs.Screen
				name="search"
				options={{
					title: "Search",
					headerShown: false,
					tabBarIcon: (props) => <TabBarIcon {...props} name="search" label="Search" />,
				}}
			/>

			<Tabs.Screen
				name="saved"
				options={{
					title: "Saved",
					headerShown: false,
					tabBarIcon: (props) => <TabBarIcon {...props} name="bookmark" label="Saved" />,
				}}
			/>

			<Tabs.Screen
				name="profile"
				options={{
					title: "Profile",
					headerShown: false,
					tabBarIcon: (props) => <TabBarIcon {...props} name="user" label="Profile" />,
				}}
			/>
		</Tabs>
	);
};

export default _layout;
