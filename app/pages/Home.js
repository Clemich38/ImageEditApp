import React, { Component, PropTypes } from 'react'
import { Button, StatusBar, Image, View, ScrollView, StyleSheet, Text, TouchableOpacity, Navigator, BackAndroid } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import Header from '../components/Header'
import PhotoGallery from '../components/PhotoGallery'

// Pages
import SelectPage from '../pages/SelectPage'

// Redux
import { actionCreators } from '../redux/appRedux'

// Map Redux states to props
const mapStateToProps = (state) => ({
  currentPageIndex: state.currentPageIndex,
})

class Home extends Component {

  renderScene(route, navigator) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Select Picture"
          color="lightsteelblue"
          onPress={this.gotoNext.bind(this)}
        />
      </View>
    );
  }

  gotoNext() {
    this.props.navigator.push({
      id: 'SelectPage',
      name: 'SelectPage',
    });
  }

  render() {
    return (
      <Navigator
        renderScene={this.renderScene.bind(this)}
        navigationBar={
          <Navigator.NavigationBar style={{ backgroundColor: 'lightsteelblue', alignItems: 'center' }}
            routeMapper={NavigationBarRouteMapper} />
        } />
    );
  }
}


var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    return null;
  },
  RightButton(route, navigator, index, navState) {
    return null;
  },
  Title(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={{ color: 'white', margin: 10, fontSize: 16 }}>
          Home - Title
        </Text>
      </TouchableOpacity>
    );
  }
};
      /*<View style={styles.container}>
        <Header>
          Image Edition
        </Header>
        <PhotoGallery />
      </View >*/

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

export default connect(mapStateToProps)(Home)
