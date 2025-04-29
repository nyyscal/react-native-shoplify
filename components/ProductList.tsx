import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ProductItem from './ProductItem'
import { ProductType } from '@/types/type'
import { Colors } from '@/constants/Colors'

type Props={
  products: ProductType[],
  flatlist: boolean
}

const ProductList = ({products,flatlist=true}:Props) => {
  return (
    <>
     <View style={styles.titleWrapper}>
            <Text  style={styles.title}>Home</Text>
            <TouchableOpacity >
              <Text style={styles.titleBtn}>See All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
           {flatlist ? (<FlatList
            numColumns={2}
            data={products}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item,index }) => (
              <ProductItem item={item} index={index} compact={false}/>
            )}
            contentContainerStyle={{ padding: 16 }}
            showsVerticalScrollIndicator={false}
            />):(
              <View style={styles.itemsWrapper}>
                {products.map((item,index)=>(
                  <View key={index} style={styles.productWrapper}>
                    <ProductItem item={item} index={index} compact={false} />
                  </View>
                ))}
              </View>
            )}
          </View>
            </>
  )
}

export default ProductList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16, // uniform horizontal padding
    paddingBottom: 16, // some bottom spacing
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    marginBottom: 10,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    letterSpacing: 0.5,
    color: Colors.black,
  },
  titleBtn: {
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0.4,
    color: Colors.black,
  },
  itemsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  productWrapper: {
    width: '48%',
    marginBottom: 16,
    // borderRadius: 12,
  },
})

