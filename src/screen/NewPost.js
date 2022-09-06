import React, { useState,useEffect,useCallback } from 'react'
import { StyleSheet, Text, View,TextInput, TouchableOpacity,FlatList,Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'; 
import {getAllDisccusionsAction} from '../../store/actions';
import Color from '../../utilities/Color';
import Style from '../../utilities/Style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as ImagePicker from 'expo-image-picker';


const NewPostScreen = props => {
   
    const noImage = "https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg";
    const [poster, setPoster] = useState(props.route.params.UserName);
    const URL = 'https://whatshotapp.herokuapp.com/api';
    const [TitlePost,SetTitlePost] = useState("");
    const [Post,SetPost] = useState("");
    const [ImagePost,SetImagePost] = useState("");

    const sendPost = async() => {
        if(TitlePost != '' && Post != ''){
          const data = await fetch(URL + '/dis/uploadDisccusionSub' ,{
            method: 'post',
            headers: {
              'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
              title: TitlePost,
              content: Post,
              author:poster,
              postImage:ImagePost
            })
          });
          const discussions = await data.json();
          console.log(JSON.stringify(discussions));
         
        } else {
          Alert.alert('Add Comment', 'Please enetr comment for this article');
        }
      
      }
    
    //Add new discussion: '/uploadDisccusionSub' (params: title,content,author)

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
                <Text style={Style.textDashboardHour}>New Post</Text>
               
                </View>
                </View>

          <View style={Style.homeTitleInput}>
                <TextInput 
                value={TitlePost}
                
                onChangeText={text => SetTitlePost(text)}
                style={Style.homeInput}
                placeholder="Enter your title post"
                />

                <TextInput 
                value={Post}
                onChangeText={text => SetPost(text)}
                style={Style.postInput}
                placeholder="Enter your post"
                />

                <TextInput 
                value={ImagePost}
                onChangeText={text => SetImagePost(text)}
                style={Style.homeInput}
                placeholder="Enter your url image"
                />
                
                <TouchableOpacity onPress={sendPost} style={Style.homeButton}>
                <Text style={Style.homeButtonText}>Upload a post</Text>

                 </TouchableOpacity>

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

export default NewPostScreen;