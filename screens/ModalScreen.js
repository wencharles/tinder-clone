import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import useAuth from '../hooks/useAuth'
import tw from 'twrnc';
import { FontAwesome5 } from '@expo/vector-icons'; 


const ModalScreen = () => {
    const {user} = useAuth()
  return (
    <View style={tw`flex-1 items-center pt-1 bg-gray-300`}>
        <Image style={tw`h-20 w-20 rounded-full`} resizeMode="contain" source={require('../assets/tinder.png')}/>
        <Text style={tw`text-xl text-grey=500 p-2 font-bold`}>Welcome Charles Wen</Text>
        {/* <Text style={tw`text-xl text-grey=500 p-2 font-bold`}>Welcome {user.displayName}</Text> */}
        <Text style={tw`text-center p-4 font-bold text-red-400`}>Step 1 profile pic </Text>
        <TextInput style={tw`text-center text-xl pb-2`} placeholder='Profile Picture URL'/>

        {/* <Text style={tw`text-center p-4 font-bold text-red-400`}>Step 2: The Job </Text>
        <TextInput style={tw`text-center text-xl pb-2`} placeholder='Enter your occupation'/>

        <Text style={tw`text-center p-4 font-bold text-red-400`}>Step 3: The age </Text>
        <TextInput style={tw`text-center text-xl pb-2`} placeholder='Enter your age'/> */}

        {/* <TouchableOpacity style={tw`w-64 p-3 rounded-xl absolute bottom-10 bg-red-400`}>
            <Text style={tw`text-center text-xl text-white`}>update profile</Text>
        </TouchableOpacity> */}
        <View style={tw`bg-white w-5/6 p-6 rounded-lg items-center `}>
            <FontAwesome5 name="check-circle" size={24} color="green"/>
            <Text style={tw`text-gray-800 text-xl font-medium mt-4`}>Payment successful</Text>
            <Text style={tw`text-gray-600 text-center mt-2 w-56`}>
                Payment for mpesa has been received
            </Text>

            <View style={tw`bg-indigo-600 w-full py-2 items-center rounded-md mt-6`}>
                <Text style={tw`text-white font-medium`}>Go back to Dashboard</Text>

            </View>
        </View>
    </View>
  )
}

export default ModalScreen