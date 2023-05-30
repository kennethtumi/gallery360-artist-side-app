import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import LogoContainerStyle from '../../styles/LogoContainerStyle'

import logo from "../../../assets/logo.png"

function LogoContainer({style, appNameIsShown,showHeaderImage, logoStyle,}) {

    


    return (
        <View style={style}>
            {
                showHeaderImage&&
                <Image
                style={LogoContainerStyle.paintPicture}
               
                source={require("../../../assets/paint.png")}
               />
            }
           
              
            <Image
                style={logoStyle}
                source={require("../../../assets/logo.png")}

            />
            {
                appNameIsShown &&
                <View>
                    <Text style={LogoContainerStyle.appName}>Gallery 360</Text>
                </View>
            }

        </View>
    );
}




export default LogoContainer;


