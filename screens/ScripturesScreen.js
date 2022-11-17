import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc';

const ScripturesScreen = () => {
  return (
    <View style={tw`flex-1 pt-2 bg-gray-200 items-center`}>
        <View style={tw`bg-white p-2 rounded-lg w-85 `}>
            
            <Text style={tw`text-gray-600 font-medium w-80`}>
                <Text style={tw`text-gray-800`}>
                    Date:
                </Text>
                08/11/22
            </Text>
            <Text style={tw`text-gray-600  w-80`}>
                <Text style={tw`text-gray-800`}>
                    Location:
                </Text>
                MRFPC HQ
            </Text>
            <Text style={tw`text-gray-600  w-80`}>
                <Text style={tw`text-gray-800`}>
                    Verse:
                </Text> Mathew 23:4
            </Text>
            <Text style={tw`text-gray-600  w-80`}>
                <Text style={tw`text-gray-800`}>
                    Details:
                </Text>
                For they bind heavy burdens and grievous to be borne, and lay them on men's shoulders; 
                but they themselves will not move them with one of their fingers.
            </Text>
        </View>
      
    </View>
  )
}

export default ScripturesScreen

const styles = StyleSheet.create({})