import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import VideoItem from './components/videoItem'
import data from './data.json';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.navBar}>
          <Image source={require('./res/logo.png')} style={{ height: 22, width: 98 }} />
          <View style={styles.rightNav}>
            <TouchableOpacity>
              <Icon style={styles.navItem} name="search" size={25} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon style={styles.navItem} name="account-circle" size={25} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.body}>
          <FlatList
            data={data.items}
            renderItem={ (video) => <VideoItem video={video.item} /> }
            keyExtractor={ (item) => item.id }
            ItemSeparatorComponent={ 
              ()=> <View style={ {backgroundColor: '#e5e5e5', height: 0.5, marginHorizontal: 5} } /> 
            }/> 
        </View>

        <View style={styles.tabBar}>

          <TouchableOpacity style={styles.tabItem}>
            <Icon name="home" size={25} style={styles.icon} />
            <Text style={styles.tabTitle}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabItem}>
            <Icon name="whatshot" size={25} style={styles.icon} />
            <Text style={styles.tabTitle}>Trending</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabItem}>
            <Icon name="subscriptions" size={25} style={styles.icon} />
            <Text style={styles.tabTitle}>Subscriptions</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabItem}>
            <Icon name="folder" size={25} style={styles.icon} />
            <Text style={styles.tabTitle}>Library</Text>
          </TouchableOpacity>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24
  },
  navBar: {
    height: 55,
    backgroundColor: 'white',
    elevation: 3,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  rightNav: {
    flexDirection: 'row'
  },
  navItem: {
    marginLeft: 25,
    color: '#888'
  },
  body: {
    flex: 1
  },
  tabBar: {
    height: 60,
    borderTopWidth: 0.5,
    borderColor: '#E5E5E5',
    flexDirection: 'row',
    justifyContent: 'space-around' 
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabTitle: {
    fontSize: 11,
    color: '#3c3c3c',
    paddingTop: 4
  },
  icon: {
    color: '#777'
  }
});