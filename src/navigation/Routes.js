import React, { useEffect, useState } from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../screens/Welcome'
import YourProfileInfo from "../screens/YourProfileInfo";
import YourShowCasingInfo from "../screens/YourShowCasingInfo";
import YourArtWorkInfo from "../screens/YourArtWorkInfo";
import SignUp from "../screens/SignUp";
import SignIn from "../screens/SignIn";

import SetupProfile from "../screens/SetupProfile";
import TypesOfArt from "../screens/TypesOfArt";
import Signature from "../screens/Signature";
import Payment from "../screens/Payment";
import Dashboard from "../screens/Dashboard";
import Artworks from "../screens/Artworks";
import BottomTabs from "../components/BottomTabs/BottomTabs";
import Notifications from "../screens/Notifications";
import Exhibitions from "../screens/Exhibitions";
import Profile from "../screens/Profile";
import AddNewArtWork from "../screens/AddNewArtWork";
import { auth } from "../config/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import Sign from "../screens/Signature";

const Stack = createNativeStackNavigator();


const Routes = () =>{

    
    const [user, setUser] =useState('')
    const [userDetails, setUserDetails] =useState('')
  
    useEffect(()=>{
      onAuthStateChanged(auth,(user)=>{
        console.log('user',user)

        setUser(user)
      })
      
    },[])

    return(
        <>
            <NavigationContainer>

            
                <Stack.Navigator >

                 {
                    user? <Stack.Screen name="BottomTabs" component={BottomTabs}  options={{headerShown:false}}/> : <Stack.Screen name="Payment" component={Payment}  options={{headerShown:false}}/>
                 }
                 
                <Stack.Screen name="SignIn" component={SignIn}  options={{headerShown:false}}/>
                <Stack.Screen name="SignUp" component={SignUp}  options={{headerShown:false}}/>
                <Stack.Screen name="SetupProfile" component={SetupProfile}  options={{headerShown:false}}/>
                <Stack.Screen name="Welcome" component={Welcome}  options={{headerShown:false}}/>
                <Stack.Screen name="YourProfileInfo" component={YourProfileInfo}  options={{headerShown:false}}/>
                <Stack.Screen name="YourShowCasingInfo" component={YourShowCasingInfo}  options={{headerShown:false}}/>
                <Stack.Screen name="YourArtWorkInfo" component={YourArtWorkInfo}  options={{headerShown:false}}/>
                <Stack.Screen name="TypesOfArt" component={TypesOfArt}  options={{headerShown:false}}/>
                <Stack.Screen name="Signature" component={Signature}  options={{headerShown:false}}/>
                {/* <Stack.Screen name="Payment" component={Payment}  options={{headerShown:false}}/> */}
              
                <Stack.Screen name="Dashboard" component={Dashboard}  options={{headerShown:false}}/>
                <Stack.Screen name="Artworks" component={Artworks}  options={{headerShown:false}}/>
                {/* <Stack.Screen name="BottomTabs" component={BottomTabs}  options={{headerShown:false}}/> */}
                <Stack.Screen name="Notifications" component={Notifications}  options={{headerShown:false}}/>
                <Stack.Screen name="Exhibitions" component={Exhibitions}  options={{headerShown:false}}/>
                <Stack.Screen name="Profile" component={Profile}  options={{headerShown:false}}/>
                <Stack.Screen name="AddNewArtWork" component={AddNewArtWork}  options={{headerShown:false}}/>
                     
                
                 
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}


export default Routes;