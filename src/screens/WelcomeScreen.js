import { StyleSheet, Text, View } from 'react-native'
import styled from 'styled-components/native'
import React from 'react'
import LottieView from 'lottie-react-native';
//? components
const WelcomeScreenContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #E8F3D6;
`;
const Title = styled.Text`
    font-size: 30px;
    font-weight: bold;
    color: #FAAB78;
`;
//?types
import { IMAGEJSON } from '../constrain';
const WelcomeScreen = () => {
    return (
        <WelcomeScreenContainer>
            <LottieView
                source={IMAGEJSON.Chocolate_cookie}
                autoPlay
                loop
                style={{ width: 200, height: 200 }}
            />
            <Title>Welcome to CookieApp</Title>
        </WelcomeScreenContainer>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({})