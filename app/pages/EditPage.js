import React, { Component, PropTypes } from 'react'
import { Button, StatusBar, Image, View, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, Navigator, BackAndroid } from 'react-native'
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

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: 'assets-library://asset/asset.JPG?id=9F983DBA-EC35-42B8-8773-B597CF782EDD&ext=JPG' }} />
      </View>
    );
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
  image: {
    width: 300,
    height: 500,
    margin: 10,
  },

})

export default connect(mapStateToProps)(EditPage)
