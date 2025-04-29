import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Colors } from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { ProductType } from '@/types/type'
import ProductItem from './ProductItem'

type Props = {
  products:ProductType[]
}
const FlashSale = ({products}:Props) => {
  const saleEndDate = new Date()
  // saleEndDate.setFullYear(2026,10,4)
  saleEndDate.setDate(saleEndDate.getDate()+2)
  saleEndDate.setHours(23,59,59)


  const [timeUnits,setTimeUnits] = useState({
    days:0,
    hours:0,
    minutes:0,
    seconds:0,
  })
  useEffect(()=>{
    const calculateTimeUnits=(timeDifference:number)=>{
      const seconds = Math.floor(timeDifference/1000)
      setTimeUnits({
        days:Math.floor((seconds % (365*24*60*60))/(24*60*60)),
        hours:Math.floor((seconds % (24*60*60))/(60*60)),
        minutes:Math.floor((seconds % (60*60))/(60)),
        seconds:Math.floor((seconds)%(60)),
      })
    }

    const updateCountDown = ()=>{
      const currentDate = new Date().getTime()
      const expiryTime= saleEndDate.getTime()
      const timeDifference = expiryTime - currentDate

      if(timeDifference <= 0){
        calculateTimeUnits(0)
      }else{
        calculateTimeUnits(timeDifference)
      }
    }
    updateCountDown()
    const interval = setInterval(updateCountDown,1000)
    return ()=>clearInterval(interval)
  },[])


  const formatTime = (time:number)=>{
    return time.toString().padStart(2,"0")
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <View style={styles.timerWrapper}>
      <Text style={styles.title}>Flash Sale</Text>
      <View style={styles.timer}>
        <Ionicons name={'time-outline'} size={16} color={Colors.black}/>
        <Text  style={styles.timerTxt}>{`${formatTime(timeUnits.days)}:${formatTime(timeUnits.hours)}:${formatTime(timeUnits.minutes)}:${formatTime(timeUnits.seconds)}`}</Text>
      </View>
        </View>
        <TouchableOpacity >
          <Text style={styles.titleBtn}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
  horizontal
  data={products}
  keyExtractor={(item) => item.id.toString()}
  showsHorizontalScrollIndicator={false}
  contentContainerStyle={{ paddingLeft: 16, paddingRight: 8 }}
  renderItem={({ item, index }) => (
    <ProductItem index={index} item={item} compact  productType='sale'/>
  )}
/>

    </View>
  )
}

export default FlashSale

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white, // Use from Colors for consistency
    paddingVertical: 10,
  },
  itemImg: {
    width: 120, // increased width
    height: 120, // increased height
    borderRadius: 10, // more rectangle-ish, you can adjust
    backgroundColor: Colors.lightGray,
  },
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 12,
  },
  titleBtn: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.primary || Colors.black,
  },
  timerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  timer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.highlight,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    gap: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  
  timerTxt: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.black,
    letterSpacing: 0.4,
  },
  
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: Colors.black,
    letterSpacing: 0.5,
  },
  item: {
    marginVertical: 12,
    alignItems: 'center',
    marginLeft: 20,
    gap: 6,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
