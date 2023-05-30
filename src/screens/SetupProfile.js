import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity,  StatusBar, Modal,Pressable} from 'react-native';


import { Dimensions } from "react-native";
import BottomButtonContainerStyle from '../styles/BottomButtonContainerStyle';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

//ICONS
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import CustomInput from '../components/Input/CustomInput';
import global from '../styles/global';
import CustomButton from '../components/Button/CustomButton';

//
import SelectDropdown from 'react-native-select-dropdown'
import { MaterialCommunityIcons } from '@expo/vector-icons';

<MaterialCommunityIcons name="arrow-down-drop-circle-outline" size={24} color="black" />



const SetupProfile = ({navigation, route}) =>{
    const countries = ["FACEBOOK", "TWITTER", "INSTAGRAM"]
    const [modalVisible, setModalVisible] = useState(false);

    const imageHolder = 'https://images.pexels.com/photos/7116213/pexels-photo-7116213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'

       
    const navigateToNextScreen = () =>{
        navigation.navigate('BottomTabs')
    }
    
    const [name, setName] = useState('')
    const [contactNo, setContactNo] = useState('')
    const [websiteLink, setWebsiteLink] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [bio, setBio] = useState('')

    const { profileDetails } = route.params;


    console.log('in the setup', profileDetails)

      

    //continue button
    const saveData = ()=>{

    let profileDetails = {...profileDetails, name:name, contactNo:contactNo,websiteLink:websiteLink,dateOfBirth:dateOfBirth,bio:bio}
  
        console.log(profileDetails)
        navigation.navigate('TypesOfArt')
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
                   
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                     <View>
                         <Text style={styles.modalHeader}>Add Social Media</Text>
                     </View>
                        <View >
                            <SelectDropdown
                            buttonStyle={{height:20,backgroundColor:"#272634", width:width*0.8, alignSelf:'center', display:'flex', justifyContent:'space-between'}}
                            buttonTextStyle={{fontSize:10, color:'white',marginRight:220}}
                            rowTextStyle={{fontSize:10}}
                            rowStyle={{height:20}}
                            defaultValueByIndex={1}
                            renderDropdownIcon={()=>{
                                return <MaterialCommunityIcons name="arrow-down-drop-circle" size={20} color="white" />
                            }}
                                data={countries}
                             
                                onSelect={(selectedItem, index) => {
                                    console.log(selectedItem, index)
                                }}
                                buttonTextAfterSelection={(selectedItem, index) => {
                                    // text represented after item is selected
                                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                                    return selectedItem
                                }}
                                rowTextForSelection={(item, index) => {
                                    // text represented for each item in dropdown
                                    // if data array is an array of objects then return item.property to represent item in dropdown
                                    return item
                                }}
                            />

                        </View>

                     <View>
                          <CustomInput style={global.modalInput} type="text" placeholder='LINK TO PROFILE' />
                     </View>
                     <View>
                         <CustomButton style={global.modalButton} title="ADD"/>
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
        
        <View>
                 <Text style={styles.headerText}>setup profile</Text>
             </View>
       
           
             <View>
                 <Text style={styles.headerSubtitle}>
                    Once your profile is complete, you can start uploading your artwork.
                 </Text>
             </View>
             <View>
                 <View style={styles.profilePicView}>
                 <Image
        style={styles.image}
        resizeMode={'cover'}
        source={{ uri: `${imageHolder} `}}
      />
                    <Text style={styles.cameraIcon}><Entypo name="camera" size={18} color="black" /></Text>
                
                 </View>
             </View>
             <View style={styles.socialView}>
             <Text style={{ color: 'white'}}>
                        <FontAwesome name="facebook-square" size={24} color="#7d7d86"/>
                        </Text>
                 <Text>
                 <FontAwesome name="twitter-square" size={24} color="#7d7d86" />
                 </Text>
             </View>
             <View>
             <Pressable onPress={()=> setModalVisible(!modalVisible)}>
             <View style={styles.addSocialButton}>
                       <Text><AntDesign name="plus" size={15} color="white" /></Text>
                       <Text style={styles.addSocialButtonTitle}>add social media</Text>
                  </View>
             </Pressable>
                 
             </View>
             <View style={styles.formView}>
             <CustomInput type="text" placeholder='FULL NAME'  value={name} onChangeText={text=>setName(text)} style={global.input} />
             <CustomInput type="text" placeholder='CONTACT NUMBER' value={contactNo} onChangeText={text=>setContactNo(text)} style={global.input} />
             <CustomInput type="text" placeholder='WEBSITE'  value={websiteLink} onChangeText={text=>setWebsiteLink(text)} style={global.input} />
             <CustomInput type="text" placeholder='DATE OF BIRTH' value={dateOfBirth} onChangeText={text=>setDateOfBirth(text)} style={global.input} />
             <CustomInput type="text" placeholder=' BIO'     numberOfLines={5} value={bio} onChangeText={text=>setBio(text)} style={global.input} />
             <CustomButton title="continue" onPress={saveData} style={global.button}/>

             </View>
        </View>
        </>
    )
}


export default SetupProfile;

const styles = StyleSheet.create({
    headerText:{
        padding:20,
        marginTop:20,
        fontSize:30,
        textTransform:'capitalize',
        color:'white'
    },
    headerSubtitle:{
        padding:20,
        marginTop:-30,
        color:'white'
    },
    profilePicView:{
        width:100,
        height:100,
        backgroundColor:'red',
        alignSelf:'center',
        borderRadius:50,
      alignItems:'center'
    },
    cameraIcon:{
        padding:5,
        backgroundColor:'white',
        width:28,
        borderRadius:50,
        position:'absolute',
        bottom:0,
        marginBottom:-15
    },
    socialView:{
        // backgroundColor:'red',
        width:width*0.3,
        marginTop:25,
        alignSelf:'center',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around'
    },
    addSocialButton:{
        backgroundColor:'#2e2d3a',
        display:'flex',
        flexDirection:'row',
        padding:10,
        width:width*0.3,
        alignSelf:'center',
        justifyContent:'space-between',
        borderRadius:30, 
        marginTop:15

    },addSocialButtonTitle:{
        fontSize:9,
        textTransform:'uppercase',
        paddingTop:2,
        color:'white'
    },
    formView:{
        height:height*0.5,
        // backgroundColor:'red'
    },
    image:{
        width:100,
        height:100,
        borderRadius:50,
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
        height:height*0.3

      },
      modalHeader:{
        padding:15,
        textTransform:'uppercase',
        fontWeight:600,
        color:'white',
        fontSize:15

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