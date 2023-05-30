import { StyleSheet } from "react-native";

import { Dimensions } from "react-native";

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;


const global = StyleSheet.create({

    screen:{
        backgroundColor:'#272634',
        width:width,
        height:height,
        
    },
    button:{
        backgroundColor:'#CEB89E',
        marginTop:15,
        padding:15,
        width: width *0.9,
        alignSelf:'center',
        borderRadius:20,
        
        

    
},
modalButton:{
    backgroundColor:'#CEB89E',
    marginTop:10,
    padding:9,
    width: width *0.7,
    alignSelf:'center',
    borderRadius:20,
},
input:{
    color:"white",
    borderBottomColor: '#cbcbcb',
    borderBottomWidth:1,
    width:width *0.9,
    alignSelf:'center',
    padding:5,
    marginTop:7,
    fontSize:11
    
},
modalInput:{
    color:"white",
    borderBottomColor: '#cbcbcb',
    borderBottomWidth:1,
    width:width *0.7,
    alignSelf:'center',
    padding:5,
    fontSize:10
},
paymentInput:{
    color:"white",
    borderBottomColor: '#cbcbcb',
    borderBottomWidth:1,
    width:width *0.40,
    alignSelf:'center',
    padding:5,
    fontSize:10
},
    SignUpSubTitle:{
        color:'white',
        padding:15
    },
    NoAccountText:{
        color:'white',
        padding:20,
        alignSelf:'center'
    },
    termsText:{
        color:'white',
        padding:20,
        alignSelf:'center'
    },
    socialView:{
        display:"flex",
        flexDirection:'row',
        // backgroundColor:'red',
        justifyContent:'space-between'
    },
    socilaContainer: {
        display:"flex",
        flexDirection:'row'
    },
    addArtworkContainer:{
        // backgroundColor:'#CEB89E',
        marginTop:10,
        padding:9,
        width: width *0.7,
        alignSelf:'center',
        borderRadius:20,
        borderWidth:1,
        borderColor:'#CEB89E'
    }
    
})


export default global;