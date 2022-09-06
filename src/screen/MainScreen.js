import React, { useState,useEffect,useCallback } from 'react'
import { StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'; 
import {getAllDisccusionsAction} from '../../store/actions';
import Color from '../../utilities/Color';
import Style from '../../utilities/Style';


const MainScreen = props => {

    const dispatch = useDispatch();
    const [UserName,SetUserName] = useState("")
    const getAllDisccusions = useCallback(async()=>{
        let action = getAllDisccusionsAction();
        try{
            await dispatch(action);
        }
        catch(err){
            console.log(err);
        }
    },[getAllDisccusionsAction,dispatch]);
    
    useEffect (()=>{
        getAllDisccusions();
    },[getAllDisccusions])

    

    return (
        <View style={Style.home_container}>
            <View style={Style.homeTitle}>
            <Text style={Style.homeTitleText}>Wallcome to What's hot</Text>
            <Text style={Style.homeSubTitle}>All the hot stuff in one place</Text>
            </View>

            <View style={Style.homeTitle}>
            <Text style={Style.homeExplain}>All you need to do is just</Text>
            <Text style={Style.homeExplain}>Peek a name and join to </Text>
            <Text style={Style.homeExplain}>Awer Conversions </Text>
            </View>
            <View style={Style.homeTitleInput}>
                <TextInput 
                value={UserName}
                onChangeText={text => SetUserName(text)}
                style={Style.homeInput}
                placeholder="Enter your name"
                />
                
            </View>
            {
                UserName.length > 2?(
                    <TouchableOpacity onPress={()=>props.navigation.navigate('dashboard',{UserName:UserName})} style={Style.homeButton} >
                <Text style={Style.homeButtonText}>Continue To App</Text>
            </TouchableOpacity>
                ):(
                    <View style={Style.homeButtonBlock} >
                <Text style={Style.homeButtonText}>Continue To App</Text>
                </View>
                )
            }
            
        </View>
    )
}


export const screenOptions = props=>{
    return{
        hdeartitle: 'Main screen',
        headerShown: false
    }
}

export default MainScreen;