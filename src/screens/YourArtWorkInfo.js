import React from 'react';
import { StatusBar } from 'react-native';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import BottomButtonContainer from '../components/BottomButtonContainer/BottomButtonContainer';
import LogoContainer from '../components/LogoContainer/logoContainer';
import global from '../styles/global';
import LogoContainerStyle from '../styles/LogoContainerStyle';



const YourArtWorkInfo = ({navigation}) =>{

    const navigateToNextScreen = () =>{
        navigation.navigate('YourShowCasingInfo')
    }

    const Data = {
        heading:'Your Artwork',
        paragraph:"Once your profile is complete, you can start uploading your artwork. We recommend taking high-quality images of your artwork, including detailed shots of the texture and color.",

    }
    return(
        <>
         <StatusBar
             backgroundColor="transparent"
             translucent={true}
      
      />
        <View  style={global.screen}  >
            <View  >
            <LogoContainer style={LogoContainerStyle.container} logoStyle={LogoContainerStyle.onBoardingLogo}/>

            </View>

            <View >
                <BottomButtonContainer onPress={navigateToNextScreen} Data={Data}/>


            </View>

        </View>
    </>
    )
}

export default YourArtWorkInfo;