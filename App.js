import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WeatherScreen from './src/components/WeatherScreen'
import AddNewCity from './src/components/AddNewCity'


const Stack = createStackNavigator()

export default function App() {
	// const [weatherInfo, setWeatherInfo] = useState({
	// 	cityName: null,
	// 	currentDate: null,
	// 	temp: 0,
	// 	weather: null,
	// 	wind: 0,
	// 	precipitation: 0,
	// 	humidity: 0,
	// })

	// useEffect(() => {
	// 	fetch(`http://api.openweathermap.org/data/2.5/weather?q=paris&appid=${API_KEY}&lang=vi&units=metric`)
	// 		.then(res => res.json()) //get success
	// 		.then(data => {
	// 			setWeatherInfo({
	// 				cityName: data.name,
	// 				iconWeather: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
	// 				currentDate: (new Date(data.dt * 1000).toDateString()), //format Date
	// 				temp: Math.round(data.main.temp),
	// 				weather: data.weather[0].main,
	// 				wind: Math.round(data.wind.speed),
	// 				precipitation: 0,
	// 				humidity: data.main.humidity,
	// 			})
	// 		})
	// }, [])

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen
					name="Home"
					component={WeatherScreen}
					options={() => ({
						headerShown: false,
					})} />
				<Stack.Screen
					name="AddNewCity"
					component={AddNewCity}
					options={() => ({
						headerTransparent: true,
						headerTintColor: '#fff',
						headerBackTitleVisible: false,
						headerTitle: 'Add new City',
						headerTitleStyle: {
							fontSize: 18,
							fontWeight: '700',
						}
					})} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'transparent',
	},
});
