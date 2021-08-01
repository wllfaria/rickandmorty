import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { EpisodesScreen } from './screens/EpisodesScreen'
import { EpisodeDetailsScreen } from './screens/EpisodeDetailsScreen'
import { CharacterDetailsScreen } from './screens/CharacterDetailsScreen'
import { RouteNames } from './utils/consts'
import { CharactersScreen } from './screens/CharactersScreen'
import { Feather } from '@expo/vector-icons'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function TabRouter() {
	return (
		<Tab.Navigator>
			<Tab.Screen
				name={RouteNames.HomeScreen}
				component={EpisodesScreen}
				options={{
					tabBarIcon: function HomeIcon({ size, color }) {
						return <Feather name='home' size={size} color={color} />
					},
					title: 'Episodes'
				}}
			/>
			<Tab.Screen
				name={RouteNames.CharactersScreen}
				component={CharactersScreen}
				options={{
					tabBarIcon: function CharactersIcon({ size, color }) {
						return <Feather name='user' size={size} color={color} />
					},
					title: 'Characters'
				}}
			/>
		</Tab.Navigator>
	)
}

export function Router() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name={RouteNames.HomeScreen} component={TabRouter} />
				<Stack.Screen
					name={RouteNames.EpisodeDetailsScreen}
					component={EpisodeDetailsScreen}
				/>
				<Stack.Screen
					name={RouteNames.CharacterDetailsScreen}
					component={CharacterDetailsScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}
