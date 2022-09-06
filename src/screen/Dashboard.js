import React, { useState,useEffect,useCallback } from 'react'
import { StyleSheet, Text, View,TextInput, TouchableOpacity,FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'; 
import {getAllDisccusionsAction} from '../../store/actions';
import Color from '../../utilities/Color';
import Style from '../../utilities/Style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Post from '../component/Post';

const DashboardScreen = props => {
    const PostSelector = useSelector(state => state.AllDisccusionsReducer)
   // console.log(PostSelector);
    let post = PostSelector ? PostSelector.AllDisccusionsReducer.Disccusions : null;
    const UserName = props.route.params.UserName;
    const format_userName = UserName[0].toUpperCase() +UserName.substring(1,UserName.length);
   // console.log(format_userName);
  
    const blessing = () => {
        const currentTime = new Date().getHours();
        if(currentTime >= 5 && currentTime<12) {
            return "Good Morning";
        } else if(currentTime >= 12 && currentTime<18) {
            return "Good After Noon";
        } else if(currentTime >= 18 && currentTime<22) {
            return "Good Evening";
        } else {
            return "Good Night";
        }
    }

    const blessingText = blessing().split(' ');
    

    return (
        <View style={Style.dashboard_container}>
          <View style={Style.dashboardUpBar}>
              <TouchableOpacity onPress={() => props.navigation.goBack(null)} style={Style.arrowBackContainer}>
              <MaterialIcons
                        name='arrow-back'
                        size={30}
                    /> 
              </TouchableOpacity>

                <View style={Style.DashboardText}>
                <Text style={Style.textDashboardHour}>{blessingText[0]} {blessingText[1]} {blessingText.length==3? blessingText[2] : ''}{' '+format_userName}</Text>
               
                </View>
  
          </View>

          
          <TouchableOpacity onPress={()=>props.navigation.navigate('newpost',{UserName:UserName})}
         style={{marginLeft:120,width:'35%',marginEnd:25,padding:15,borderWidth:2,borderRadius:20,backgroundColor:Color.white}}>
        <Text style={{color:Color.blue1}}>+ New Post</Text>
     
        </TouchableOpacity>
       

          <View style={Style.containerPost}>
            {
                !post || post.length == 0 ? (
                        
                        <View style={Style.noPostContainer}><Text style={Style.noPostText}>No content to show  right now</Text></View>
                ):(
                    <FlatList 
                    data={post}
                    keyExtractor={item => item._id}
                    renderItem={
                        post=>
                        <TouchableOpacity onPress={()=>props.navigation.navigate('disccusion',{post:post.item,UserName:format_userName})}>
                        <Post post={post.item} />
                        </TouchableOpacity>
                    }
                    />
                )
            }
          </View>

        </View>
    )
}


export const screenOptions = props=>{
    return{
        hdeartitle: 'Main screen',
        headerShown: false
    }
}

export default DashboardScreen;