import React from 'react';
import { StatusBar } from 'react-native';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import BottomButtonContainer from '../components/BottomButtonContainer/BottomButtonContainer';
import LogoContainer from '../components/LogoContainer/logoContainer';
import global from '../styles/global';
import LogoContainerStyle from '../styles/LogoContainerStyle';



const YourShowCasingInfo = ({navigation}) =>{

    const navigateToNextScreen = () =>{
        navigation.navigate('SignIn')
    }

    const Data = {
        heading:'Your Showcasing',
        paragraph:"Our platform makes it easy to manage your inventory, keep track of your artwork's location, and update your price list as needed. You can also receive notifications about upcoming exhibitions and art fairs, and apply to participate directly through the platform.",

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

export default YourShowCasingInfo;