import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { ProductType } from '@/types/type'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'
import Animated, { FadeInDown } from 'react-native-reanimated'


type Props={
  item:ProductType,
  index:number,
}

const ProductItem = ({item,index}: Props) => {
  return (
    <Animated.View entering={FadeInDown.delay(300+index*100).duration(500)} style={styles.productContainer}>
      <Image source={{ uri: item.images[0] }} style={styles.productImg} />
      <TouchableOpacity style={styles.bookmarkBtn}>
        <Ionicons name='heart-outline' size={22} color={Colors.black}/>
      </TouchableOpacity>
      <View style={styles.productInfo}>
        <Text style={styles.price}>${item.price}</Text>
        <View style={styles.ratingWrapper}>
          <Ionicons name="star" size={20} color={"#D4AF37"}/>
          <Text style={styles.rating}>4.7</Text>
        </View>
      </View>
      <Text style={styles.productTitle}>{item.title}</Text>
    </Animated.View>
  )
}

export default ProductItem

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  productContainer: {
    flex: 1,
    margin: 8,
    maxWidth: '48%', // 2 items per row with small gap
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    overflow: 'hidden',
  },
  productImg: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginBottom: 10,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    paddingBottom:8
  },
  bookmarkBtn:{
    position:"absolute",
    left:125,
    bottom:170,
    backgroundColor:"rgba(255,255,255,0.5)",
    padding:5,
    borderRadius:20,
  },
  price:{
    fontSize:16,
    fontWeight:"700",
    color:Colors.primary
  },
  rating:{
    fontSize:14,
    color:Colors.gray
  },
  ratingWrapper:{
    flexDirection:"row",
    alignItems:"center",
    gap:5
  },
  productInfo:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginBottom:8,
    paddingHorizontal:8,
    
  }
})