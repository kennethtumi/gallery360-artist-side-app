import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity,  StatusBar, Pressable } from 'react-native';

import CustomButton from '../components/Button/CustomButton';
import FormHeader from '../components/FormHeader/FormHeader';
import CustomInput from '../components/Input/CustomInput';

import LogoContainer from '../components/LogoContainer/logoContainer';
import global from '../styles/global';
import LogoContainerStyle from '../styles/LogoContainerStyle';

//icons
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/Firebase';


// import {StatusBarStyle} from 'react-native';




const SignUp = ({navigation}) =>{

    const [appNameIsShown, SetappNameIsShown] = useState(true)
    const [isTicked, SetIsTicked] = useState(false)
    const [showHeaderImage, setshowHeaderImage] = useState(true)

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
 
    

     //profiledetails
     const profileDetails = {
        email:email,
        password:password,
        name:'',
        contactNo:'',
        websiteLink:'',
        dateOfBirth:'',
        bio:'',
        signature:'',
        facebook:'',
        instagram:'',
        facebook: { link: "", icon: "" },
        instagram: { link: "", icon: "" },
     }

   

   
   
 


     
  
   
    const handleonSubmit = (e)=>{
       console.log(email,password)
    }
   
    
    const navigateToNextScreen = () =>{
        navigation.navigate('SetupProfile')
    }

    //signup function

    async function createAccount(){
        // try {
        //     await createUserWithEmailAndPassword(auth,email, password)
        //     navigation.navigate('SignIn')
        // } catch (error) {
        //     console.log(error.message)
        // }
       navigation.navigate('SetupProfile',{
        profileDetails : profileDetails,
       
       })

  
    }

    

    //setting onTick
    const tick = ()=>{
        SetIsTicked(!isTicked)
    }
    return (
        <>
          <StatusBar
             backgroundColor="transparent"
             translucent={true}
      
      />
      
            <View style={global.screen}>
                <LogoContainer style={LogoContainerStyle.SignUpScreen} appNameIsShown={appNameIsShown} showHeaderImage={showHeaderImage} logoStyle={LogoContainerStyle.logo}/>
                <View>
                    <FormHeader text="sign up"/>
                </View>
                <View style={global.socialView}>
                    <View>
                        <Text style={global.SignUpSubTitle}>
                            Create your new account
                        </Text>
                    </View>
                    <View style={global.socilaContainer}>
                        <Text style={{ color: 'white', padding:15 }}>
                        <AntDesign name="google" size={24} color="#7d7d86" />
                        </Text>
                        <Text style={{ color: 'white', padding:15,}}>
                        <FontAwesome name="facebook-square" size={24} color="#7d7d86"/>
                        </Text>
                    </View>
                </View>
                <View>
                    <CustomInput type="text" placeholder='EMAIL' name="email" value={email} onChangeText={text=>setEmail(text)}  style={global.input} />
                    <CustomInput type="password" placeholder='PASSWORD'  name="password" value={password}  onChangeText={text=>setPassword(text)}    style={global.input} />
                </View>
                <View style={styles.termsContainer}>
              
                    <TouchableOpacity onPress={tick} style={styles.checkBox}>
                        {
                            isTicked && 
                            <Text style={styles.tick}>
                                <AntDesign name="check" size={15} color="white" />
                            </Text>
                        }
                     
                    </TouchableOpacity>
                   
                  

                    <Text style={styles.termsText}>
                        I agree to Gallery360's<Text style={{textDecorationLine:'underline'}}>Terms & conditions</Text>
                    </Text>
                </View>
                <View>
                    <CustomButton title="sign up" style={global.button} onPress={createAccount} />
                  
                </View>
                <View>
                    <Pressable onPress={()=>navigation.navigate('SignIn')}>
                    <Text style={global.NoAccountText}>
                        Have an account sign in
                    </Text>
                    </Pressable>
                   
                </View>

            </View>
        </>
    )
}

export default SignUp;


const styles = StyleSheet.create({
    checkBox:{
        width:20,
        height:20,
        borderColor:'white',
        borderWidth:1,
        borderRadius:5,
        backgroundColor:'#CEB89E',
        
        

    },
    termsContainer:{
     display:'flex',
     flexDirection:'row',
     padding:30
    },
    termsText:{
        color:'white',
        marginLeft:15
    },
    tick:{
        textAlign:'center',
        marginTop:1
    }
})