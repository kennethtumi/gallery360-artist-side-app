import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BottomButtonContainer from './src/components/BottomButtonContainer/BottomButtonContainer';



import './src/config/Firebase'

import LogoContainer from './src/components/LogoContainer/logoContainer';
import RootNavigation from './src/navigation';
import Routes from './src/navigation/Routes';
import { useEffect } from 'react';
import { auth } from './src/config/Firebase';
import { onAuthStateChanged } from 'firebase/auth';
export default function App() {


  useEffect(()=>{
      
      onAuthStateChanged(auth,(user)=>{
        console.log(user)
      })

},[])


// const user= auth.currentUser;
// console.log('in appjs',user);


  return (
    <>
    {/* <View  style={{ width:'100%'}}  >
    <View  >
        <LogoContainer />

      </View>

      <View >
        <BottomButtonContainer />

      
      </View>

    </View> */}
    

    <Routes />
    {/* <RootNavigation/> */}

    </>
  
  );
}


