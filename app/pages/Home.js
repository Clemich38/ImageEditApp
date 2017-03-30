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

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Select Picture"
          color="lightcyan"
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dimgrey',
    alignItems: 'center',
    justifyContent: 'center'
  },
})

export default connect(mapStateToProps)(Home)
