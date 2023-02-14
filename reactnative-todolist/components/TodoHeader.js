import { Text, View, StyleSheet, Image } from 'react-native';

function TodoHeader(){
  return(
    <View style={styles.headerContainer}>
        <View  style={styles.textContainer}>
      <Text style={styles.headerText}>To do List</Text>
      </View>
      <View style={styles.imageContainer}>
      <Image style={styles.image} source={require("../assets/todo.png")} />
      </View>
    
    </View>
  )
}

export default TodoHeader;

const styles = StyleSheet.create({
    headerContainer:{
        flex:2,
        // marginTop: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 10,
        alignItems: 'center',
        borderColor: 'black',
        backgroundColor:"#0F256E",
        // backgroundColor:"#444791""#0F2526",
    },
    headerText:{
        marginTop: 35,
        color: "white",
        fontSize: 26,
        margin: 10,
        paddingStart: 120
    },
    imageContainer:{    
      // width: 10,
      // height:10
    },
    textContainer:{

    },
    image:{
      width:50,
      height:50,
      marginTop: 30,
      marginEnd:15 
    }
})