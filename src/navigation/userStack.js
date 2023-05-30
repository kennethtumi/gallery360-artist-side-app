import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




import BottomTabs from '../components/BottomTabs/BottomTabs';
import AddNewArtWork from '../screens/AddNewArtWork';
import Artworks from '../screens/Artworks';
import Dashboard from '../screens/Dashboard';
import Exhibitions from '../screens/Exhibitions';
import Notifications from '../screens/Notifications';
import Profile from '../screens/Profile';



const Stack = createNativeStackNavigator();


export default function UserStack(){
    return(
        <>
             <NavigationContainer>
                <Stack.Navigator >
             
                <Stack.Screen name="BottomTabs" component={BottomTabs}  options={{headerShown:false}}/>
                <Stack.Screen name="Dashboard" component={Dashboard}  options={{headerShown:false}}/>
                <Stack.Screen name="Artworks" component={Artworks}  options={{headerShown:false}}/>
                
                <Stack.Screen name="Notifications" component={Notifications}  options={{headerShown:false}}/>
                <Stack.Screen name="Exhibitions" component={Exhibitions}  options={{headerShown:false}}/>
                <Stack.Screen name="Profile" component={Profile}  options={{headerShown:false}}/>
                <Stack.Screen name="AddNewArtWork" component={AddNewArtWork}  options={{headerShown:false}}/>
                    
                
                 
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}