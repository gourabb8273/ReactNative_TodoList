import { Text, View, TextInput, Button, StyleSheet } from "react-native";

import PrimaryButton from "./PrimaryButton";

function InputHeader({ onInputHandle, onAddHandle, textTodo, onClearHandle, isDisabled }) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          value={textTodo}
          onChangeText={onInputHandle}
          style={styles.textContainer}
          placeholder="Add your task"
        />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.addButton}>
            <PrimaryButton title="Add" onPress={onAddHandle} isDisabled={isDisabled}  />
          {/* <Button title="Add" onPress={onAddHandle} /> */}
        </View>
        <View  style={styles.clearAllButton}>
          {/* <Button title="Clear All" onPress={onClearHandle} /> */}
          <PrimaryButton title="Clear All" onPress={onClearHandle} backgroundColor={'#C21807'} isDisabled={isDisabled} />
        </View>
      </View>
    </View>
  );
}

export default InputHeader;

const styles = StyleSheet.create({
  headerContainer: {
    // flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: 'center',
    height: "7%",
    margin: 2,
    height: 110,
    // flex:1,
    // flex:1,
    // marginTop: 60,

    // alignItems: 'center',
    // borderColor: 'black',
    // backgroundColor:"#444791",
    // // backgroundColor:"#444791"
  },
  buttonContainer: {
    flex: 1,
    borderRadius: 6,
    width: "100%",
    // height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:"#444791",
    // margin:2,
    paddingVertical: 5,
    paddingHorizontal: 5,
    flexDirection: "row",
    // borderWidth: 1,
    // flexDirection: 'row-reverse'
  },
  addButton:{
    flex: 1,
    margin:2
  },
  clearAllButton:{
    flex: 1,
    margin:2,
  },
  inputContainer: {
    flex: 2,
    padding:5,
    // marginHorizontal: 5,
    margin:5,
    // marginVertical: 20,
  },
  textContainer: {
    fontSize: 18,
    //     // borderColor: 'gray',
    borderBottomWidth: 1,
    //     borderBottomColor: 'blue'
    //     // backgroundColor:"#444791",
    //     // backgroundColor:"#444791"
    borderColor:"#444791",
    // backgroundColor: "#e4d0ff",
    color: "#120438",
    width: "100%",
    padding: 15,
    height: 50,
    borderRadius: 6,
  },
});
