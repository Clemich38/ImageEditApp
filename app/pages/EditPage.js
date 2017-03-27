import React, { Component, PropTypes } from 'react'
import { Button, StatusBar, Image, View, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, Navigator, BackAndroid } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import FitImage from 'react-native-fit-image';
import Header from '../components/Header'
import { Surface } from "gl-react-native"
const { Image: GLImage } = require("gl-react-image")

import Saturation from '../components/filters/Saturation'

// Pages
import SelectPage from '../pages/SelectPage'

// Redux
import { actionCreators } from '../redux/appRedux'

// Filters
const filters = [
  {
    name: 'Saturate',
    component: Saturation,
    props: {
      factor: 0.7
    }
  }
]




// Map Redux states to props
const mapStateToProps = (state) => ({
  currentPageIndex: state.currentPageIndex,
})

class EditPage extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Surface width={256} height={171}>
          <Saturation
            factor={0}
            image={{ uri: "assets-library://asset/asset.JPG?id=9F983DBA-EC35-42B8-8773-B597CF782EDD&ext=JPG" }}
          />
        </Surface>
        {/*<FitImage style={styles.image} source={{ uri: 'assets-library://asset/asset.JPG?id=9F983DBA-EC35-42B8-8773-B597CF782EDD&ext=JPG' }} />*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    marginTop: 64,
    flex: 1,
  },
  ScrollContainer: {
    flex: 1,
    paddingTop: 25,
    paddingBottom: 25,
  },
  image: {
    resizeMode: "contain"
  },

})

export default connect(mapStateToProps)(EditPage)
