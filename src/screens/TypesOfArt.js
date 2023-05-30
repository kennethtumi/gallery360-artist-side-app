import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity,  StatusBar, Modal,Pressable, FlatList,} from 'react-native';
import CustomButton from '../components/Button/CustomButton';
import ProfileHeader from '../components/ProfileHeader/ProfileHeader';
import global from '../styles/global';


import { Dimensions } from "react-native";
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

const TypesOfArt = ()=>{


const typesOfArtWorks = [{id:1,type:'PAINTING',selected:false},{id:2,type:'DRAWING',selected:false},{id:3,type:'SCULPTURE',selected:false},{id:4,type:'PRINTMAKING',selected:false}, {id:5,type:'INSTALLATION ART',selected:false},{id:6,type:'DIGITAL ART',selected:false},{id:7,type:'MIXED MEDIA',selected:false},{id:8,type:'CONCEPTUAL ART',selected:false},{id:9,type:'TEXILE ART',selected:false},{id:10,type:'MOSAIC',selected:false},{id:11,type:'CALLIGRAPHIY',selected:false},{id:12,type:'GRAFFITI ART',selected:false},{id:13,type:'STREET ART',selected:false},{id:14,type:'LAND ART',selected:false},{id:15,type:'POP ART',selected:false},{id:16,type:'ABSTACT ART',selected:false},{id:17,type:'REALISM',selected:false},{id:18,type:'EXPRESSIONISM',selected:false}]
    const [select,setSelect] = useState(typesOfArtWorks)
    console.log('selected',select)
     const onSelected = (item)=>{
         const newItem = select.map((val)=>{
            if(val.id===item.id){
               return {...val,selected:!val.selected}
            }else{
                return val;
            }
         })
         setSelect(newItem)
     }

     console.log(height)

     const selected = select.filter(res=>res.selected===true).map(results=>({type: results.type, id:results.id}));
     console.log('selected',selected)

     var object = selected.reduce(
      (obj, item) => Object.assign(obj, { [item.id] :item.type }), {});
    // var finalArray = selected.map(function (obj) {
    //   return obj.type;
    // });
    
    console.log('object only',object)
    return(
        <>
          
            <StatusBar
             backgroundColor="transparent"
             translucent={true}
      
      />
        <View  style={global.screen}>
             <View>
                 <Text style={styles.title}>
                 There are many types of artworks created by artists across different mediums and styles.
                 </Text>
             </View>
             <ProfileHeader/>
             <View style={styles.artWorkView}>
                    <FlatList
                        data={select}
                        numColumns={4}
                        style={height>700? styles.containerBigggerSCreen: styles.container}
                        renderItem={({ item }) =>
                        <Pressable onPress={()=>{onSelected(item)}}>
                          <Text style={item.selected==true?styles.selectedItem :styles.element}>{item.type}</Text>
                        </Pressable>
                       }
                    />
             </View>
             <View style={height>700? styles.buttonViewOnBigScreen:styles.buttonView}>
                <CustomButton title="continue" style={global.button}/>
             </View>
        </View>
        </>
    )
}

export default TypesOfArt;


const styles = StyleSheet.create({
    title:{
        padding:20,
        marginTop:30,
        color:'white'
    },
    artWorkView:{
     marginTop:40
    },
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        padding:10
      },
      element: {
        padding:10,
        margin: 2,
      
        backgroundColor:'#40404d',
        borderRadius: 30,
        fontSize:9,
        marginTop:15,
        // alignItems: 'center',
        // justifyContent: 'center',
        color:'white'
      },
      selectedItem:{
        padding:10,
        margin: 2,
      
        backgroundColor:'#ceb89e',
        borderRadius: 30,
        fontSize:9,
        marginTop:15,
        // alignItems: 'center',
        // justifyContent: 'center',
        color:'white'
      },
      buttonView:{
        marginTop:120
      },
      //for bigger screen
      buttonViewOnBigScreen:{
        marginTop:300
      },
      containerBigggerSCreen:{
        padding:30
      }
})