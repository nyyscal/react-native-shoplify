import { FlatList, Image, StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { CategoryType, ProductType } from '@/types/type'
import { Stack } from 'expo-router'
import Header from '@/components/Header'
import ProductItem from '@/components/ProductItem'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Colors } from '@/constants/Colors'
import ProductList from '@/components/ProductList'
import Categories from '@/components/Categories'
import FlashSale from '@/components/FlashSale'

type Props = {}

const HomeScreen = (props: Props) => {
  const [products, setProducts] = useState<ProductType[]>([])
  const [categories, setCategories] = useState<CategoryType[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    getCategories()
    getProducts()
  }, [])

  const getProducts = async () => {
    try {
      const URL = `http://192.168.1.11:8000/products`
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
      const URL = `http://192.168.1.11:8000/categories`
      const response = await axios.get(URL)
      setCategories(response.data)
    } catch (error) {
      console.error('Failed to fetch products:', error)
    } finally {
      setIsLoading(false)
    }
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
      <Categories categories={categories}/>
      <FlashSale/>
     <ProductList products={products}/>
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
