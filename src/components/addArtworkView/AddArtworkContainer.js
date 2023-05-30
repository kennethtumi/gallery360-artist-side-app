import React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';

import { Dimensions } from "react-native";
import global from '../../styles/global';
import CustomButton from '../Button/CustomButton';
import CustomInput from '../Input/CustomInput';
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

const AddArtworkContainer = () =>{
    return(
        <>
          <View>
              
              <View style={styles.container}>
                   <Text style={styles.names}>kennth tumi</Text>
                   <Text  style={styles.message}>Make your first sale by adding artwork collections.</Text>
                   <CustomButton style={global.addArtworkContainer} title="ADD ARTWORK"/>


              </View>
          </View>
        </>
    )
}

export default AddArtworkContainer;


const styles = StyleSheet.create({
    container:{
        width:width*0.9,
        borderWidth:1,
        borderColor:'#3a3a46',
        alignSelf:'center',
        padding:13,
        alignItems:'center',
        marginTop:12,
        borderRadius:20
    },
    names:{
       color:'white'
    },
    message:{
        color:'white'
    }
 })






