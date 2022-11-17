import { FlatList,View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'twrnc'
import { Divider } from 'react-native-elements'
import { MaterialCommunityIcons, AntDesign, Ionicons, FontAwesome } from '@expo/vector-icons';

const BusinessProductsScreen = () => {

  const [products, setProducts] = useState({}) 

  async function fetchData() {
    const res = await fetch("https://dummyjson.com/products");
    res
      .json()
      .then(res => setProducts(res["products"]))
      .catch(err => console.log(err));
  }

  useEffect(()=>{
    fetchData();             
  }, []);
  // console.log(products[0].images[0])
 
  return (
    <View style={tw`p-2 bg-gray-200 flex-1`}>
      <Divider width={0.5} orientation='horizontal'/>
      <View style={tw`flex-row h-8`}>
        <TouchableOpacity style={tw`w-1/2 h-full justify-center items-center `}>
          {/* <Text>Email</Text> */}
          <MaterialCommunityIcons name="email" size={25} color="green"/>
        </TouchableOpacity>
        <Divider width={0.5} orientation='vertical'/>
        <TouchableOpacity style={tw`w-1/2 h-full justify-center items-center`}> 
          {/* <Text>Phone</Text> */}
          <MaterialCommunityIcons name="phone" size={25} color="green"/>
        </TouchableOpacity>

      </View>
      <Divider width={0.5} orientation='horizontal'/>
      <ProductDispaly products={products}/>

      <Footer/>
     
    </View>
  )
}

export default BusinessProductsScreen

const ProductDispaly = ({products})=>{
  return(
  <View style={tw`pt-1 flex-1`}>
    <FlatList
        style={tw`pt-1 flex-1 bg-red-200`}
        data={products}
        numColumns={3}
        renderItem={({item}) => (
          <View style={tw`bg-green-100 p-1 w-1/3 h-30 rounded items-center`}>
          <TouchableOpacity style={tw`bg-white w-full h-full rounded items-center`}>
            <Image style={tw`h-18 w-18 mt-1`} source={{uri: item.images[0]}}/>
            <Text style={tw`text-gray-500 text-center `}>
                {item.title}
            </Text>
          </TouchableOpacity>
          </View>
        
          )}
      />
    
  </View>
  )
}

const Footer = ()=>{
  return(
    <View style={tw`absolute w-full bottom-0 h-10` }>
      <Divider width={1} orientation='horizontal'/>
      <View style={tw`flex-row w-full justify-evenly`}>
        <TouchableOpacity style={tw` h-full justify-center items-center`}> 
          <AntDesign name="home" size={25} color="green"/>
        </TouchableOpacity>
        <TouchableOpacity style={tw`h-full justify-center items-center`}> 
          <Ionicons name="search" size={25} color="green"/>
        </TouchableOpacity>
        <TouchableOpacity style={tw` h-full justify-center items-center`}> 
        <AntDesign name="shoppingcart" size={25} color="green"/>
        </TouchableOpacity>
        <TouchableOpacity style={tw` h-full justify-center items-center`}> 
          <Ionicons name="briefcase-outline" size={25} color="green"/>
        </TouchableOpacity>

      </View>

    </View>
  )
}