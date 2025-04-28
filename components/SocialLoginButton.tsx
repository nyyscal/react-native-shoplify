import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Animated, { FadeInDown } from 'react-native-reanimated'
import { Href, Link } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'
import Google from "@/assets/images/google-logo.svg"


type Props ={
  emailHref: Href<string | object>
}

const SocialLoginButton = (props:Props) => {
  const {emailHref} = props;
  return (
    <View style={styles.socialLogin}>
    <Animated.View entering={FadeInDown.delay(300).duration(500)}>
  <Link href={"/signup"} asChild>
    <TouchableOpacity style={styles.button}>
      <Ionicons name="mail-outline" size={20} color={Colors.black}/>
      <Text style={styles.btnTxt}>Continue with Email</Text>
    </TouchableOpacity>
  </Link>
  </Animated.View>

  <Animated.View entering={FadeInDown.delay(700).duration(500)}>
  <Link href={"/signup"} asChild>
    <TouchableOpacity style={styles.button}>
      <Google width={20} height={20}/>
      <Text style={styles.btnTxt}>Continue with Google</Text>
    </TouchableOpacity>
  </Link>
  </Animated.View>

   <Animated.View entering={FadeInDown.delay(1100).duration(500)}>
  <Link href={"/signup"} asChild>
    <TouchableOpacity style={styles.button}>
      <Ionicons name="logo-apple" size={20} color={Colors.black}/>
      <Text style={styles.btnTxt}>Continue with Apple</Text>
    </TouchableOpacity>
  </Link>
  </Animated.View>
  </View>
  )
}

export default SocialLoginButton
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  button:{
    flexDirection:"row",
    padding:10,
    borderColor: Colors.gray,
    borderWidth: StyleSheet.hairlineWidth,
    alignItems:"center",
    justifyContent:"center",
    borderRadius: 50,
    gap:5,
    marginBottom:15
  },
  btnTxt:{
    fontSize: 14,
    fontWeight:"600",
    color: Colors.black,
  },
  socialLogin:{
    alignSelf:"stretch"
  },

});