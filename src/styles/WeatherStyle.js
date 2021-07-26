import styled from 'styled-components/native'

export const ImageContainer = styled.ImageBackground`
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`

export const SafeAreaView = styled.SafeAreaView`
    flex: 1;
    background-color: rgba(0, 0, 0, .3);
`
//VIEW
export const Container = styled.View`
    width: 100%;
    height: 100%;
    padding: 10px 15px;
`

export const ViewControl = styled.View`
    position: absolute;
    top: 7%;
    left: 0;
    z-index: 999;
    width: 100%;
    padding: 0 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Wrapper = styled.View`
    width: 100%;
    margin-top: 100px;
`

export const ViewCity = styled.View`
    flex-direction: column;
    margin-bottom: 20px;
`

export const ViewContent = styled.View`
    margin-top: 40px;
    flex-direction: row;
    display: flex;
    height: 350px;
    max-height: 350px;
`

export const ContentTemp = styled.View`
    flex: 2;
    justify-content: center;
    align-items: stretch;
`

export const ContentParameter = styled.View`
    flex: 1.2;
    flex-direction: column;
    justify-content: space-between;
    padding: 25px 0;
`

export const ViewParam = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const WeatherView = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`

export const TotalScale = styled.View`
    width: 100px;
    height: 4px;
    border: none;
    border-radius: 5px;
    background-color: #fff;
    margin-top: 5px;
`

export const FlowScale = styled.View`
    border: none;
    height: 4px;
    max-width: 100px;
    border-radius: 5px;
`

//TEXT
export const CityName = styled.Text`
    font-size: 37px;
    font-weight: 800;
    letter-spacing: 0.6px;
    color: #fff;
    text-transform: uppercase;
`

export const CurrentDate = styled.Text`
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    text-transform: uppercase;
`


export const TextTemp = styled.Text`
    font-size: 85px;
    font-weight: 600;
    letter-spacing: 0.6px;
    color: #fff;
`

export const WeatherText = styled.Text`
    font-size: 24px;
    font-weight: 600;
    color: #fff;
    letter-spacing: 1px;
    text-transform: capitalize;
`
export const TitleInfo = styled.Text`
    font-size: 17px;
    font-weight: 600;
    color: #fff;
`

export const ParamInfo = styled.Text`
    font-size: 17px;
    font-weight: 700;
    color: #fff;
`

//IMAGE
export const ImageWeather = styled.Image`
    width: 50px;
    height: 50px;
`


//MODAL
export const ModalBackground = styled.View`
    flex: 1;
    background: transparent;
`

export const ModalContainer = styled.View`
    position: absolute;
    top: 10%;
    right: 10%;
    padding: 8px 17px;
    background-color: #2F3640;
    border-radius: 10px;
    flex-direction: column;
    align-items: center;
    width: 35%;
`

export const ViewModal = styled.TouchableOpacity`
    width: 100%;
    margin: 5px 0;
    flex-direction: row;
    align-items: center;
`

export const TextModal = styled.Text`
    flex: 1;
    font-size: 18px;
    font-weight: 500;
    color: #fff;
`