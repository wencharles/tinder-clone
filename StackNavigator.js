import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './screens/HomeScreen'
import ChatScreen from './screens/ChatScreen'
import LoginScreen from './screens/LoginScreen'
import useAuth from './hooks/useAuth'
import ModalScreen from './screens/ModalScreen'
import PrayerRequestScreen from './screens/PrayerRequestScreen'
import ScripturesScreen from './screens/ScripturesScreen'
import ViewBizScreen from './screens/ViewBizScreen'
import BusinessProductsScreen from './screens/BusinessProductsScreen'

const Stack = createNativeStackNavigator()


const StackNavigator = () => {
  const  {user } = useAuth();
  return (
    
      <Stack.Navigator>
        {user ? (
            <>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Chat" component={ChatScreen} />
            </>
        ) : (
            <>
            <Stack.Group>
                {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
                {/* <Stack.Screen name="PrayerRequest" component={PrayerRequestScreen} /> */}
                {/* <Stack.Screen name="Scriptures" component={ScripturesScreen} /> */} 
                {/* <Stack.Screen name="ViewBiz" component={ViewBizScreen} /> */}
                <Stack.Screen name="BusinessProductsScreen" component={BusinessProductsScreen} />
            </Stack.Group>
            <Stack.Group screenOptions={{presentation: 'modal'}}>
                <Stack.Screen name="Modal" component={ModalScreen} />
            </Stack.Group>
            
                {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
            </>
        )}
        
      </Stack.Navigator>
  )
}

export default StackNavigator