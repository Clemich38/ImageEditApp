import React, { Component, PropTypes } from 'react'
import { Button, StatusBar, Image, View, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, Navigator, BackAndroid } from 'react-native'
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
  imageUrl: state.imageUrl
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
          return Navigator.SceneConfigs.FadeAndroid;
        
        }} 
        navigationBar={
          <Navigator.NavigationBar style={{ backgroundColor: 'lightsteelblue', alignItems: 'center' }}
            routeMapper={NavigationBarRouteMapper} />
        } />
    );
  }

  noRoute(navigator) {
    return (
      <View>
      </View>
    );
  }
}

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    if (index > 0) {
      return (
        <TouchableOpacity style={{ marginTop: 10 }} onPress={() => {
          if (index > 0) {
            navigator.pop();
          }
        }}>
          <Text style={styles.back}>
            Back
        </Text>
        </TouchableOpacity>
      )
    } else {
      return null
    }
  },
  RightButton(route, navigator, index, navState) {
    return null;
  },
  Title(route, navigator, index, navState) {
    return (
      <View style={styles.titleCont}>
        <Text style={styles.title}>
          Image Edition App
        </Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: 'white',
    margin: 10,
    fontSize: 16
  },
  titleCont: {
    flex: 1,
    justifyContent: 'center'
  },
  back: {
    color: 'white',
    marginTop: 5,
    marginLeft: 10,
    fontSize: 12
  }
})

export default connect(mapStateToProps)(App)
