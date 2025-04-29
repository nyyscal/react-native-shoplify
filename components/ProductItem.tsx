import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { ProductType } from '@/types/type'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'
import Animated, { FadeInDown } from 'react-native-reanimated'
import { Dimensions } from 'react-native'
import { Link } from 'expo-router'


type Props={
  item:ProductType,
  index:number,
  compact:boolean
}

const screenWidth = Dimensions.get('window').width
const ProductItem = ({ item, index, compact = false }: Props) => {

  return (
    <Link href={`/product-details/${item.id}`} asChild>
      <TouchableOpacity>
    <Animated.View
      entering={FadeInDown.delay(300 + index * 100).duration(500)}
      style={[styles.productContainer, compact && styles.compactContainer]}
    >
      <Image
        source={{ uri: item.images[0] }}
        style={[styles.productImg, compact && styles.compactImg]}
      />
      <TouchableOpacity style={styles.bookmarkBtn}>
        <Ionicons name='heart-outline' size={22} color={Colors.black} />
      </TouchableOpacity>
      <View style={styles.productInfo}>
        <Text style={styles.price}>${item.price}</Text>
        <View style={styles.ratingWrapper}>
          <Ionicons name="star" size={20} color={"#D4AF37"} />
          <Text style={styles.rating}>4.7</Text>
        </View>
      </View>
      <Text style={styles.productTitle}>{item.title}</Text>
    </Animated.View>
    </TouchableOpacity>
    </Link>
  );
};

export default ProductItem

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  compactContainer: {
    width: (screenWidth - 40) / 2, // 2 items with 16px padding on sides + 8px between
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginRight: 8,
    marginBottom: 10,
  },
  compactImg: {
    height: 140,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  // productContainer: {
  //   flex: 1,
  //   margin: 8,
  //   maxWidth: '48%', // 2 items per row with small gap
  //   backgroundColor: '#f9f9f9',
  //   borderRadius: 10,
  //   overflow: 'hidden',
  // },
  // productImg: {
  //   width: '100%',
  //   height: 200,
  //   borderRadius: 15,
  //   marginBottom: 10,
  // },
  productTitle: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    paddingBottom:8
  },
 // Replace bookmarkBtn style
 bookmarkBtn: {
  position: "absolute",
  bottom: 160,
  right: 5,
  backgroundColor: "rgba(255,255,255,0.7)",
  padding: 4,
  borderRadius: 20,
  zIndex: 10,
},

// Update productContainer style
productContainer: {
  width: (screenWidth - 40) / 2, // same logic
  backgroundColor: '#f9f9f9',
  borderRadius: 10,
  marginBottom: 16,
  marginRight: 8,
},

// Better image scaling
productImg: {
  width: '100%',
  height: 200,
  resizeMode: 'cover',
  borderTopLeftRadius: 12,
  borderTopRightRadius: 12,
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