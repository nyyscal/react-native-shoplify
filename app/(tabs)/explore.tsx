import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { CategoryType } from '@/types/type'
import { Stack } from 'expo-router'
import {useHeaderHeight} from "@react-navigation/elements"
import { Colors } from '@/constants/Colors'
import Animated, { FadeInDown } from 'react-native-reanimated'
type Props = {}

const ExploreScreen = (props: Props) => {
  const [categories,setCategories] = useState<CategoryType[]>([])
  const headerHeight = useHeaderHeight()
  useEffect(()=>{
    getCategories()
  },[])
  const getCategories = async () => {
    try {
      const URL = `http://192.168.18.23:8000/categories`
      const response = await axios.get(URL)
      setCategories(response.data)
    } catch (error) {
      console.error('Failed to fetch products:', error)
    }
  }
  return (
    <>
    <Stack.Screen options={{headerShown:true, headerTransparent:true}}/>
    <View style={[styles.container,{marginTop:headerHeight}]}>
    <FlatList data={categories} showsVerticalScrollIndicator={false} keyExtractor={(item)=>item.id.toString()} renderItem={({item,index})=>
    (
      <Animated.View entering={FadeInDown.delay(300+index*100).duration(500)} style={styles.itemWrapper}>
        <Text style={styles.itemText}>{item.name}</Text>
        <Image source={{uri:item.image}}
        style={{ width:100,height:100}}/>
      </Animated.View>
    )}/>
    </View>
    </>
  )
}

export default ExploreScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:20
  },
  itemWrapper:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    backgroundColor:Colors.extraLight,
    padding:10,
    borderRadius:10,
    marginBottom:20,
  },
  itemText:{
    fontSize:16,
    fontWeight:"500",
    color:Colors.black,
    borderRadius:10
  }
})