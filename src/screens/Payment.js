import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity,  StatusBar, Modal,Pressable} from 'react-native';


import { Dimensions } from "react-native";
import CustomButton from '../components/Button/CustomButton';
import FormHeader from '../components/FormHeader/FormHeader';
import CustomInput from '../components/Input/CustomInput';
import LogoContainer from '../components/LogoContainer/logoContainer';
import BottomButtonContainerStyle from '../styles/BottomButtonContainerStyle';
import global from '../styles/global';
import LogoContainerStyle from '../styles/LogoContainerStyle';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;



const Payment = ()=>{

    const [cardHolder, setcardHolder] = useState('')
    const [cardNumber, setcardNumber] = useState('')
    const [expiry, setexpiry] = useState('')
    const [ccv, setccv] = useState('')

      //paymentInfo
      let cardDetails = {
        userId:'',
        cardHolder:'',
        cardNumber:'',
        expiry:'',
        ccv:'',

     }
   
    return (
        <>
         <StatusBar
             backgroundColor="transparent"
             translucent={true}
      
      />
            <View style={global.screen}>
                <View style={styles.topMainView}>
                    <View style={styles.card}>
                          <View style={styles.cardHeaderStyle}>
                               <Text style={styles.cardName}>Visa</Text>
                          
                               <View style={styles.cardIconView}>
                                <Text style={styles.icon}>{'))'}</Text>
                               <Text style={styles.cardType}>Debit</Text>
                               </View>
                          </View>
                          <View>
                              <Text style={styles.cardNumber}>9012  5678  1234  3456</Text>
                          </View>
                          <View>
                              <View style={styles.cardDetails}>
                                    <Text style={styles.cardHolderName}>
                                         Markus Aurelius
                                    </Text>
                                    <Text style={styles.cardExpiry}>
                                         08/26
                                    </Text>
                              </View>
                          </View>
                    </View>
                 </View>
                 <View>
                 <FormHeader text="payment cards"/>
                 </View>
                 <View>
                    <Text  style={styles.formSubtitle}>Payment account that will be used to receive payments.</Text>
                 </View>
                 <View>
                 <CustomInput type="text" placeholder='CARD HOLDER' value={cardHolder} onChangeText={text=>setcardHolder(text)} style={global.input}/>
                 <CustomInput type="text" placeholder='CARD NUMBER' value={cardNumber} onChangeText={text=>setcardNumber(text)} style={global.input}/>
                 {/* <CustomInput type="text" placeholder='EXPIRY' value={expiry} onChangeText={text=>setexpiry(text)} style={global.input}/> */}
                 <View style={styles.expiryView}>
                 <CustomInput type="text" placeholder='EXPIRY' value={expiry} onChangeText={text=>setexpiry(text)} style={global.paymentInput}/>
                 <CustomInput type="text" placeholder='CVV' value={ccv} onChangeText={text=>setccv(text)} style={global.paymentInput}/>
                 </View>
                 <CustomButton title="continue" style={global.button} />
                 </View>
                 <View>
                    <Text style={styles.uploadButton}>
                        upload signature
                    </Text>
                </View>
            </View>

        </>
    )
}

export default Payment;

const styles = StyleSheet.create({
    topMainView:{
        height:height*0.4,
        backgroundColor:"#CEB89E",
        borderBottomRightRadius:34,
        borderBottomLeftRadius:34,
    },
    card:{
        margin:15,
        marginTop:60,
    
        borderColor:'black',
        borderRadius:35,
        padding:15,
        backgroundColor:'#8524E0',
        height:height*0.3

    },
    cardName:{
        padding:8,
        color:'white'
    },
    cardHeaderStyle:{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            
    },
    
   cardIconView:{
    display:'flex',
    flexDirection:'row',
    padding:10
   },
   icon:{
       marginRight:4,
       fontSize:10,
       color:'white'
   },
   cardType:{
    fontSize:10,
    color:'white'
   },
   cardNumber:{
    padding:20,
    textAlign:'center',
    color:'white',
    marginTop:20,
    fontSize:25
   },
   cardDetails:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:20
   },
   cardHolderName:{
    padding:10,
    color:'white'
   },
   cardExpiry:{
    padding:10,
    color:'white'
   },
   formHeader:{
      padding:20,
      fontSize:30,
      textAlign:'center',
      textTransform:'capitalize'
   },
   formSubtitle:{
     padding:15,
    marginTop:-30,
    color:'white'
   },
   expiryView:{
     display:'flex',
     flexDirection:'row',
     justifyContent:'space-between',
    //  justifyContent:'center',
    width:height*0.51,
    alignSelf:'center', 
    // backgroundColor:'red'
   },
   uploadButton:{
    textAlign:'center',
    textTransform:'uppercase',
    color:'#FFFFFF',
    fontWeight:'bold',
    padding:20
},
})