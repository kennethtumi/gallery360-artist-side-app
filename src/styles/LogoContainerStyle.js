import { StyleSheet } from "react-native";

import { Dimensions } from "react-native";

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

const LogoContainerStyle = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"#CEB89E",
        width:width,
        height:height*0.6,
        borderBottomRightRadius:34,
        borderBottomLeftRadius:34,
    },
    SignUpScreen:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"#CEB89E",
        width:width,
        height:height*0.4,
        borderBottomRightRadius:34,
        borderBottomLeftRadius:34,
    },
    logo:{
        marginTop:-30,
        marginBottom:15,
        height:160,
        width:111
    },
    onBoardingLogo:{
      
        height:300,
        width:300
    },
    appName:{
        fontSize:30,
        marginTop:-15
    },
    paintPicture:{
     
     marginTop:-300
      
        
        
    }
});


export default LogoContainerStyle;