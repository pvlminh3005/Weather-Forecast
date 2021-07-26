import React, { useState, useEffect } from 'react'
import { Platform, ScrollView, View, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Ionicons from 'react-native-vector-icons/Ionicons'
import _ from "lodash"
import {
    SafeAreaView,
    Container,
    SearchBar,
    InputSearch,
    ViewCity,
    ViewSearchCity,
    Section,
    Title,
    ButtonLocation,
    ButtonTopCity,
    ButtonNameCity
} from '../styles/AddNewCityStyle'
import topCities from '../../topCities'
import slide from '../../slides'

const MIN_HEIGHT = Platform.OS === 'ios' ? 50 : 15

export default function AddNewCity() {
    const [listSearch, setListSearch] = useState({
        data: slide,
        query: '',
        search: []
    })

    const handleNewCity = (name) => {
        const convertName = name.replace(/\s/g, '').toLowerCase(); // \s: regex space , g: global
        AsyncStorage.removeItem('listCities')

    }

    const onChangeSearch = (e) => {
        if (e) {
            const searchData = _.filter(listSearch.data, (item) => {
                const name = `${item.name}`
                const itemData = name ? name.toUpperCase() : ''.toUpperCase();
                const textData = e.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setListSearch({ ...listSearch, query: e, search: searchData })
        } else {
            setListSearch({ ...listSearch, query: e, search: [] })
        }
    }

    return (
        <SafeAreaView>
            <Container style={{ marginTop: MIN_HEIGHT }}>
                <SearchBar>
                    <Ionicons
                        name="search-outline"
                        size={23}
                        style={{ color: '#d6d6d6', }}
                    />
                    <InputSearch
                        placeholder="Search in current language"
                        placeholderTextColor="#ccc"
                        onChangeText={onChangeSearch}
                    />
                </SearchBar>
                <ViewCity>
                    {
                        (listSearch.query === '') ? (
                            <View>

                                <ViewSearchCity>
                                    <Title style={{ textTransform: 'uppercase' }}>Recent search city</Title>
                                    <Section>
                                        <ButtonLocation activeOpacity={0.7}>
                                            <Ionicons
                                                name="location"
                                                size={22}
                                                style={{ color: '#fff', marginRight: 5 }}
                                            />
                                            <Title>Location</Title>
                                        </ButtonLocation>
                                    </Section>
                                </ViewSearchCity>
                                <ViewSearchCity>
                                    <Title style={{ textTransform: 'uppercase' }}>Top cities world</Title>
                                    <Section>
                                        {
                                            topCities.map(item => (
                                                <ButtonTopCity
                                                    key={item.id}
                                                    activeOpacity={0.7}
                                                    onPress={() => handleNewCity(item.name)}>
                                                    <Title style={{ textAlign: 'center' }}>{item.name}</Title>
                                                </ButtonTopCity>
                                            ))
                                        }
                                    </Section>
                                </ViewSearchCity>
                            </View>
                        ) : (
                            <ScrollView>
                                {listSearch.search.map((item, index) => (
                                    <TouchableOpacity
                                        onPress={() => console.log(item.name)}
                                        style={{ marginBottom: 20 }}
                                        key={index}>
                                        <ButtonNameCity >{item.name},  {item.country}</ButtonNameCity>
                                    </TouchableOpacity>

                                ))}
                            </ScrollView>
                        )
                    }
                </ViewCity>

            </Container>
        </SafeAreaView>
    )
}

