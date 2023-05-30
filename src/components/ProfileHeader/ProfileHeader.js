import React from 'react';
import { StatusBar } from 'react-native';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity,  } from 'react-native';



const ProfileHeader = ()=>{
    const imageHolder = 'https://images.pexels.com/photos/7116213/pexels-photo-7116213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    return(<>
         <View>
             <View>
                 <View style={styles.profileContainer}>
                        <Text style={styles.headerText}>Please select the ones you create</Text>
                        <View style={styles.picHolder}>
                        <Image
        style={styles.image}
        resizeMode={'cover'}
        source={{ uri: `${imageHolder} `}}
      />
                     </View>
                 </View>
                
             </View>
         </View>
    </>)
}

export default ProfileHeader;

const styles = StyleSheet.create({
    profileContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:20,
        marginTop:-40,
    },
    picHolder:{
        width:40,
        height:40,
        borderRadius:50,
        backgroundColor:'red',
        marginTop:-10
    },
    image:{
        width:40,
        height:40,
        borderRadius:50,
    },
    headerText:{
        color:'white'
    }
})