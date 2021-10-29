import * as React from 'react';
import { Button, View, Text, StyleSheet, TextInput,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AboutPage from './Component/AboutPage.js';
import ExerciseLevelTest from './Component/ExerciseLevelTest.js'
import Profile from './Component/Profile.js'

function HomeScreen({ navigation }) {
 return (
   <View style={styles.container}>
     <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://i.pinimg.com/originals/59/24/cb/5924cb692279fe1920d8cf9e92f6978f.jpg',
        }}
      />
     <Text style={styles.header}>Dog's Land</Text>
     <View style={styles.space} />
     <Button
       style={styles.button}
       title="About Us"
       onPress={() => navigation.navigate('Details')}
     />
     <View style={styles.space} />
      <Button
        style={styles.button}
        title="Go to Pet Profile"
        onPress={() => navigation.navigate('PetProfile')}
      />
     <View style={styles.space} />
     <Button
       style={styles.button}
       title="Dog Exercise Level Test"
       onPress={() => navigation.navigate('Test')}
     /> 
   </View>
 );
}
 
function AboutScreen({ navigation }) {
 return (
   <AboutPage></AboutPage>
 );
}
 
function TestScreen({ navigation }) {
 return (
    <ExerciseLevelTest breed = {"bagel"}></ExerciseLevelTest>
 );
}
 
function PetInfoScreen({ navigation }) {
 return (
   <><Profile></Profile><Button
     title="go to the test"
     onPress={() => {
       navigation.navigate('Test', {
         params: {
           breed: 'corgi'
         }
       });
     } } /></>
 );
}
 
const Stack = createNativeStackNavigator();
 
function App() {
 return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName="Home">
       <Stack.Screen name="Dog Land"
         component={HomeScreen}
         />
       <Stack.Screen name="Details" component={AboutScreen} />
       <Stack.Screen name="PetProfile" component={PetInfoScreen} />
       <Stack.Screen name="Test" component={TestScreen} />
     </Stack.Navigator>
   </NavigationContainer>
 );
}
 
const styles = StyleSheet.create({
 container: {
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center',
   padding: 20
 },
 
 input: {
   height: 40,
   margin: 12,
   borderWidth: 1,
   padding: 10,
 },
 
 header: {
   fontSize: 60,
   fontWeight: 'bold',
   fontStyle: 'italic',
 },
 
 image: {
   flex: 1,
   justifyContent: "center",
   height: 20,
   width: 20,
 },
 
 button: {
   marginBottom: 20,
   padding: 30
 },
 
 space: {
   width: 20,
   height: 20,
 },

 tinyLogo: {
  width: 150,
  height: 150,
},
 
})
 
export default App;
 

