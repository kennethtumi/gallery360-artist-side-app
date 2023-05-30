import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity,  StatusBar, Modal,Pressable} from 'react-native';
import LogoContainerStyle from '../styles/LogoContainerStyle';

import { Dimensions } from "react-native";
import ProfileHeader from '../components/ProfileHeader/ProfileHeader';
import reactDom from 'react-dom';
import AddArtworkContainer from '../components/addArtworkView/AddArtworkContainer';
import global from '../styles/global';
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;
const Dashboard = ()=>{

    const [clickedCategory,setClickedCategory]=useState('ALL')

    const categories = ['ALL','PAINTING','DRAWING','PRINTMAKING','TEXTILE ART']


    //getting clicked value
    const getclickedValue = (item)=>{
        console.log(item)
        setClickedCategory(item)


        
    }
    console.log(height)
    return(<>
                <StatusBar
             backgroundColor="transparent"
             translucent={true}
      
      />
            <View style={global.screen}>
            <View style={styles.topStyle}>
              <Image
                style={LogoContainerStyle.paintPicture}
               
                source={require("../../assets/paint.png")}
               />
              </View>
              <ProfileHeader style={styles.profileHeader}/>
              <View>
                <Text style={height<730? styles.smallScreendashBoardTitle: styles.dashBoardTitle}>
                      welcome to your Dashboard
                </Text>
              </View>
              <View>
                <Text style={styles.amountTitle}>
                      THIS MONTH
                </Text>
                <Text style={styles.amount}>
                        R0.00
                </Text>
              </View>
              <View style={height<730? styles.smallScreenchartView: styles.chartView}>
                   
              </View>
              <View style={styles.categoryHeader}>
                  <View>
                      <Text style={styles.salesText}>
                        art sales
                      </Text>
                  </View>
                  <View style={styles.categoryView}>
                      <Text style={styles.categoryText}>
                        category
                      </Text>
                  </View>
              </View>
              <View style={styles.categorySelection}>
                  {
                    categories.map((res)=>(
                        <>
                        <Pressable onPress={()=>getclickedValue(res)}>
                        <Text style={ clickedCategory ===res?  styles.category :  styles.selectedcategory }>
                                {res}
                           </Text>
                        </Pressable>
                         
                         </>
                    ))
                  }
              </View>
              <View>
                   <AddArtworkContainer/>
              </View>
            </View>
             
       </>)
}


export default Dashboard;

const styles = StyleSheet.create({
    topStyle:{
        justifyContent: 'center',
        alignItems: 'center',
        width:width,
  
    },
    profileHeader:{
      marginBottom:40
    },
    dashBoardTitle:{
        padding:20,
        textTransform:'capitalize',
        fontSize:30,
        marginTop:-40
    },
    amountTitle:{
        padding:20,
        textTransform:'capitalize',
        fontSize:12,
        marginTop:-40,
        color:'white'
    },
    amount:{
        padding:20,
        textTransform:'capitalize',
        fontSize:12,
        marginTop:-40,
        color:'white'
    },
    chartView:{
        height:height*0.3,
        backgroundColor:'red',
         
    },
    categoryHeader:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10
    },
    salesText:{
        padding:15,
        fontSize:20,
        textTransform:'capitalize',
        color:'white'

    },
    categoryText:{
        padding:15,
        textTransform:'uppercase',
        fontSize:10,
        marginTop:11,
        color:'white'
    },
    categoryView:{
        borderBottomWidth:1,
        borderBottomColor:'#b2b2b2',
       


    },
    categorySelection:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',

     
    },
    category:{
        fontSize:11,
        backgroundColor:'#ceb89e',
        padding:5,
        borderRadius:20,
        color:'white'

        
    },
    selectedcategory:{
        fontSize:11,
        // backgroundColor:'white'
        padding:5,
        color:'black',
        color:'white'
    },


    //smalerscrens
    smallScreendashBoardTitle:{
        padding:20,
        textTransform:'capitalize',
        fontSize:20,
        marginTop:-40,
        color:'white'
    },
    smallScreenchartView:{
        height:height*0.27,
        backgroundColor:'red',
        color:'white'
         
    },


})