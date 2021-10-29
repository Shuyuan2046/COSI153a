import React from 'react';
import { Button, View, Text, StyleSheet, TextInput} from 'react-native';
import {useState, useEffect} from 'react';


const Test = (props) => {
    const [times, setTimes] = useState(0);
    const [minute, setMinute] = useState(0);
    const [week, setWeek] = useState(0);
    const [evaluate, setEvaluate] = useState('___');

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
            <View style={{backgroundColor: 'lightgreen'}}>
                <Text style={{fontSize: 20, fontWeight: 'bold', alignItems: "center"}}> Welcome to the exercise level test! </Text>
                <View style = {styles.space}/>
            </View>
            <Text> your dog's breed is {props.breed}</Text>
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

            <View style={{backgroundColor:'cornflowerblue'}}>
            <Button
                color = 'black'
                title = 'Calculate amount of excercise'
                onPress = {() => setWeek(times * minute / 60) }
            />
            </View>
            
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
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    space: {
        width: 20,
        height: 20,
    },

})

export default Test
