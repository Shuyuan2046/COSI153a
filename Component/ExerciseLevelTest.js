import React from 'react';
import { Button, View, Text, StyleSheet, TextInput} from 'react-native';
import {useState, useEffect} from 'react';
import {useValue} from './ValueContext'

const Test = (props) => {
    const [times, setTimes] = useState(0);
    const [minute, setMinute] = useState(0);
    const [week, setWeek] = useState(0);
    const [evaluate, setEvaluate] = useState('___');
    //const {currentValue, setCurrentValue} = useValue();


    useEffect(() => {
        if (week == 0){
            setEvaluate("____");
        } else if (week < 0.3){
            setEvaluate("mild");
        } else if (week <= 1){
            setEvaluate("moderate");
        } else if (week > 1){
            setEvaluate("heavy");
        }
    },[week])

    return (
        <View style = {styles.container}>
            <View>
                <Text style = {styles.header}> Exercise level evaluation </Text>
                <View style = {styles.space}/>
            </View>
            <Text> your dog's breed is Corgi</Text>
            <View style = {styles.space}/>
            <Text>How many times do you walk your dog every week?</Text>
            <TextInput
                placeholder = "Times / Week "
                onChangeText = {text => {setTimes(text)}}>
            </TextInput>

            <View style = {styles.space}/>

            <Text>How many minutes do you walk your dog each time? </Text>
            <TextInput
                placeholder = "Minutes / Time"
                onChangeText = {text => {setMinute(text)}}>
            </TextInput>

            <View style = {styles.space}/>

            <Button
                color = 'red'
                title = 'Calculate amount of excercise'
                onPress = {() => setWeek(times * minute / 60) }
            />
            <View style = {styles.space}/>
            <Text style = {{fontSize: 24, fontWeight: "bold"}}> The amount of excercise of your dog each week is {evaluate}. </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    header: {
        fontSize: 40,
        fontWeight: 'bold',
    },
    space: {
        width: 20,
        height: 20,
    },

})

export default Test
