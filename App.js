import React from 'react'
import Details from './screens/Details';
import Search from './screens/Search';
import { configureStore } from '@reduxjs/toolkit';
import  SearchReducer  from './reducers/SearchReducer';
import {Provider} from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// Create central store where all data will hold
const store = configureStore({
  reducer:{
    search:SearchReducer
  }
})

// used navigationstack to navigate screens
const Stack = createNativeStackNavigator();


 function App(){
  return(
    <NavigationContainer>
         
         <Stack.Navigator initialRouteName="Home">
         <Stack.Screen name="Home" component={Search} />
         <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>

     </NavigationContainer>
     
  )
}
// Provide access of store to the App
export default ()=>{
  return(
    <Provider store={store}>
       <App />
    </Provider>
  )
}
