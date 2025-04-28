import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import Google from "@/assets/images/google-logo.svg"
import { AnimatedText } from "react-native-reanimated/lib/typescript/reanimated2/component/Text";
import Animated, { FadeInDown, FadeInRight } from "react-native-reanimated";
import SocialLoginButton from "@/components/SocialLoginButton";
type Props = {};

const WelcomeScreen = (props: Props) => {
  return (
    <>
    <Stack.Screen options={{ headerShown: false }} />
    <ImageBackground source={require("@/assets/images/ecommerce-splash.jpg")} style={{flex:1}} resizeMode="cover">
    <View style={styles.container}>
      <LinearGradient colors={["transparent","rgba(255,255,255,0.9)","rgba(255,255,255,1)"]}  style={styles.background}>
        <View style={styles.wrapper}>
      <Animated.Text style={styles.title} entering={FadeInRight.delay(300).duration(300).springify()}>Shopify</Animated.Text>
      <Animated.Text style={styles.description} entering={FadeInRight.delay(500).duration(300).springify()}>Buy, Sell & Exchange!</Animated.Text>

      <SocialLoginButton emailHref={"/signup"}/>

     <View style={styles.loginWrapper}>
          <Text style={styles.loginTxt}>Already have an account?{" "}</Text>
          <Link href={"/signin"} asChild>
          <TouchableOpacity>
            <Text style={styles.loginTxtSpan}>Sign In</Text>
        </TouchableOpacity>
      </Link>
      </View>
      
       
      </View>
      </LinearGradient>
    </View>
    </ImageBackground>
    
</>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background:{
    flex:1,
    position:"absolute",
    top:0,
    left:0, 
    right:0,
    bottom:0,
    justifyContent: "flex-end"
  },
  wrapper:{
    paddingBottom:50,
    paddingHorizontal:20,
    alignItems:"center",
  },
  title:{
    fontSize:22,
    color: Colors.primary,
    fontWeight:"700",
    letterSpacing:2.4,
    marginBottom:5
  },
  description:{
    fontSize: 14,
    color: Colors.gray,
    letterSpacing: 1.2,
    lineHeight: 30,
    marginBottom: 20
  },
  socialLogin:{
    alignSelf:"stretch"
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
  loginTxt:{
    fontSize: 14,
  color: Colors.black,
  lineHeight: 24,
  },
  loginTxtSpan:{
    color:Colors.primary,
    fontWeight:"600",
  },
  loginWrapper:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    gap: 5, // Small space between "Already..." and "Sign In"
  },
});
