import React, { useState,useEffect,useCallback } from 'react'
import { StyleSheet, Text, View,TextInput, TouchableOpacity,FlatList,Image,ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'; 
import {getAllDisccusionsAction} from '../../store/actions';
import Color from '../../utilities/Color';
import Style from '../../utilities/Style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Post from '../component/Post';

const DisccusionScreen = props => {

    const URL = 'https://whatshotapp.herokuapp.com/api';
    const UserName = props.route.params.UserName;
    const postAuthor = props.route.params.post.author;
    const postDate = props.route.params.post.Date;
    const postAvatar = props.route.params.post.authorAvatar;
    const postImage = props.route.params.post.postImage;
    const postTitle = props.route.params.post.title;
    const countofComment = props.route.params.post.comments;
    const formatted_postDate = new Date(postDate).toDateString();
    const formated_postAuthor =  postAuthor[0].toUpperCase() +postAuthor.substring(1,postAuthor.length);    
    const formatted_postTitle = postTitle.length> 15 ? postTitle.substring(0,15)+'....': postTitle;
    const postContent = props.route.params.post.content;
    const noImage = "https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg";
    const likes = props.route.params.post.likes;
    
    const postId = props.route.params.post._id;
   const likePost = async() => {
      
          const data = await fetch(URL + '/dis/likePost/' + postId,{
            method: 'put',
            headers: {
              'Content-Type' : 'application/json'
            },
          
          });
          const discussions = await data.json();
          //console.log(JSON.stringify(discussions));
         
       
      
      }

    return (
        <View style={Style.dashboard_container}>
          <View style={Style.postUpBar}>
          <TouchableOpacity onPress={() => props.navigation.goBack(null)} style={Style.arrowBackContainer}>
              <MaterialIcons
                        name='arrow-back'
                        size={30}
                    /> 
              </TouchableOpacity>
              <View style={Style.DashboardText}>
                <Text style={Style.textDashboardHour}>{formatted_postTitle}</Text>
               
                </View>
        </View>
        <View style={{width:'100%', height:300,borderWidth:2,alignItems: 'center',justifyContent: 'center'}}>
        <Image 
            source={{uri:postImage? postImage: noImage}}
            style={{width:'100%',height:'100%',resizeMode:'stretch'}}
            />
        </View>

        <View style={{backgroundColor:Color.white,height:3,width:'100%'}}></View>
        <View style={{padding:5,flexDirection:'row-reverse',alignItems:'center'}}>
            <Image 
            source={{uri:postAvatar}}
            style={{width:80,height:87,resizeMode:'stretch'}}
            />
             <View style={{padding:10, width:'80%'}}>
                 
                <Text style={{fontFamily:'Baloo2-SemiBold',fontSize:20}}>{formated_postAuthor}</Text>
                <Text style={{fontFamily:'Baloo2-Regular',fontSize:12}}>{ formatted_postDate }</Text>
                <Text style={{fontFamily:'Baloo2-SemiBold',fontSize:16}}>{postTitle}</Text>  
                <View style={{flexDirection:'row-reverse'}}>             
                <Text style={{fontFamily:'Baloo2-Regular',fontSize:15}}>{ countofComment.length } Comments</Text>
                <Text style={{fontFamily:'Baloo2-Regular',fontSize:15}}>   { likes.length } Likes</Text>
                </View>
                </View>
            </View>
        <View style={{backgroundColor:Color.white,height:3,width:'100%'}}></View>

        
        <ScrollView style={{width:'100%',padding:20}}>
        <Text style={{fontFamily:'Baloo2-SemiBold',fontSize:18}}>{postContent}</Text>
        <View style={{width:'100%',alignItems: 'center' ,flexDirection:'row-reverse'}}>
        <TouchableOpacity onPress={()=>props.navigation.navigate('showcomments',{postId:props.route.params.post._id,UserName:UserName})}
         style={{marginEnd:25,padding:15,borderWidth:2,borderRadius:20,backgroundColor:Color.white}}>
        <Text style={{color:Color.blue1}}>Show Comments</Text>
     
        </TouchableOpacity>
        <TouchableOpacity onPress={likePost}  style={{margin:25,padding:15,borderWidth:2,borderRadius:20,backgroundColor:Color.white}}>
        <Text style={{color:Color.blue1}}>Like Post</Text>
        </TouchableOpacity>
        </View>
        </ScrollView>
        

        </View>
    )
}


export const screenOptions = props=>{
    return{
        hdeartitle: 'Main screen',
        headerShown: false
    }
}

export default DisccusionScreen;