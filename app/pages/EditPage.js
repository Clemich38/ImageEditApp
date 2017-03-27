import React, { Component, PropTypes } from 'react'
import { Button, StatusBar, Image, View, ScrollView, StyleSheet, Text, TouchableOpacity, Navigator, BackAndroid } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import Header from '../components/Header'

// Pages
import SelectPage from '../pages/SelectPage'

// Redux
import { actionCreators } from '../redux/appRedux'

// Map Redux states to props
const mapStateToProps = (state) => ({
  currentPageIndex: state.currentPageIndex,
})

class EditPage extends Component {

  renderScene(route, navigator) {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: 'assets-library://asset/asset.JPG?id=9F983DBA-EC35-42B8-8773-B597CF782EDD&ext=JPG' }} />
      </View>
    );
  }

  // 'assets-library://asset/asset.JPG?id=9F983DBA-EC35-42B8-8773-B597CF782EDD&ext=JPG'

  goBack() {
    this.props.navigator.pop();
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
          EditPage - Title
        </Text>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({

  container: {
    marginTop: 65,
    flex: 1,
  },
  ScrollContainer: {
    flex: 1,
    paddingTop: 25,
    paddingBottom: 25,
  },
  image: {
    width: 300,
    height: 500,
    margin: 10,
  },

})

export default connect(mapStateToProps)(EditPage)
