import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Header extends Component {

  render() {
    const { children } = this.props

    return (
      <View style={styles.header}>
        <Text style={styles.title}>
          {children}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 30,
    paddingBottom: 15,
    backgroundColor: 'lightsteelblue',
  },
  title: {
    fontFamily: 'Trebuchet-BoldItalic',
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
})