import {StyleSheet} from 'react-native';
import Colors from './Color';

export default StyleSheet.create({
    home_container:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor:Colors.whaitGreen,
    },
    homeTitle:{
        padding:10,
       // borderWidth:2,
        justifyContent:'center',
        alignItems:'center'
    },
    homeTitleText:{
        fontFamily:'Baloo2-Bold',
        fontSize:30,
        
    },
    homeSubTitle:{
        fontFamily:'Baloo2-Bold',
        fontSize:25,
        color:Colors.white
        
    },
    homeExplain:{
        fontFamily:'Baloo2-Bold',
        fontSize:20,
        color:Colors.white
    },
    homeInput:{
        width:'80%',
        height:40,
        backgroundColor:Colors.white,
        borderRadius:20,
        borderWidth:2,
        paddingHorizontal:15,
        fontFamily:'Baloo2-Medium',
        margin:10,
        marginBottom:20
    },
    homeTitleInput:{
        width:'100%',
        alignItems: 'center',
        justifyContent: 'center',
        margin:10
    },
    homeButton:{
        backgroundColor:Colors.liteRed,
        padding:10,
        borderRadius:20,
        borderWidth:2,
        borderColor:Colors.white
    },
    homeButtonText:{
        fontFamily:'Baloo2-SemiBold',
        fontSize:20,
        color:Colors.white
    },
    homeButtonBlock:{
        backgroundColor:Colors.liteRed,
        padding:10,
        borderRadius:20,
        borderWidth:2,
        borderColor:Colors.white,
        opacity:0.5
    },
    dashboard_container:{
        flex:1,
        
        backgroundColor:Colors.whaitGreen,
    },
    dashboardUpBar:{
        width:'100%',
        flexDirection:'row-reverse',
        height:120,
        backgroundColor:Colors.liteRed,
        marginBottom:30
    },

    arrowBackContainer:{
        height:120,
        width:'20%',
        alignItems:'center',
        justifyContent:'center',
        paddingTop:30
    },
    DashboardText: {
        width:'80%',
        justifyContent: 'center',
        
         paddingTop:30
        },
        textDashboardHour:{
            fontFamily:'Baloo2-Bold',
            fontSize:25,
            color:Colors.white
        },
        containerPost:{
            flex:1 ,
             alignItems: 'center',
             justifyContent: 'center'
            },

       noPostContainer:{
           flex:1,
           width:'100%',
           alignItems: 'center',
           justifyContent: 'center'
        },
        noPostText:{
            fontFamily:'Baloo2-SemiBold',
            fontSize:25,
            color:Colors.white,
            marginBottom:100
        },
        postUpBar:{
            width:'100%',
            flexDirection:'row-reverse',
            height:120,
            backgroundColor:Colors.liteRed,
           
        },
        postInput:{
            width:'80%',
            height:100,
            backgroundColor:Colors.white,
            borderRadius:20,
            borderWidth:2,
            paddingHorizontal:15,
            fontFamily:'Baloo2-Medium',
            margin:10,
            marginBottom:20
        },
})