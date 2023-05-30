import React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';




const FormHeader = ({text}) =>{
    return(
        <>
          <View>
              <Text style = {styles.header}>
                 {text}
              </Text>
          </View>
        </>
    )
}

export default FormHeader;


const styles = StyleSheet.create({
   header:{
      
       padding:15,
       fontSize:30,
       textTransform:'uppercase',
        color:'white'
       }
})