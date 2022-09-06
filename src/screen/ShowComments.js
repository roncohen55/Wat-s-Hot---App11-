import React, { useState,useEffect,useCallback } from 'react'
import { StyleSheet, Text, View,TextInput, TouchableOpacity,FlatList,Image,ScrollView,KeyboardAvoidingView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'; 
import {getAllDisccusionsAction} from '../../store/actions';
import Color from '../../utilities/Color';
import Style from '../../utilities/Style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Post from '../component/Post';

const ShowCommentsScreen = props => {

    const [NewComment,setNewComment] = useState("");
   
   const [commentArray, setCommentArray] = useState([]);
   const postId = props.route.params.postId;
   const URL = 'https://whatshotapp.herokuapp.com/api/dis/getDisccusionById/' + postId;

   const baseURL = 'https://whatshotapp.herokuapp.com/api';
    
    //console.log(postId);

    const getPostById = async() => {
        const response = await fetch(URL, {
            method:'GET',
            headers:{
                'Content-type': 'application/json',
            }
        });

        const data = await response.json();
        if(data.status){
            setCommentArray(data.Disccusion.comments)
        }

       
    }

    getPostById();
    console.log(commentArray);
   
 

   
    const [poster, setPoster] = useState(props.route.params.UserName);
    const sendComment = async() => {
        if(NewComment != '' && poster != ''){
          const data = await fetch(baseURL + '/dis/comment/' + postId,{
            method: 'put',
            headers: {
              'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
              comment: NewComment,
              commentAuthor: poster
            })
          });
          const discussions = await data.json();
          //console.log(JSON.stringify(discussions));
         
        } else {
          Alert.alert('Add Comment', 'Please enetr comment for this article');
        }
      
      }

    
    

    return (
        <View  style={Style.dashboard_container}>
         <View style={Style.postUpBar}>
         <TouchableOpacity onPress={() => props.navigation.goBack(null)} style={Style.arrowBackContainer}>
              <MaterialIcons
                        name='arrow-back'
                        size={30}
                    /> 
              </TouchableOpacity>
         </View>
         <View style={{width:'100%', height:'75%',borderWidth:2}}>

         {
                !commentArray || commentArray.length == 0 ? (
                        
                        <View style={Style.noPostContainer}><Text style={Style.noPostText}>No Comments to show  right now</Text></View>
                ):(
                    <FlatList 
                    data={commentArray}
                    keyExtractor={item => item._id}
                    renderItem={
                        post=>
                        <View style={{padding:10}}>
                              <Text style={{marginLeft:15,color:Color.liteRed,fontSize:18}}>{post.item.commentAuthor}</Text>
                        <View style={{flexDirection:'row-reverse'}}>
                        <Image 
                         source={{uri:post.item.avatar}}
                          style={{width:80,height:90,resizeMode:'cover',borderRadius:10}}
                         />
                         
                        <Text style={{marginTop:20,marginLeft:10,fontSize:16}}>{post.item.comment}</Text>
                        </View>
                        <Text style={{marginLeft:15,color:Color.liteRed,fontSize:12}}>like: {post.item.likes.length}</Text>

                        
                      
                        </View>
                        
                    }
                    />
                )
            }

         </View>
        
         <View style={{width:'100%', height:'25%',borderWidth:2,backgroundColor:Color.liteRed,flexDirection:'row-reverse'}}>
      
             <TextInput 
             style={Style.homeInput}
             onChangeText={text => setNewComment(text)}
             placeholder="New Comment"
             />
            
             <TouchableOpacity 
             onPress={sendComment}
             style={{backgroundColor:Color.white,height:30,marginTop:15,borderRadius:10}}>
                 <Text style={{fontSize:16}}>Send Comment</Text>
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

export default ShowCommentsScreen;