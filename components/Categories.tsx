import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { CategoryType } from '@/types/type'
import { Colors } from '@/constants/Colors'
import { FlatList } from 'react-native-gesture-handler'

type Props={
categories:CategoryType[]
}

const Categories = ({categories}:Props) => {
  return (
    <View>
      <View style={styles.titleWrapper}>
                 <Text  style={styles.title}>Category</Text>
                 <TouchableOpacity >
                   <Text style={styles.titleBtn}>{}</Text>
                 </TouchableOpacity>
               </View>
               <FlatList 
               data={categories} 
               horizontal
               keyExtractor={(item)=>item.id.toString()} 
               showsHorizontalScrollIndicator={false}
               renderItem={({item,index})=>
               <View style={styles.item}>
                <Image source={{uri:item.image}} style={styles.itemImg}/>
                <Text>{item.name}</Text>
               </View>}/>
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleWrapper:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginBottom:10,
    marginHorizontal:16,
    marginTop:6
  },
  title:{
    fontSize:18,
    fontWeight:"600",
    letterSpacing:0.6,
    color:Colors.black
  },
  titleBtn:{
    fontSize:14,
    fontWeight:"500",
    letterSpacing:0.6,
    color:Colors.black
  },
  itemImg:{
    width:50,
    height:50,
    borderRadius:30,
    backgroundColor:Colors.lightGray
  },
  item:{
    marginVertical:10,
    gap:5,
    alignItems:"center",
    marginLeft:20
  }
})
