import React, { useState,useEffect,useCallback } from 'react'
import { StyleSheet, Text, View,TextInput, TouchableOpacity,FlatList,Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'; 
import {getAllDisccusionsAction} from '../../store/actions';
import Color from '../../utilities/Color';
import Style from '../../utilities/Style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const post = props =>{

    const postAuthor = props.post.author;
    const postDate = props.post.Date;
    const postAvatar = props.post.authorAvatar;
    const postImage = props.post.postImage;
    const postTitle = props.post.title;
    const countofComment = props.post.comments;
    const formatted_postDate = new Date(postDate).toDateString();
    const formated_postAuthor =  postAuthor[0].toUpperCase() +postAuthor.substring(1,postAuthor.length);
    const formatted_postTitle = postTitle.length> 15 ? postTitle.substring(0,15)+'....': postTitle;
    const likes = props.post.likes;

    return(
        <View style={{backgroundColor:Color.white,width:350, padding:30,margin:10,borderRadius:20,padding:20,flexDirection:'row-reverse'}}>
            <Image 
            source={{uri:postImage? postImage: postAvatar}}
            style={{width:80,height:90,resizeMode:'cover',borderRadius:10}}
            />
            <View style={{padding:10}}>
                <Text style={{fontFamily:'Baloo2-SemiBold',fontSize:20}}>{formated_postAuthor}</Text>
                <Text style={{fontFamily:'Baloo2-Regular',fontSize:12}}>{ formatted_postDate }</Text>
                <Text style={{fontFamily:'Baloo2-SemiBold',fontSize:16}}>{formatted_postTitle}</Text>
                <View style={{flexDirection:'row-reverse'}}>
                <Text style={{fontFamily:'Baloo2-Regular',fontSize:15}}>{ countofComment.length } Comments</Text>
                <Text style={{fontFamily:'Baloo2-Regular',fontSize:15}}>   { likes.length } Likes</Text>
                </View>
              
            </View>
            
        </View>
    )
}

export default post;