import { View, Text, Button, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import tw from 'twrnc';
import { Ionicons, Entypo } from '@expo/vector-icons'; 
import Swiper from "react-native-deck-swiper";


const DUMMY_DATA = [
  {
      inmageUrl: "https://i.imgur.com/JXdxZXv.jpeg",
      user: "cleverqazi",
      job: "plumber",
      likes: 342,
      caption: 'We continued to travel:  Here is New York',
      profilePicture: "https://i.imgur.com/NjshGLG.jpeg" ,
      commets: [
          {
              user: "theqazman",
              comment: 'Woe the build loos like fire bro'
          }
      ]
  },
  {
      inmageUrl: "https://i.imgur.com/IkcaU4P.jpeg",
      user: "wencharles",
      job: "nurse",
      likes: 7870,
      caption: 'Train ride to hogwarts',
      profilePicture: "https://i.imgur.com/NjshGLG.jpeg",
      commets: [
          {
              user: "theqazman",
              comment: 'Woe the build loos like fire bro'
          },
          {
              user: "amaanath.dev",
              comment: 'Once i wake up ill code this '
          }
      ]
  },
  {
      inmageUrl: "https://i.imgur.com/bv7rMYb.jpeg",
      user: "fayatess",
      job: "programmer",
      likes: 4236,
      caption: 'And then we tried for a baby again.',
      profilePicture: "https://i.imgur.com/NjshGLG.jpeg",
      commets: [
          {
              user: "theqazman",
              comment: 'Woe the build loos like fire bro'
          },
          {
              user: "amaanath.dev",
              comment: 'Once i wake up ill code this '
          }
      ]
  },
]

const HomeScreen = () => {
    const navigation = useNavigation()
    const [profiles, setProfiles] = useState([])
    const swipeRef = useRef(null);
  return (
    <View style={tw`flex-1`}>
      <View style={tw`flex-row items-center justify-between px-5`}>
        <TouchableOpacity >
          <Image style={tw`h-10 w-10 rounded-full`} source={{uri: "https://i.imgur.com/NjshGLG.jpeg"}}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("Modal")} >
          <Image style={tw`h-14 w-14`} source={require('../assets/tinder.png')}/>
        </TouchableOpacity>
        <TouchableOpacity >
          <Ionicons name="chatbubbles-sharp" size={30} color="#FF5864" />
        </TouchableOpacity>
      </View>
      {/* Cards */}
      <View style={tw`flex-1 -mt-6`}>
      <Swiper
        ref ={swipeRef}
        containerStyle={{backgroundColor: 'transparent'}}
        cards={DUMMY_DATA}
        stackSize={5}
        cardIndex={0}
        animateCardOpacity
        verticalSwipe={false}
        onSwipedLeft={()=>{console.log('Swipped left ')}}
        overlayLabels={{
          left:{
            title: "NOPE",
            style:{
              label:{
                textAlign: "right",
                color: 'red'
              }
            }
          },
          right:{
            title: "MATCH",
            style:{
              label:{
                textAlign: "left",
                color: 'red'
              }
            }
          }
        }}
        renderCard={card => card ? (
          <View key={card.likes} style={tw`relative bg-white h-3/4 rounded-xl`}>
            <Image style={tw`absolute top-0 h-full w-full rounded-xl`} source={{uri: card.inmageUrl}}/>
            <View style={[tw`
              absolute bottom-0 flex-row justify-between  bg-white 
              w-full h-20 px-6 py-2 rounded-b-xl `, styles.cardShadow]}>
              <View>
                <Text style={tw`text-xl font-bold`}>{card.user}</Text>
                <Text>{card.job}</Text>
              </View>
              <Text style={tw`text-2xl font-bold`}>{card.likes}</Text>
            </View>
          </View>
          ) : (
            <View style={[tw`relative bg-white h-3/4 rounded-xl justify-center items-center`,]}></View>
          )
        }
      />
      </View>

      <View style={tw`flex flex-row justify-evenly mb-5`}>
        <TouchableOpacity 
          onPress={()=>swipeRef.current.swipeLeft()}
          style={tw`items-center justify-center rounded-full w-16 h-16 bg-red-200`}>
          <Entypo name='cross' size={24} color='red'/>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={()=>swipeRef.current.swipeLeft()}
          style={tw`items-center justify-center rounded-full w-16 h-16 bg-green-200`}>
          <Entypo name='heart' size={24} color='green'/>
        </TouchableOpacity>
      </View>
      
      
    </View>
    
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: "#000",
    shadowOffset:{
      width: 0,
      height: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.14,
    elevation: 2
  }
})