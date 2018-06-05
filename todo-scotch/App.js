import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {items: []};
  }
  render() { 
    return (
      <View style={styles.container}>
        <Text style={styles.title}>to-do ({this.state.items.length})</Text>
        <TextInput
          style={styles.textInput}
          underlineColorAndroid={'transparent'}
          placeholder="i need to . . ."
          onSubmitEditing={(event) => {
            this.addItem(event.nativeEvent.text)
          }}
         />
         <TodoList items={this.state.items} style={styles.todoList} />
      </View>
    );
  }
 
  addItem(text) {
    newState = this.state
    newState.items.push(text)
    this.setState(newState)
    // console.log(this.state);
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 15,
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold'
  },
  textInput : {
    height: 40,
    marginTop: 5,
    marginBottom: 5,
    padding: 5,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 4
  },
  todoList: {
    flex: 1,
    flexDirection: 'column'
  },
  todoItem: {
    height: 40,
    marginTop: 5,
    marginBottom: 5,
    padding: 5,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 4
  }
});

class TodoList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {items: props.items}
  }

  render() {
    let views = this.state.items.map((item) => {
      console.log(item)
      return (<Text style={styles.todoItem}>{item}</Text>);
    })
    return views
  }
}