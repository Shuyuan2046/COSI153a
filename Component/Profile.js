import React from 'react';
import { Button, View, Text, StyleSheet, TextInput, Alert, Pressable} from 'react-native';
import {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ExerciseLevelTest from './ExerciseLevelTest'
//import AsyncStorage from '@react-native-async-storage/async-storage';
import ValueProvider from './ValueContext';

const Profile = ({navigation, route}) => {
  const [info, setInfo] = useState({name:'',email:''});
  const [name, setName] = useState('');
  const [age,setAge] = useState('')
  const [breed,setBreed] = useState('')
  const [submitted, setSubmitted] = useState(false);

  const onPressHandler = () => {
    setSubmitted(!submitted);
  }

    return(
        <View style={styles.container}>
          <Text>Please enter your pet information in the following lines: </Text>
          <TextInput
              multiline
              style={styles.input}
              placeholder="pet name"
              onChangeText={text => {setName(text)}}
              value={name}
              maxLength={12}
          />
          <TextInput
              keyboardType='numeric'
              style={styles.input}
              placeholder="pet age"
              onChangeText={text => {setAge(text)}}
              value={age}
          />

          <TextInput
              style={styles.input}
              placeholder="pet breed"
              onChangeText={text => {setBreed(text)}}
              value={breed}
          /> 
          {/* <ValueProvider value={breed}>
              <ExerciseLevelTest />
          </ValueProvider> */}

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Button
              color={submitted? 'green': 'royalblue'}
              title={submitted ? 'Clear' : 'Submit'}
              onPress={onPressHandler}
              />
          </View>   
          
          {/* {submitted? 
            
          : 
          null} */}
          
        </View>
    ) 
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
    borderRadius: 5,
    fontSize: 20,
  },

  space: {
    width: 10,
    height: 10,
  },

  button: {
    width: 80,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
  }
})

export default Profile
