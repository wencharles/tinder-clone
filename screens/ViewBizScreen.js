import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { MaterialCommunityIcons, AntDesign, Ionicons } from '@expo/vector-icons'; 

const ViewBizScreen = () => {
    // const getRandomProfilePicture = async () =>{
    //     const response = await fetch('https://api.taridi.io/v1/clients/consumers',
    //     {
    //         method: 'GET', 
    //         headers:{
    //             'client-ref': '3c1e6d1a-ec60-41ef-82de-b098f1f3c1b9'
    //         }
    //     })
    
    //     const data = await response.json()
    //     console.log(data);
    //   } 

    // getRandomProfilePicture()

  return (
    <View style={tw`p-2`}>
      <Banner/>
      
      <AboutBanner/ >
    </View>
  )
}

export default ViewBizScreen

const Banner = () =>(
    <View style={tw`flex-row h-22`}>
        
        <TouchableOpacity>
            <Image style={tw`w-20 h-20 rounded-lg border-2 border-purple-400`} source={{uri: "https://i.imgur.com/NjshGLG.jpeg"}}/>

        </TouchableOpacity>
        
        <View style={tw`items-stretch flex-1`}>
            <View style={tw`flex-row justify-evenly items-center  h-1/2 w-full`}>
                <View style={tw`items-center`}>
                    <Text>32</Text>
                    <Text style={tw`text-sm text-gray-400`}>products</Text>
                </View>
                <View style={tw`items-center`}>
                    <Text>243 K</Text>
                    <Text style={tw`text-sm text-gray-400`}>orders</Text>
                </View>
                <View style={tw`items-center`}>
                    <MaterialCommunityIcons name="cards" size={30} color="green"/>
                </View>
            </View>

            <View style={tw`flex-row justify-evenly items-center  h-1/2 w-full`}>
                <View style={tw`items-center `}>
                    <TouchableOpacity style={tw`items-center justify-center rounded-sm w-14 h-6 bg-red-300`}>
                        <AntDesign name="like1" size={15} color="green"/>
                    </TouchableOpacity>
                </View>
                <View style={tw`items-center`}>
                    <TouchableOpacity style={tw`items-center justify-center rounded-sm w-14 h-6 bg-red-300`}>
                        <Ionicons name="chatbubbles" size={15} color="green"/>
                    </TouchableOpacity>
                   
                </View>
                <View style={tw`items-center`}>
                    <TouchableOpacity style={tw`items-center justify-center rounded-sm w-14 h-6 bg-red-300`}>
                        <Ionicons name="share-social-sharp" size={15} color="green"/>
                    </TouchableOpacity>
                </View>
                <View style={tw`items-center`}>
                    <TouchableOpacity style={tw`items-center justify-center rounded-sm w-6 h-6 bg-red-300`}>
                        <MaterialCommunityIcons name="menu" size={15} color="green"/>
                    </TouchableOpacity>
                </View>
            </View>
            
        </View>
        
    </View>
)

const AboutBanner = ()=>(
    <View>
        <Text>Motorhub dealers Kiambu road </Text>
        <Text style={tw`text-sm text-gray-400`}>#Motorvehicle, #service</Text>
        <Text><MaterialCommunityIcons name="phone" size={15} color="green"/>+254710827076, +254723927684 </Text>
        <Text><MaterialCommunityIcons name="email" size={15} color="green"/>ndanyicharles14@gmail.com</Text>
        <Text><Ionicons name="location-outline" size={17} color="green"/>Kiambu road before Ridgeways </Text>
        <Text><Ionicons name="information-circle" size={17} color="green"/>We sell and service different 
        motor vehicles for all your needs. Just give us a call today. </Text>
        
    </View>
)