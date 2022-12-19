import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native'

const AppContainer = styled.View`
  flex: 1;
  background-color: red;
`;
export default function App() {
  return (
    <AppContainer >
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </AppContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
