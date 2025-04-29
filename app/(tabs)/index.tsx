import { FlatList, Image, StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { CategoryType, ProductType } from '@/types/type'
import { Stack } from 'expo-router'
import Header from '@/components/Header'
import ProductItem from '@/components/ProductItem'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { Colors } from '@/constants/Colors'
import ProductList from '@/components/ProductList'
import Categories from '@/components/Categories'
import FlashSale from '@/components/FlashSale'

type Props = {}

const HomeScreen = (props: Props) => {
  const [products, setProducts] = useState<ProductType[]>([])
  const [saleProducts, setSaleProducts] = useState<ProductType[]>([])
  const [categories, setCategories] = useState<CategoryType[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    getCategories()
    getProducts()
    getSaleProducts()
  }, [])

  const getProducts = async () => {
    try {
      const URL = `http://192.168.18.23:8000/products`
      const response = await axios.get(URL)
      setProducts(response.data)
    } catch (error) {
      console.error('Failed to fetch products:', error)
    } finally {
      setIsLoading(false)
    }
  }
  const getCategories = async () => {
    try {
      const URL = `http://192.168.18.23:8000/categories`
      const response = await axios.get(URL)
      setCategories(response.data)
    } catch (error) {
      console.error('Failed to fetch products:', error)
    } finally {
      setIsLoading(false)
    }
  }
  const getSaleProducts = async () => {
    try {
      const URL = `http://192.168.18.23:8000/saleProducts`
      const response = await axios.get(URL)
      setSaleProducts(response.data)
    } catch (error) {
      console.error('Failed to fetch products:', error)
    } finally {
      setIsLoading(false)
    }
  }

  if(isLoading){
    return (
      <View>
        <ActivityIndicator size={"large"}/>
      </View>
    )
  }

  if (isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    )
  }

  return (
    <>
      <Stack.Screen options={{
        headerShown: true,
        header: () => <Header />
      }} />
      <ScrollView>
      <Categories categories={categories}/>
      <FlashSale products={saleProducts}/>
      <View style={{marginHorizontal:20,marginBottom:10}}>
        <Image source={require("@/assets/images/sale-banner.jpg")} style={{width:"100%", height:150, borderRadius:15}}/>
      </View>
     <ProductList products={products} flatlist={false}/>
      </ScrollView>
        
    </>
  )
}

export default HomeScreen

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
