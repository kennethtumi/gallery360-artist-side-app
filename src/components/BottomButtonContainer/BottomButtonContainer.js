import React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import { Dimensions } from "react-native";


import BottomButtonContainerStyle from '../../styles/BottomButtonContainerStyle'



const BottomButtonContainer = ({Data, onPress}) =>{


    return (
        <>
            <View style={BottomButtonContainerStyle.bottomView}>
                <View>
                    <Text style={BottomButtonContainerStyle.headerTextStyle}>{Data.heading}</Text>
                </View>
                <View>
                    <Text style={BottomButtonContainerStyle.paragraphStyle}>{Data.paragraph}</Text>
                </View>

                <View>
                  <TouchableOpacity onPress={onPress}  style={BottomButtonContainerStyle.buttonStyle}>
                  <Text style={BottomButtonContainerStyle.buttonTextStyle}>NEXT</Text>
                  </TouchableOpacity>
                </View>

            </View>
        </>


    )


}

export default BottomButtonContainer;

