import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import styled from 'styled-components/native'
import React from 'react'
import LottieView from 'lottie-react-native';
//?cpmponents
import HomeHeaderSection from '../components/HomeHeader/HomeHeaderSection';
import ListCookieSection from '../components/ListCookie/ListCookieSection';
const HomeScreenContainer = styled.View`
    flex: 1;
    background-color: #fff;
    padding: 10px;
`;
//?types
const HomeScreen = () => {
    return (
        <HomeScreenContainer>
            <SafeAreaView style={{ flex: 1 }}>
                    <HomeHeaderSection />
                    <ListCookieSection />
            </SafeAreaView>
        </HomeScreenContainer>
    )
}

export default HomeScreen