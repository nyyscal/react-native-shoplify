import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Link, router, Stack } from 'expo-router'
import SocialLoginButton from '@/components/SocialLoginButton'
import { Ionicons } from '@expo/vector-icons'
import InputField from '@/components/InputField'
import { Colors } from 'react-native/Libraries/NewAppScreen'

type Props = {}

const SignInScreen = (props: Props) => {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Sign Up",
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="close" size={24} color={Colors.black} />
            </TouchableOpacity>
          ),
        }}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>

        <View style={styles.formContainer}>
          <InputField
            placeholder="Email Address"
            placeholderTextColor={Colors.gray}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <InputField
            placeholder="Password"
            placeholderTextColor={Colors.gray}
            secureTextEntry={true}
          />

          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              router.dismissAll();
              router.push("/(tabs)");
            }}
          >
            <Text style={styles.btnTxt}>Login</Text>
          </TouchableOpacity>

          <View style={styles.signUpRow}>
            <Text style={styles.loginTxt}>Don't have an account? </Text>
            <Link href="/signup" asChild>
              <TouchableOpacity>
                <Text style={styles.loginTxtSpan}>Sign Up</Text>
              </TouchableOpacity>
            </Link>
          </View>

          <View style={styles.divider} />
        </View>

        <SocialLoginButton emailHref="/signin" />
      </View>
    </>
  )
}

export default SignInScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    letterSpacing: 1.2,
    color: Colors.black,
    marginBottom: 50,
  },
  formContainer: {
    width: "100%", // ADDED
    alignItems: "center",
  },
  btn: {
    backgroundColor: Colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 5,
    alignSelf: "stretch",
    alignItems: "center",
    marginBottom: 20,
  },
  btnTxt: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "600",
  },
  signUpRow: { // ADDED
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  loginTxt: {
    fontSize: 14,
    color: Colors.black,
    lineHeight: 24,
  },
  loginTxtSpan: {
    color: Colors.primary,
    fontWeight: "600",
    fontSize: 14,
  },
  divider: {
    borderTopColor: Colors.gray,
    borderTopWidth: StyleSheet.hairlineWidth,
    width: "30%",
    marginBottom: 30,
  },
})
