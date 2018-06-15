import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    console.log("App.constructor()");
    super(props);
    this.state = {items: []};
  }
  render() { 
    console.log("App.render()");
    
    let todoItems = this.state.items.map((item) => { 
      console.log(item)
      return (<TodoItem key={item} item={item} removeItem={(text) => {this.removeItem(text)}} />);
    });

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
         {todoItems}
      </View>
    );
  }
 
  addItem(text) {
    console.log("App.addItem(" + text + ")");
    newState = this.state
    newState.items.push(text)
    this.setState(newState)
    
    console.log(this.state);
  }

  removeItem(text) {
    console.log("App.removeItem(" + text + ")");
    // newState = this.state
    // console.log(text);
    
    // console.log(this.state)
    // newState.splice(, 1)

    // this.setState(newState)
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

class TodoItem extends React.Component {
  constructor(props) {
    console.log("TodoItem.constructor()");
    console.log(props)
    super(props)

    this.item = props.item
    this.removeItem = props.removeItem
  }

  render() {
    console.log("TodoItem.render()");

    return <Text style={styles.todoItem} onPress={() => { this.removeSelf() } }>{this.item}</Text>
  }

  removeSelf() {
    console.log("TodoItem.removeSelf()");
    console.log(this)
    // this.removeItem(this.item)
    // console.log(this.state)
    // this.state.removeItem(this.item)
    
    // newState.items.splice(this.state.items.indexOf(this.item), 1)
  }
}