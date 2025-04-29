import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { router, Stack, useLocalSearchParams } from 'expo-router'
import axios from 'axios'
import { ProductType } from '@/types/type'
import ImageSlider from '@/components/ImageSlider'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Colors } from '@/constants/Colors'
import {useHeaderHeight} from "@react-navigation/elements"
type Props ={}
const ProductDetails = (props:Props) => {
  const {id} = useLocalSearchParams()
  const [product,setProduct] = useState<ProductType|null>(null)

  useEffect(()=>{
    getProductDetails()
  },[])

  const getProductDetails = async()=>{
    const URL = `http://192.168.18.23:8000/saleProducts/${id}`
    const response = await axios.get(URL)
    // console.log(response.data)
    setProduct(response.data)
  }
  const headerHeight = useHeaderHeight()
  return (
    <>
   <Stack.Screen options={{title:"Product Details",headerTransparent:true, 
    headerLeft:() =>(
    <TouchableOpacity onPress={()=>router.back()}>
      <Ionicons name='arrow-back' size={24} color={Colors.black}/>
      </TouchableOpacity>),
    headerRight:()=>(<TouchableOpacity><Ionicons name='cart-outline' size={22} color={Colors.black}/></TouchableOpacity>)}}/>
    <ScrollView style={{marginTop:headerHeight,marginBottom:90}} contentContainerStyle={{ paddingBottom: 120 }}>
      {product && <ImageSlider imageList={product.images}/>}
      {product && 
      <View style={styles.container}>
        <View style={styles.ratingWrapper}>
          <View style={styles.ratingWrapper}>
          <Ionicons name='star' size={18} color={"#d4af37"}/>
          <Text style={styles.rating}>4.7
            <Text> | (136)</Text>
          </Text>
          </View>
          <View>
            <TouchableOpacity>
              <Ionicons name='heart-outline' size={20} color={Colors.black}/>
            </TouchableOpacity>
          </View>
        </View>
          <Text style={styles.title}>{product.title}</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>${product.price}</Text>
            <View style={styles.priceDiscount}>
              <Text style={styles.priceDiscountTxt}>6% off</Text>
            </View>
              <Text style={styles.oldPrice}>${product.price +2}</Text>
          </View>
          <Text style={styles.description}>{product.description}</Text>
          <View style={styles.productVaraiationWrapper}>
            <View style={styles.productVaraiationType}>
              <Text style={styles.productVaraiationTitle}>Color</Text>
              <View style={styles.ValueWrapper}>
                <View style={{borderColor:Colors.primary,borderWidth:1,borderRadius:100,padding:2}}>
                <View style={[styles.VariationColor,{backgroundColor:"#d4af37"}]}></View>
                </View>

                <View style={[styles.VariationColor,{backgroundColor:"#333"}]}></View>
                <View style={[styles.VariationColor,{backgroundColor:"#8bc34a"}]}></View>
                <View style={[styles.VariationColor,{backgroundColor:"#2196f3"}]}></View>
              </View>
            </View>
            <View style={styles.productVaraiationType}>
              <Text style={styles.productVaraiationTitle}>Size</Text>
              <View style={styles.productWrapper}>
              <View style={[styles.variationSize,{borderColor:Colors.primary}]}>
                <Text style={[styles.VariationText,{color:Colors.primary,fontWeight:"bold"}]}>S</Text>
              </View>
              
              <View style={styles.variationSize}>
                <Text style={styles.VariationText}>X</Text>
            
              </View>
              <View style={styles.variationSize}>
                <Text style={styles.VariationText}>L</Text>
              </View>
              <View style={styles.variationSize}>
                <Text style={styles.VariationText}>XL</Text>
              </View>
            </View>
              </View>
          </View>
      </View>}
    </ScrollView>
    <View style={styles.buttonWrapper}>
      <TouchableOpacity style={[styles.button,{backgroundColor:Colors.primary,borderWidth:1}]}>
        <Ionicons name="cart-outline" size={20} color={Colors.white}/>
        <Text style={[styles.buttonTxt,{color:Colors.white}]}>Add to Cart</Text>
        </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonTxt}>Buy Now</Text>
        </TouchableOpacity>
    </View>
    </>
  )
}

export default ProductDetails

const styles = StyleSheet.create({
  container:{
    paddingHorizontal:20,
  },
  buttonWrapper: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingVertical: 15,
    backgroundColor: Colors.white,
    flexDirection: "row",
    justifyContent: "center",
    gap: 15,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  button: {
    flexDirection:"row",
    gap:5,
    width: 140, // You can adjust this width as needed
    backgroundColor: Colors.primary,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonTxt:{
    fontSize:16,
    fontWeight:"500",
    color:Colors.white
  },
  productWrapper:{
    flexDirection:"row",
    alignItems:"center",
    gap:5,
    flexWrap:"wrap"
  },
  variationSize:{
    width:50,
    height:30,
    borderRadius:5,
    backgroundColor:Colors.extraLight,
    justifyContent:"center",
    alignItems:"center",
    borderColor:Colors.lightGray,
    borderWidth:1
  },
  VariationText:{
    fontSize:12,
    fontWeight:"500",
    color:Colors.black
  },
  ratingWrapper:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    marginBottom:5
  },
  rating:{
    marginLeft:5,
    fontSize:14,
    fontWeight:"400",
    color:Colors.gray
  },
  title:{
    fontWeight:"400",
    fontSize:20,
    color:Colors.black,
    letterSpacing:0.6,
    lineHeight:32
  },
  priceWrapper:{
    flexDirection:"row",
    alignItems:"center",
    marginTop:10,
    gap:5
  },
  price:{
    fontSize:18,
    fontWeight:"600",
    color:Colors.black
  },
  priceDiscount:{
    backgroundColor:Colors.extraLight,
    padding:5,
    borderRadius:5
  },
  priceDiscountTxt:{
    fontSize:14,
    fontWeight:"400",
    color:Colors.primary
  },
  oldPrice:{
    fontSize:16,
    fontWeight:"400",
    textDecorationLine:"line-through",
    color:Colors.gray
  },
  description:{
    marginTop:20,
    fontSize:16,
    fontWeight:"400",
    color:Colors.black,
    letterSpacing:0.6,
  lineHeight:24
  },
  productVaraiationWrapper:{
    flexDirection:"row",
    marginTop:20,
    flexWrap:"wrap"
  },
  productVaraiationType:{
    width:"50%",
    gap:5,
    marginBottom:10
  },
  productVaraiationTitle:{
    fontSize:16,
    fontWeight:"500",
    color:Colors.black
  },
  ValueWrapper:{
    flexDirection:"row",
    alignItems:"center",
    gap:5,
    flexWrap:"wrap"
  },
  VariationColor:{
    width:30,
    height:30,
    borderRadius:15,
    backgroundColor:Colors.extraLight
  }
})