import React from 'react';
import { Button, View, Text, StyleSheet, TextInput, Alert, Pressable} from 'react-native';
import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = (props) => {
  const [info, setInfo] = useState({name:'',email:''});
  const [name, setName] = useState('');
  const [age,setAge] = useState('')
  const [breed,setBreed] = useState('')
  const [submitted, setSubmitted] = useState(false);


  const onPressHandler = () => {
    if (Number.isInteger(age)){
        setSubmitted(!submitted);
    } else {
        Alert.alert('Warning', 'The age must be a number', [
          {text: 'OK'}])
    }
  }

    useEffect(() => {getData()}
           ,[])

    const getData = async () => {
        try {
          // the '@profile_info' can be any string
          const jsonValue = await AsyncStorage.getItem('@profile_info')
          let data = null
          if (jsonValue!=null) {
            data = JSON.parse(jsonValue)
            setInfo(data)
            setName(data.name)
            setAge(data.age)
            setBreed(data.breed)
            console.log('just set Info, Name, Age and Breed')
          } else {
            console.log('just read a null value from Storage')
            setInfo({})
            setName("")
            setAge("")
            setBreed("")
          }

        } catch(e) {
          console.log("error in getData ")
          console.dir(e)
          // error reading value
        }
  }

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@profile_info', jsonValue)
      console.log('just stored '+jsonValue)
    } catch (e) {
      console.log("error in storeData ")
      console.dir(e)
      // saving error
    }
}
    const clearAll = async () => {
      try {
        console.log('in clearData')
        await AsyncStorage.clear()
      } catch(e) {
        console.log("error in clearData ")
        console.dir(e)
        // clear error
      }
    }



    return(
        <View style={styles.container}>
          <Text>Please enter your pet information in the following lines: </Text>
          <View>
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
          </View>
         
         <View style={{backgroundColor: 'darkcyan'}}>
            <Button
                color='white'
                title='Submit'
                onPress = {() => {
                console.log("saving profile");
                const theInfo = {name:name,age:age,breed:breed}
                console.log(`theInfo=${theInfo}`)
                setInfo(theInfo)
                console.log('data='+JSON.stringify(theInfo))
                storeData(theInfo)
            }}
          />
         </View>
          
        <View style={styles.space} />

        <View style={{backgroundColor: 'gray'}}>
          <Button
            color='white' title='Clear memory'
            onPress = {() => {
            console.log('clearing memory');
            clearAll()
            }}
          />
        </View>

        <View style={styles.space} />
        
        <View style={{backgroundColor: 'lightsteelblue'}}>
          <Button
            color='white' title='Load Profile from Memory'
            onPress = {() => {
            console.log('loading profile');
            getData()
            }}
          />
        </View>
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
})

export default Profile;
