import React, { Component, PropTypes } from 'react'
import { Button, StatusBar, Image, View, ScrollView, StyleSheet, Text, TouchableOpacity, Navigator, BackAndroid } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import Header from '../components/Header'
import PhotoGallery from '../components/PhotoGallery'

// Pages
import Home from '../pages/Home'

// Redux
import { actionCreators } from '../redux/appRedux'

// Map Redux states to props
const mapStateToProps = (state) => ({
  currentPageIndex: state.currentPageIndex,
})

class SelectPage extends Component {

  render() {
    return (
      <View style={styles.container}>
        <PhotoGallery onDisplayImage={this.gotoNext.bind(this)}/>
      </View>
    );
  }

  gotoNext() {
    this.props.navigator.push({
      id: 'EditPage',
      name: 'EditPage',
    });
  }

}


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
  welcome: {
    textAlign: 'center',
    margin: 10,
  },

})

export default connect(mapStateToProps)(SelectPage)
