import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Payment from '../screens/Payment';
import SetupProfile from '../screens/SetupProfile';
import Signature from '../screens/Signature';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import TypesOfArt from '../screens/TypesOfArt';
import Welcome from '../screens/Welcome';
import YourArtWorkInfo from '../screens/YourArtWorkInfo';
import YourProfileInfo from '../screens/YourProfileInfo';
import YourShowCasingInfo from '../screens/YourShowCasingInfo';



const Stack = createNativeStackNavigator();




export default function AuthStack(){
    return(
        <>
             <NavigationContainer>
                <Stack.Navigator>
                
                <Stack.Screen name="SignIn" component={SignIn}  options={{headerShown:false}}/>
                <Stack.Screen name="SignUp" component={SignUp}  options={{headerShown:false}}/>
                <Stack.Screen name="SetupProfile" component={SetupProfile}  options={{headerShown:false}}/>
                <Stack.Screen name="Welcome" component={Welcome}  options={{headerShown:false}}/>
                <Stack.Screen name="YourProfileInfo" component={YourProfileInfo}  options={{headerShown:false}}/>
                <Stack.Screen name="YourShowCasingInfo" component={YourShowCasingInfo}  options={{headerShown:false}}/>
                <Stack.Screen name="YourArtWorkInfo" component={YourArtWorkInfo}  options={{headerShown:false}}/>
                <Stack.Screen name="TypesOfArt" component={TypesOfArt}  options={{headerShown:false}}/>
                <Stack.Screen name="Signature" component={Signature}  options={{headerShown:false}}/>
                <Stack.Screen name="Payment" component={Payment}  options={{headerShown:false}}/>
                 
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}
