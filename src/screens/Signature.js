import React, { createRef, useState } from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity,  StatusBar, Modal,Pressable} from 'react-native';

import { Dimensions } from "react-native";
import CustomButton from '../components/Button/CustomButton';
import BottomButtonContainerStyle from '../styles/BottomButtonContainerStyle';
import global from '../styles/global';

import Signature from "react-native-signature-canvas";
import { TouchableHighlight } from 'react-native';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

const Sign = () => {
    const [signature, setSign] = useState(null);

    const handleOK = (signature) => {
        console.log(signature);
        setSign(signature);
      };

      const handleEmpty = () => {
        console.log("Empty");
      };

      const style = `.m-signature-pad--footer
      .button {
        background-color: #CEB89E;
        color: #FFF;
      }`;
      const webStyle = `.m-signature-pad--footer
    .save {
        display: none;
    }
    .clear {
        display: none;
    }
`;

    const sign = createRef()
    return (
        <>

            <StatusBar
                backgroundColor="transparent"
                translucent={true}

            />
            <View style={global.screen}>
                <View>
                    <Text style={styles.signatureText}>
                        Signature
                    </Text>
                </View>
                <View>
                    <Text style={styles.signatureSubtitle}>
                        Once your profile is complete, you can start uploading your artwork.
                    </Text>
                </View>
                <View style={styles.signatureView}>
                <View style={{ flex: 1 }}>
      <View style={styles.preview}>
        {signature ? (
          <Image
            resizeMode={"contain"}
            style={{ width: 335, height: 70 }}
            source={{ uri: signature }}
          />
        ) : null}
      </View>
      <Signature
        onOK={handleOK}
        onEmpty={handleEmpty}
        descriptionText="Sign"
        clearText="Clear"
        confirmText="Save"
        webStyle={style}
      />
    </View>



                </View>
                {/* <View>
                    <Pressable onPress={handleOK}>
                    <Text style={styles.uploadButton}>
                        upload signature
                    </Text>
                    </Pressable>
                    
                </View> */}
                <View style={styles.buttonView}>
                    <CustomButton style={global.modalButton} title="CONTINUE" />
                </View>
            </View>
        </>
    )
}

export default Sign;

const styles = StyleSheet.create({
    signatureText:{
        padding:20,
        marginTop:20,
        fontSize:30,
        color:'white'
    },
    signatureSubtitle:{
        padding:20,
        marginTop:-30,
        color:'white'
    },
    signatureView:{
        height:height*0.6,
        backgroundColor:'#CEB89E',
        borderRadius:20
    },
    uploadButton:{
        textAlign:'center',
        textTransform:'uppercase',
        color:'#FFFFFF',
        fontWeight:'bold',
        padding:20
    },
    buttonView:{
        marginTop:12
    },
    signature: {
        flex: 1,
        borderColor: '#000033',
        borderWidth: 1,
    },
    buttonStyle: {
        flex: 1, justifyContent: "center", alignItems: "center", height: 50,
        backgroundColor: "#eeeeee",
        margin: 10
    }
})