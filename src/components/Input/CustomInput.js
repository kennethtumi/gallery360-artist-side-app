import React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity ,TextInput} from 'react-native';
import { Dimensions } from "react-native";


const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;



const CustomInput = ({value, type,onChangeText,placeholder,style,numberOfLines})=>{

     return(
        <>
        <View>
        <TextInput numberOfLines={numberOfLines} style={style } placeholder={placeholder}  value={value} onChangeText={onChangeText} placeholderTextColor="white"/>
        </View>
         
        </>
     )

}

export default CustomInput;

const styles = StyleSheet.create({
  
})