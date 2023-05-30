import { useAuth } from "../hooks/useAuth";
import UserStack from "./userStack";
import AuthStack from "./authStack";
import { auth } from "../config/Firebase";









export default function RootNavigation(){
   

    // setTimeout(()=>{
    //     const user = auth.currentUser;
          
    //        if(user){
    //         console.log('next page', user)
    //        return <UserStack/> 
    //        }else{
    //        return <AuthStack/>
    //        }
         
    //   },3000)

    // console.log('running')
    // if(user){
    //     console.log('user')
    //     return <UserStack/> 
    // }else{
    //     console.log('no user', user);
    //     return  <UserStack/> 
    // }

    // return user ? <UserStack/> : <AuthStack/>
}


