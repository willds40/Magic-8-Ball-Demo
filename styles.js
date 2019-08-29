import {StyleSheet, Dimensions} from 'react-native'

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
    titleView:{   
        flex:.5,             
        height:'25%',
        width:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
   
    title: {
        color: "black",
        fontSize: 40,
    },

    imageBackground : {
        flex:.6,
        height: '65%',
        width: '100%',
        position: 'relative', 
    },
    textView:{
        position: 'absolute',
         top: 0, 
         left: 0, 
         right: 0, 
         bottom: 0, 
         justifyContent: 'flex-start', 
         alignItems: 'center', 
    },
    response: {
        paddingTop:20,
        color: "black",
        fontSize: 18,
        flex:.75
    },
})