import { StyleSheet } from "react-native";

import { Dimensions } from "react-native";

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;



const BottomButtonContainerStyle = StyleSheet.create({
      bottomView:{
     
      },
      headerTextStyle:{
          // backgroundColor:'yellow',
          padding:15,
          fontSize:34,
          color:'white'
      },
      paragraphStyle:{
        padding:15,
        color:'white'
      },
      buttonStyle:{
        // backgroundColor:'red',
        padding: 10,
        textAlign:'center',
         
      },
      buttonTextStyle:{
        color:'white',
        textAlign:'center'
      }
})


export default BottomButtonContainerStyle;