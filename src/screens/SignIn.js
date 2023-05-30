import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity ,StatusBar,Modal, Pressable} from 'react-native';
import BottomButtonContainer from '../components/BottomButtonContainer/BottomButtonContainer';
import CustomButton from '../components/Button/CustomButton';
import FormHeader from '../components/FormHeader/FormHeader';
import CustomInput from '../components/Input/CustomInput';
import LogoContainer from '../components/LogoContainer/logoContainer';
import global from '../styles/global';
import LogoContainerStyle from '../styles/LogoContainerStyle';

import { Dimensions } from "react-native";
import BottomButtonContainerStyle from '../styles/BottomButtonContainerStyle';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/Firebase';




const SignIn = ({navigation}) =>{

    const [appNameIsShown, SetappNameIsShown] = useState(true)
    const [showHeaderImage, setshowHeaderImage] = useState(true)
    const [modalVisible, setModalVisible] = useState(false);

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')



      //signin function

      async function login(){
        try {
            await signInWithEmailAndPassword(auth,email, password)
            navigation.navigate('BottomTabs')
         
        } catch (error) {
            console.log(error.message)
        }
    }


    return(
        <>
            <StatusBar
                backgroundColor="transparent"
                translucent={true}

            />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                     <View>
                         <Text style={styles.modalHeader}>Forgot Password</Text>
                     </View>
                     <View>
                        <Pressable onPress={()=>navigation.navigate('SignUp')}>
                        <Text style={styles.createNewAccText}>
                             Create your new account
                         </Text>
                        </Pressable>
                         
                     </View>
                     <View>
                  
               
                          <CustomInput style={global.modalInput} type="text" placeholder='EMAIL' />
                     </View>
                     <View>
                         <CustomButton style={global.modalButton} title="RESET PASSWORD"/>
                     </View>
                        <View style={styles.modalCancelContainer}>
                            <TouchableOpacity   onPress={() => setModalVisible(!modalVisible)} style={styles.modalCancel}>
                                <Text style={BottomButtonContainerStyle.buttonTextStyle}>CANCEL</Text>
                            </TouchableOpacity>
                        </View>
                        {/* <Pressable
                            style={[styles.button, styles.buttonClose]}
                          >
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable> */}
                    </View>
                </View>
            </Modal>
            <View style={global.screen}>
                <LogoContainer style={LogoContainerStyle.SignUpScreen} appNameIsShown={appNameIsShown} logoStyle={LogoContainerStyle.logo} showHeaderImage={showHeaderImage} />
                <View>
                    <FormHeader text="Welcome back !" />
                </View>
                <View style={global.socialView}>
                    <View>
                        <Text style={global.SignUpSubTitle}>
                            Login to your account
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
                <CustomInput type="text" placeholder='EMAIL' name="email" value={email} onChangeText={setEmail}  style={global.input} />
                    <CustomInput type="password" placeholder='PASSWORD'  name="password" value={password}  onChangeText={setPassword}    style={global.input} />
                </View>
                <View>
                    <Pressable onPress={()=> setModalVisible(!modalVisible)}>
                        <Text style={styles.passwordText}>
                            I forgot my password
                        </Text>
                    </Pressable>

                </View>
                <View>
                    <CustomButton title="sign in" style={global.button} onPress={login}/>
                </View>
            </View>
        </>
    )
}

export default SignIn;

const styles = StyleSheet.create({
    passwordText:{
        color:'white',
        padding:25,
        alignSelf:'flex-end'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        height:height
       
      },
      modalView: {
        margin: 20,
     
        borderRadius: 20,
        // padding: 35,
     
        shadowColor: '#000',
        backgroundColor:'#272634',
      
        width:width *0.8,
        padding:12,

      },
      modalHeader:{
        padding:15,
        textTransform:'uppercase',
        fontWeight:600,
        color:'white',
        fontSize:20

      },
      createNewAccText:{
        color:'white',
        paddingLeft:15,
        marginTop:-16

      },
      modalCancelContainer:{
        padding:10
      },
      modalCancel: {
         
          padding:5
      }
})