import React, { Component, PropTypes } from 'react'
import { Button, StatusBar, Image, View, ScrollView, StyleSheet, Text, TouchableOpacity, Navigator, BackAndroid } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import Header from '../components/Header'
import PhotoGallery from '../components/PhotoGallery'

// Pages
import Home from '../pages/Home'
import SelectPage from '../pages/SelectPage'
import EditPage from '../pages/EditPage'

// Redux
import { actionCreators } from '../redux/appRedux'

// Map Redux states to props
const mapStateToProps = (state) => ({
  currentPageIndex: state.currentPageIndex,
})

class App extends Component {


  renderScene(route, navigator) {
    var routeId = route.id;
    if (routeId === 'Home') {
      return (
        <Home
          navigator={navigator} />
      );
    }
    if (routeId === 'SelectPage') {
      return (
        <SelectPage
          navigator={navigator} />
      );
    }
    if (routeId === 'EditPage') {
      return (
        <EditPage
          navigator={navigator} />
      );
    }
    return this.noRoute(navigator);

  }


  render() {
    return (
      <Navigator
        initialRoute={{ id: 'Home', name: 'Home' }}
        renderScene={this.renderScene.bind(this)}
        configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FloatFromRight;
        }} />
    );
  }

  noRoute(navigator) {
    return (
      <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
        <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
          onPress={() => navigator.pop()}>
          <Text style={{ color: 'red', fontWeight: 'bold' }}>请在 index.js 的 renderScene 中配置这个页面的路由</Text>
        </TouchableOpacity>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ScrollContainer: {
    flex: 1,
    paddingTop: 25,
    paddingBottom: 25,
  },
  welcome: {
    textAlign: 'center',
    margin: 10,
  },
  
})

export default connect(mapStateToProps)(App)
