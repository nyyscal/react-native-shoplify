import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ProductItem from './ProductItem'
import { ProductType } from '@/types/type'
import { Colors } from '@/constants/Colors'

type Props={
  products: ProductType[]
}

const ProductList = ({products}:Props) => {
  return (
    <>
     <View style={styles.titleWrapper}>
            <Text  style={styles.title}>Home</Text>
            <TouchableOpacity >
              <Text style={styles.titleBtn}>See All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <FlatList
            numColumns={2}
            data={products}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item,index }) => (
              <ProductItem item={item} index={index}/>
            )}
            contentContainerStyle={{ padding: 16 }}
            showsVerticalScrollIndicator={false}
            />
          </View>
            </>
  )
}

export default ProductList

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
  }
})
