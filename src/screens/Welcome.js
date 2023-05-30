import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity,  } from 'react-native';
import BottomButtonContainer from '../components/BottomButtonContainer/BottomButtonContainer';
import LogoContainer from '../components/LogoContainer/logoContainer';

import global from '../styles/global';

import LogoContainerStyle from '../styles/LogoContainerStyle'


const Welcome = ({navigation}) =>{

    const [appNameIsShown, SetappNameIsShown] = useState(false)

    const navigateToNextScreen = () =>{
        navigation.navigate('YourProfileInfo')
    }

    const Data = {
        heading:'Welcome Creative',
        paragraph:"We're thrilled to have you join us and showcase your artwork to a global audience. With our platform, you can easily upload your artwork, manage your inventory, and even host your own exhibitions.",

    }
    return (
        <>
         <StatusBar
             backgroundColor="transparent"
             translucent={true}
      
      />
            <View style={global.screen} >
                <View  >
                    <LogoContainer style={LogoContainerStyle.container} appNameIsShown={appNameIsShown} logoStyle={LogoContainerStyle.onBoardingLogo}/>

                </View>

                <View >
                    <BottomButtonContainer onPress={navigateToNextScreen} Data={Data} />


                </View>

            </View>
        </>
    )
}

export default Welcome;