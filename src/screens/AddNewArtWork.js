import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, StatusBar, Modal, Pressable, ScrollView, FlatList } from 'react-native';



import { Dimensions } from "react-native";
import CustomButton from '../components/Button/CustomButton';
import CustomInput from '../components/Input/CustomInput';
import global from '../styles/global';
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;



const AddNewArtWork = () => {

    const [isTicked, SetIsTicked] = useState(false)


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
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <View>
                        <Text style={styles.header}>
                            new artwork
                        </Text>
                    </View>
                    <View>
                        <View style={styles.imageContainer}>
                                <Text >
                                      cdf
                                </Text>
                        </View>
                    </View>
                    <View>
                    <CustomInput type="text" placeholder='TITLE' style={global.input}/>
                    <CustomInput type="password" placeholder='MEDIUM' style={global.input} />
                    <CustomInput type="password" placeholder='DIMENSIONS' style={global.input} />
                    <CustomInput type="date" placeholder='YEAR' style={global.input} />
                    <CustomInput type="number" placeholder='PRICE' style={global.input} />
                    <CustomInput type="password" placeholder='CONDITION' style={global.input} />
                    <CustomInput type="password" placeholder='AVAILABILITY' style={global.input} />
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
                                Stand alone<Text style={{ textDecorationLine: 'underline' }}>(not part of collection)</Text>
                            </Text>
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
                                Limited Edition
                            </Text>
                        </View>
                    <CustomInput type="password" placeholder='ARTWORK TYPE' style={global.input} />
                    <CustomInput type="text" placeholder=' STATEMENT'     numberOfLines={5} style={global.input} />
                    <View style={styles.policyContainer}>
                         <Text>
                            return policy
                         </Text>
                         <Text>
                            GALLERY360
                         </Text>
                    </View>
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
                            I agree to Gallery360's<Text style={{ textDecorationLine: 'underline' }}>Terms & conditions</Text>
                        </Text>
                    </View>
          <View style={{paddingBottom:10}}>
                    <CustomButton title="Continue" style={global.button} />
                </View>

                </ScrollView>

            </View>
        </>
    )
}

export default AddNewArtWork;

const styles = StyleSheet.create({
    header: {
        padding: 15,
        marginTop: 20,
        fontSize: 25,
        textTransform: 'capitalize'

    },
    imageContainer: {
        width: width * 0.97,
        height: height * 0.3,
        backgroundColor: 'red',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'dashed',
        justifyContent: 'center',
        alignItems: 'center',
    },
    policyContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:14,
        width:width*0.95,
     
        alignSelf:'center'

    },
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