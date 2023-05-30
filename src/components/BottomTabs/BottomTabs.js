import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Dashboard from '../../screens/Dashboard';
import Artworks from '../../screens/Artworks';
import Notifications from '../../screens/Notifications';
import Exhibitions from '../../screens/Exhibitions';
import Profile from '../../screens/Profile';
import { auth } from '../../config/Firebase';


const Tab = createBottomTabNavigator();

const BottomTabs = ()=>{


   useEffect(()=>{
          const user = auth.currentUser;

          console.log('user',user)
   },[])

    return(
        <>
        
             <Tab.Navigator

                initialRouteName="Dashboard"
              
                
                screenOptions={{
                    "tabBarShowLabel": false,
                    "tabBarStyle": [
                        {
                            "display": "flex"
                        },
                        null
                    ],
                    tabBarActiveTintColor: 'white',
                    showLabel: false,
                    tabBarStyle: {
                        // height: 90,
                        // paddingHorizontal: 5,
                        // paddingTop: 0,
                        backgroundColor: '#2b2a38',

                        borderTopWidth: 2,
                        borderTopColor:'#cdb79c'
                    },


                }}
     
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
        //   tabBarLabel: 'Home',
        headerShown:false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="bar-chart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Artworks"
        component={Artworks}
        options={{
            headerShown:false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-rocket" size={size}  color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
         
          tabBarIcon: ({ color, size }) => (
          <Entypo name="notification" size={size} color={color}/>
          ),
        }}
      />
      <Tab.Screen
        name="Exhibition"
        component={Exhibitions}
        options={{
         
          tabBarIcon: ({ color, size }) => (
            <Entypo name="shop" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
         
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-sharp" size={size} color={color} />
          ),
        }}
      />
     
    </Tab.Navigator>
         </>
    )
}

export default BottomTabs;