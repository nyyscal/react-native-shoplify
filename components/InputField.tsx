import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'


type Props ={}

const InputField = (props:React.ComponentProps<typeof TextInput>) => {
  return (
       <TextInput {...props}
        style={styles.inputField}/>
  )
}

export default InputField

const styles= StyleSheet.create({
  inputField:{
    backgroundColor: Colors.white,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignSelf:"stretch",
    borderRadius:5,
    fontSize:16,
    color: Colors.black,
    marginBottom: 20,
  }}
)