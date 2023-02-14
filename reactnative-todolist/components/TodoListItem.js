import { Text, View, TextInput, Button, StyleSheet } from "react-native";
import CheckBox from "expo-checkbox";
import Ionicons from "@expo/vector-icons/Ionicons";

function TodoListItem({ text, onDeleteList, date, id, isChecked, setCheck }) {

  const textStyle = isChecked? [styles.textContainer, {textDecorationLine: 'line-through'}]: styles.textContainer;
  return (
    <View style={styles.headerContainer}>
      <View style={styles.listContainer}>
        <View style={styles.checkBoxContainer}>
          <CheckBox
          key={id}
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setCheck}
            color={isChecked ? "#38B261" : 'white'}
          ></CheckBox>
        </View>
        <View style={styles.inputContainer}>
          <Text style={textStyle}>{text}</Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>{date}</Text>
        </View>
        <View style={styles.iconContainer}>
          <Ionicons
            name="trash"
            size={20}
            style={styles.deleteIcon}
            onPress={onDeleteList}
          />          
        </View>
      </View>
    </View>
  );
}

export default TodoListItem;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#204ECF",
    //  "#409eff",
    marginHorizontal: 10,
    borderRadius: 10,
    marginVertical: 3,
    // flexDirection: "row",
    // justifyContent: "space-between",
    // height: "7%",
    // margin: 2,
    // height: 100,
    // flex:1,
    // flex:1,
    // marginTop: 20,

    // alignItems: 'center',
    // borderColor: 'black',
    // backgroundColor:"#444791",
    // // backgroundColor:"#444791"
  },
  inputContainer: {
    flex: 5,
    justifyContent: "center",
  },
  dateContainer: {
    flex: 2,
    justifyContent: "center",
    backgroundColor: "white",
    marginVertical: 14,
    alignItems: "center",
    borderRadius: 8,
  },
  deleteIcon: {
    color: "white",
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  listContainer: {
    flex: 1,
    flexDirection: "row",
  },
  dateText: {
    color: "black",
    // paddingStart: 10,
    fontWeight: "800",
    fontSize: 9,
  },
  textContainer: {   
    fontSize: 21,
    //     // borderColor: 'gray',
    // borderWidth: 1,
    //     borderBottomColor: 'blue'
    //     // backgroundColor:"#444791",
    //     // backgroundColor:"#444791"
    // borderColor: "#e4d0ff",
    // backgroundColor: "#e4d0ff",
    color: "white",
    width: "100%",
    padding: 10,
    paddingStart: 20,
    borderRadius: 6,
  },
  checkBoxContainer:{
    flex:1
  },
  checkbox:{
    width:25,
    height:25,
    margin:12,
    borderRadius:8,
    color: 'black'
  }
});
