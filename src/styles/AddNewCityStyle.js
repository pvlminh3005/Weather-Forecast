import styled from 'styled-components/native'

export const SafeAreaView = styled.SafeAreaView`
    flex: 1;
    background: #353B48;
`

export const Container = styled.View`
    flex: 1;
    padding: 10px;
`

export const SearchBar = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    background: #576574;
    border: none;
    border-radius: 7px;
    padding: 12px 10px;
`

export const InputSearch = styled.TextInput`
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    margin-left: 10px;
`

export const ViewCity = styled.View`
    margin-top: 40px;
    flex-direction: column;
`

export const ViewSearchCity = styled.View`
    width: 100%;
    margin-bottom: 50px;
`

export const Section = styled.View`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
    margin-right: -7px;
    flex-flow: row wrap;
`

export const Title = styled.Text`
    font-size: 16px;
    font-weight: 500;
    color: #fff;
`

//form button search
export const ButtonLocation = styled.TouchableOpacity`
    background: #1E90FF;
    border: none;
    border-radius: 7px;
    padding: 8px 15px;
    flex-direction: row;
    align-items: center;
`

export const ButtonTopCity = styled.TouchableOpacity`
    background: transparent;
    border-radius: 7px;
    border-width: 1px;
    border-style: solid;
    border-color: #57606F;
    padding: 8px 15px;
    margin-right: 7px;
    margin-bottom: 10px;
    flex:  25%; //min true because margin + width > flex
`

export const ButtonNameCity = styled.Text`
    color: #fff;
    font-weight: 600;
    font-size: 19px;
    letter-spacing: 0.3px;
`