import React, { Component, PropTypes } from 'react'
import { StatusBar, Image, View, ScrollView, StyleSheet, Text, TouchableOpacity, Navigator, BackAndroid } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import Header from '../components/Header'
// Redux
import { actionCreators } from '../redux/appRedux'

// Map Redux states to props
const mapStateToProps = (state) => ({
  currentPageIndex: state.currentPageIndex,
})

class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Header>
          Image Edition
        </Header>
        <ScrollView>
          <Text style={styles.welcome}>
            Welcome to Yo!
          </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  
})

export default connect(mapStateToProps)(App)
