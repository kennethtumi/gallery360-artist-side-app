import React from 'react';
import { StatusBar } from 'react-native';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity,  } from 'react-native';
import BottomButtonContainer from '../components/BottomButtonContainer/BottomButtonContainer';
import LogoContainer from '../components/LogoContainer/logoContainer';
import global from '../styles/global';
import LogoContainerStyle from '../styles/LogoContainerStyle';



const YourProfileInfo = ({navigation}) =>{

    const navigateToNextScreen = () =>{
        navigation.navigate('YourArtWorkInfo')
    }

    const Data = {
        heading:'Your Profile',
        paragraph:"To get started, you'll need to create your artist profile. Simply provide your personal information. We encourage you to include your social media accounts, to help promote your artwork.",

    }
    return(
        <>
         <StatusBar
             backgroundColor="transparent"
             translucent={true}
      
      />
        <View  style={global.screen} >
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

export default YourProfileInfo;