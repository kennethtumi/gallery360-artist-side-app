import React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import { Dimensions } from "react-native";

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;




const CustomButton = ({title, style,onPress}) =>{
    return(
        <>
          <TouchableOpacity onPress={onPress} style = {style}>
               <Text style={styles.title}>
                  {title}
               </Text>
          </TouchableOpacity>
        </>
    )
}

export default CustomButton;


const styles = StyleSheet.create({
  
    title:{
        textAlign:'center',
        textTransform:'uppercase',
        color:'#FFFFFF',
        fontWeight:'bold'
    }
})