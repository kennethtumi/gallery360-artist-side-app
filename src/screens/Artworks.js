import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity,  StatusBar, Modal,Pressable,ScrollView, FlatList} from 'react-native';



import { Dimensions } from "react-native";
import AddArtworkContainer from '../components/addArtworkView/AddArtworkContainer';
import ProfileHeader from '../components/ProfileHeader/ProfileHeader';
import global from '../styles/global';
import LogoContainerStyle from '../styles/LogoContainerStyle';
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;


const Artworks = ()=>{

    const [clickedType,setClickedType]=useState('ALL')
    const [arts, setArts] =useState(typesOfArtWorks)

    const artWorksTypes = ['ALL','STAND ALONE',"NATURE'S BEAUTY",'PRINTMAKING','URBAN LANDSCAPES']
    const typesOfArtWorks = [{id:1,type:'PAINTING',selected:false},{id:2,type:'DRAWING',selected:false},{id:3,type:'SCULPTURE',selected:false},{id:4,type:'PRINTMAKING',selected:false}, {id:5,type:'INSTALLATION ART',selected:false},{id:6,type:'DIGITAL ART',selected:false},{id:7,type:'MIXED MEDIA',selected:false},{id:8,type:'CONCEPTUAL ART',selected:false},{id:9,type:'TEXILE ART',selected:false},{id:10,type:'MOSAIC',selected:false},{id:11,type:'CALLIGRAPHIY',selected:false},{id:12,type:'GRAFFITI ART',selected:false},{id:13,type:'STREET ART',selected:false},{id:14,type:'LAND ART',selected:false},{id:15,type:'POP ART',selected:false},{id:16,type:'ABSTACT ART',selected:false},{id:17,type:'REALISM',selected:false},{id:18,type:'EXPRESSIONISM',selected:false}]

    const getclickedValue = (item)=>{
        console.log(item)
        setClickedType(item)
    }
    return(<>
        <StatusBar
             backgroundColor="transparent"
             translucent={true}
      
      />
        <View style={global.screen}>
            <View>
            <View style={styles.topStyle}>
                <Image
                    style={LogoContainerStyle.paintPicture}

                    source={require("../../assets/paint.png")}
                />
            </View>
            <ProfileHeader style={styles.profileHeader} />
            <View style={styles.artWorkHeader}>
                <Text style={styles.artWorkTitle}>
                    artworks
                </Text>
                <Text style={styles.artWorkButton}>
                    new artwork
                </Text>
            </View>
            <View style={styles.filterView}>
                <Text style={styles.filterText}>
                    all
                </Text>
                <Text le={styles.filterIcon}>
                    filter
                </Text>
            </View>
            <View>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <View style={styles.categorySelection}>
                    {
                        artWorksTypes.map((res) => (
                            <>

                                <Pressable onPress={() => getclickedValue(res)}>
                                    <Text style={clickedType === res ? styles.category : styles.selectedcategory}>
                                        {res}
                                    </Text>
                                </Pressable>

                            </>
                        ))
                    }
                </View>

            </ScrollView>
            </View>
           
          
          <View style={styles.addContainerView}>
          {/* <AddArtworkContainer /> */}
          </View>
            

          <View style={styles.artWorkView}>
                    <FlatList
                 
                        data={typesOfArtWorks}
                        numColumns={2}
                        contentContainerStyle={{ paddingBottom: 30 }}
                        style={{height: '95%'}}
                        ItemSeparatorComponent={() => <View style={{width: 20, height:10}} />}
                      
                       // style={height>700? styles.containerBigggerSCreen: styles.container}
                        renderItem={({ item }) =>
                        <Pressable onPress={()=>{}}>
                            <View style={styles.imageContainer}>
                            <Text style={styles.imageTitle}>{item.type}</Text>
                            </View>
                        
                        </Pressable>
                       }
                    />
          </View>
             
            </View>
        </View>
       </>)
}


export default Artworks;

const styles = StyleSheet.create({
    topStyle:{
        justifyContent: 'center',
        alignItems: 'center',
        width:width,
  
    },
    profileHeader:{
        marginBottom:40
      },
      artWorkHeader:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:15
      },
      artWorkTitle:{
            fontSize:30,
            textTransform:'capitalize',

      },
      artWorkButton:{
        fontSize:14,
        textTransform:'uppercase',
        backgroundColor:'#ceb89e',
        padding:10,
        borderRadius:20,
        color:'white'
      },
      filterView:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:15
      },
      filterText:{
        fontSize:14,
        textTransform:'uppercase',
      },
      filterIcon:{

      },
      categorySelection:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
     

     
    },
    category:{
        fontSize:11,
        backgroundColor:'#616161',
        padding:10,
        borderRadius:20,
        color:'white'

        
    },
    selectedcategory:{
        fontSize:11,
        // backgroundColor:'white'
        padding:10,
        color:'black',
        color:'white'
    },
    addContainerView:{
       marginTop:height*0.1
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
      imageContainer:{
         borderWidth:1,
         borderColor:'black',
         width:width*0.40,
         height:height*0.3,
        margin:6,
       alignItems:'center'
      },
      artWorkView:{
         alignItems:'center',
         backgroundColor:'red',
         marginTop:-40,
         height:'90%'
      },
      imageTitle:{
          position:'absolute',
          bottom:0
      }

 } )