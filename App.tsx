import React from 'react'
import { SafeAreaView } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useFonts } from '@use-expo/font'
import { AppLoading } from 'expo'

import { HomeScreen } from '@features/home'
import { NewsDetailsScreen } from '@features/news-details'
import { NewsScreen } from '@features/news'
import { Button } from '@ui/atoms'
import { ThemeProvider, lightTheme } from '@ui/theme'

import Storybook from './storybook'
import { configureStore } from './src/store'

const Stack = createStackNavigator()
const { store, persistor } = configureStore()

const customFonts = {
  ArialRegular: require('./assets/fonts/ArialRegular.ttf'),
  ArialBold: require('./assets/fonts/ArialBold.ttf'),
  OpenSansRegular: require('./assets/fonts/OpenSansRegular.ttf'),
  OpenSansBold: require('./assets/fonts/OpenSansBold.ttf'),
}

const App: React.FC = () => {
  const [showApp, setShowApp] = React.useState(false)

  const [isLoaded] = useFonts(customFonts)

  if (!isLoaded) {
    return <AppLoading />
  }

  if (showApp) {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={lightTheme}>
            <NavigationContainer>
              <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                  name="Home"
                  component={HomeScreen}
                  options={{ title: 'Главная' }}
                />
                <Stack.Screen
                  name="News"
                  component={NewsScreen}
                  options={{ title: 'Новости' }}
                />
                <Stack.Screen
                  name="NewsDetails"
                  component={NewsDetailsScreen}
                  options={{ title: 'Новость' }}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    )
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemeProvider theme={lightTheme}>
        <Storybook />
        <Button title="show app" onPress={() => setShowApp(true)}></Button>
      </ThemeProvider>
    </SafeAreaView>
  )
}

export default App
