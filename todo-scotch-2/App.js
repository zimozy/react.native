import React from 'react';
import { View, StyleSheet, Text, TextInput, FlatList } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {items: []}
  } 

  addItem(string) {
    this.setState((prevState, props) => {
      prevState.items.push({text: string})
      return {items: prevState.items}
    })
  }

  removeItem(id) {
    this.setState((prevState, props) => {
      prevState.items.splice(id, 1)
      return {items: prevState.items}
    })
  }
  
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.title}>to-do ({this.state.items.length})</Text>

        <InputForm addItem={(string) => {this.addItem(string)}} />

        <FlatList 
          data={this.state.items}
          extraData={this.state} //for reloading
          renderItem={(o) => {
            return <TodoItem data={o.item} remove={ () => { 
                this.removeItem(this.state.items.indexOf(o.item));
              }} />
          }}
          keyExtractor={(item, index) => { return String(index) }}
          style={styles.todoList}
          ItemSeparatorComponent={Separator}
          />

      </View>
    ); 
  }
}

class InputForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}
  }
  render() {
    return <TextInput 
      onChangeText={(value) => {this.setState({value})}}
      value={this.state.value}
      onEndEditing={(event) => {
        this.props.addItem(this.state.value)
        this.setState({value:''})
      }}
      style={styles.inputForm}
      placeholder="I need to..."
      underlineColorAndroid={'transparent'}
    />
  }
}

class TodoItem extends React.Component {
  render() {
    return (
      <Text style={styles.todoItem} onPress={() => { this.props.remove() }}>
        {this.props.data.text}
      </Text>
    );
  }
}

class Separator extends React.Component {
  render() {
    return (
      <View style={styles.separator} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    padding: 15,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold'
  },
  inputForm: {
    height: 60,
    marginTop: 15,
    marginBottom: 35,
    paddingTop: 12,
    paddingBottom: 12,
    paddingStart: 20,
    paddingEnd: 20,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 14
  },
  todoList: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
  },
  todoItem: {
    height: 60,
    paddingStart: 20,
    fontSize: 14,
    lineHeight: 60
  },
  separator: {
    backgroundColor: '#ddd',
    height: 1
  }
}); 
