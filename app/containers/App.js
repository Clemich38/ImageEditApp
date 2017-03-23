import React, { Component, PropTypes } from 'react'
import { Button, StatusBar, Image, View, ScrollView, StyleSheet, Text, TouchableOpacity, Navigator, BackAndroid } from 'react-native'
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
        <ScrollView style={styles.ScrollContainer}>
          <Text style={styles.welcome}>
            Welcom to the Picture edition app
          </Text>
          <Button
            title="Browse Pictures"
            color="lightsteelblue"
          />
        </ScrollView>
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
