import React, { useState, useEffect } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Modal, StyleSheet, useWindowDimensions, FlatList, StatusBar } from 'react-native'
import {
	ImageContainer,
	SafeAreaView,
	Container,
	ViewControl,
	Wrapper,
	ViewCity,
	ViewContent,
	WeatherView,
	ViewParam,
	WeatherText,
	CityName,
	ImageWeather,
	CurrentDate,
	ContentTemp,
	ContentParameter,
	TextTemp,
	TitleInfo,
	ParamInfo,
	TotalScale,
	FlowScale,
	ModalBackground,
	ModalContainer,
	ViewModal,
	TextModal,
} from '../styles/WeatherStyle'
import slides from '../../slides'


const API_KEY = `e5a5a8d387fc28c0401adeadb7ddf0fa`; //id key weather

const WeatherStackScreen = ({ item, navigation, showModal, setShowModal }) => {
	const { width } = useWindowDimensions()
	const [weatherInfo, setWeatherInfo] = useState({
		cityName: item.name.replace(/\s/g, '').toLowerCase(),
		imageWeather: null,
		iconWeather: null,
		currentDate: null,
		temp: 0,
		weather: null,
		wind: 0,
		precipitation: 0,
		humidity: 0,
	})

	useEffect(() => {
		fetch(`http://api.openweathermap.org/data/2.5/weather?q=${weatherInfo.cityName}&cnt=7&units=metric&appid=${API_KEY}`)
			.then(res => res.json()) //get success
			.then(data => {
				if (data.weather[0].main.toLowerCase() === 'clouds') {
					setWeatherInfo({
						...weatherInfo,
						imageWeather: require('../assets/image/clouds-forecast.png')
					})
				}

				setWeatherInfo({
					...weatherInfo,
					cityName: data.name,
					iconWeather: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
					currentDate: (new Date(data.dt * 1000).toDateString()), //format Date
					temp: Math.round(data.main.temp),
					weather: data.weather[0].main,
					wind: Math.round(data.wind.speed),
					precipitation: 0,
					humidity: data.main.humidity,
				})
			})
	}, [])

	return (
		<ImageContainer
			style={{ width }}
			source={item.image}>
			<SafeAreaView>
				<Container>
					<Wrapper>
						<ViewCity>
							<CityName>{weatherInfo.cityName}</CityName>
							<CurrentDate>{weatherInfo.currentDate}</CurrentDate>
						</ViewCity>
						<ViewContent>
							<ContentTemp>
								<TextTemp>{weatherInfo.temp}&deg;C</TextTemp>
								<WeatherView>
									<ImageWeather
										source={{ uri: weatherInfo.iconWeather }}
									/>
									<WeatherText>{weatherInfo.weather}</WeatherText>
								</WeatherView>
							</ContentTemp>
							<ContentParameter style={styles.borderLeft}>
								<ViewParam>
									<TitleInfo>Wind</TitleInfo>
									<ParamInfo>{weatherInfo.wind}</ParamInfo>
									<Text style={styles.speedWind}>km/h</Text>
									<TotalScale>
										<FlowScale
											style={{
												width: weatherInfo.wind * 2,
												backgroundColor: (weatherInfo.wind < 25) ? '#7EFF8B' : '#FC6464'
											}} />
									</TotalScale>
								</ViewParam>
								<ViewParam>
									<TitleInfo>Precipitation</TitleInfo>
									<ParamInfo>% {weatherInfo.precipitation}</ParamInfo>
									<TotalScale>
										<FlowScale
											style={{
												width: weatherInfo.precipitation,
												backgroundColor: (weatherInfo.precipitation < 50) ? '#7EFF8B' : '#FC6464'
											}} />
									</TotalScale>
								</ViewParam>
								<ViewParam>
									<TitleInfo>Humidity</TitleInfo>
									<ParamInfo>% {weatherInfo.humidity}</ParamInfo>
									<TotalScale>
										<FlowScale
											style={{
												width: weatherInfo.humidity,
												backgroundColor: (weatherInfo.humidity < 50) ? '#7EFF8B' : '#FC6464'
											}} />
									</TotalScale>
								</ViewParam>
							</ContentParameter>
						</ViewContent>
					</Wrapper>
				</Container>
				<Modal visible={showModal} transparent>
					<TouchableWithoutFeedback onPress={() => setShowModal(false)}>
						<ModalBackground />
					</TouchableWithoutFeedback>
					<ModalContainer>
						<ViewModal
							activeOpacity={0.8}
							onPress={() => {
								setShowModal(false)
								navigation.navigate('AddNewCity')
							}}
						>
							<Ionicons
								name="add"
								size={23}
								style={styles.colorIconModal}
							/>
							<TextModal>Add City</TextModal>
						</ViewModal>
						<ViewModal
							activeOpacity={0.8}
						>
							<Ionicons
								name="settings"
								size={23}
								style={styles.colorIconModal}
							/>
							<TextModal>Setting</TextModal>
						</ViewModal>
					</ModalContainer>
				</Modal>
			</SafeAreaView>

		</ImageContainer >
	)
}

export default function WeatherScreen({ navigation }) {
	const [showModal, setShowModal] = useState(false)
	const openOption = () => {
		setShowModal(true)
	}

	return (
		<View style={{ flex: 1 }}>
			<StatusBar barStyle='light-content' />
			<ViewControl>
				<FontAwesome
					name="angle-left"
					size={30}
					style={styles.colorIcon}
				/>
				<TouchableOpacity
					activeOpacity={1}
					onPress={openOption}>
					<Feather
						name="more-horizontal"
						size={30}
						style={styles.colorIcon}
					/>
				</TouchableOpacity>
			</ViewControl>
			<FlatList
				data={slides}
				keyExtractor={item => item.id}
				renderItem={({ item }) => <WeatherStackScreen
					item={item}
					navigation={navigation}
					showModal={showModal}
					setShowModal={setShowModal}
				/>}
				horizontal
				showsHorizontalScrollIndicator
				pagingEnabled
				bounces={false}
			/>
		</View>

	)
}

const styles = StyleSheet.create({
	colorIcon: {
		color: '#fff',
	},
	colorIconModal: {
		color: '#0087bd',
		marginRight: 5
	},
	speedWind: {
		color: '#fff',
		fontSize: 13,
	},
	borderLeft: {
		borderLeftWidth: 1.5,
		borderColor: '#fff',
		borderStyle: 'solid'

	}
})