import { View, TextInput, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { Entypo } from '@expo/vector-icons'; 

const PrayerRequestScreen = () => {
  return (
    <View >
      <View style={tw`w-full flex-row p-1 justify-center`}>
        <View style={tw`w-4/5 items-center justify-center`}>
          <Text style={tw`text-gray-800 text-xl font-medium `}>Miracle Revival Fellowship Pentercostal Church</Text>
          {/* <Text>Send your prayer request</Text> */}
        </View>
        <View style={tw`w-1/5 items-center justify-center`}>
          <TouchableOpacity style={tw`items-center justify-center rounded-full w-10 h-10 bg-blue-200`}>
            <Entypo name='info' color='blue' size={24}/>
          </TouchableOpacity>
        </View>
      </View>
      <View style={tw`bg-gray-300 rounded-md p-2 ml-2 mr-2 mt-3`}>
        <TextInput 
          style={tw`text-center text-xl pb-2`} 
          placeholder='Andika maombi, Type prayer Request'
          multiline
          numberOfLines={10}/>
      </View>
      <View style={tw`flex-row justify-evenly mb-5 mt-5`}>
        <TouchableOpacity style={tw`items-center justify-center rounded-xl w-30 h-8 bg-red-300`}>
          <Text style={tw`text-red-600`}>CANCEL</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`items-center justify-center rounded-xl w-30 h-8 bg-green-300`}>
        <Text style={tw`text-green-600`}>SEND</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default PrayerRequestScreen