import { useState } from "react";
import { Text, Alert, View, StyleSheet, FlatList } from "react-native";
import moment from "moment";

import InputHeader from "../components/InputHeader";
import TodoListItem from "../components/TodoListItem";

const key = 0;

function TodoListHomePage() {
  const [textTodo, setTextTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  function handleInput(text) {
    setTextTodo(text);
  }

  function handleDeleteAlertList(id) {
    Alert.alert(
      "Do you want to delete this?",
      "This will delete the item from the list",
      [
        { text: "Cancel", style: "Okay" },
        {
          text: "Delete",
          style: "Okay",
          onPress: handleDeleteList.bind(this, id),
        },
      ]
    );
  }

  function handleDeleteList(id) {
    setTodoList(() => todoList.filter((list) => list.id != id));
  }
  function setCheck(id) {
    let list = todoList.filter((list) => list.id == id);
    if (!list.length) return;
    list = list[0];
    list.isChecked = true;
    const listTodo = todoList.filter((list) => list.id != id);
    setTodoList(() => [...listTodo, list]);
  }

  function handleAddList() {
    if (!textTodo) {
      Alert.alert("Please add a valid task", "You are adding an empty task", [
        { text: "Okay", style: "Okay" },
      ]);
      return;
    }
    setTodoList((prevList) => [
      ...prevList,
      {
        text: textTodo,
        id: Math.random().toString(),
        date: new Date(),
        isChecked: false,
      },
    ]);
    // setTodoList((prevList)=>[prevList, {  value: textTodo}])
    setTextTodo("");
  }

  function handleClearAlert() {
    Alert.alert(
      "Do you want to Delete all item",
      "This will delete all item from the list",
      [
        { text: "Cancel", style: "Okay" },
        {
          text: "Clear All",
          style: "Okay",
          onPress: handleClearAll,
        },
      ]
    );
  }

  function handleClearAll() {
    setTextTodo("");
    setTodoList([]);
  }

  return (
    <View style={styles.headerContainer}>
      <InputHeader
        onAddHandle={handleAddList}
        onInputHandle={handleInput}
        textTodo={textTodo}
        onClearHandle={handleClearAlert}
        isDisabled={!!todoList.length || !!textTodo}
      />
      <FlatList
        data={todoList}
        style={styles.listHeader}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => {
          // return  <Text>{itemData.item.text}</Text>
          return (
            <TodoListItem
              text={itemData.item.text}
              id={itemData.item.id}
              setCheck={setCheck.bind(this, itemData.item.id)}
              date={moment(itemData.item.date).format("ddd MMM D Y")}
              isChecked={itemData.item.isChecked}
              onDeleteList={handleDeleteAlertList.bind(this, itemData.item.id)}
            />
          );
        }}
      />
      {/* {todoList.length && todoList.map(list => {
      return <Text>{list.text}</Text>
    })} */}
    </View>
  );
}

export default TodoListHomePage;

const styles = StyleSheet.create({
  headerContainer: {
    flex: 10,
    // margin: 10,
    // alignItems: 'center',
    // borderColor: 'black'
    // backgroundColor:"#444791"
  },
  listHeader: {
    flex: 1,
    marginTop: 20,
  },
});
