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
  imageUrl: state.imageUrl,
})

class EditPage extends Component {

  render() {
    const { imageUrl } = this.props
    return (
      <ScrollView style={styles.container}>
        <Surface width={256} height={171}>
          <Saturation
            factor={0}
            image={{ uri: imageUrl }}
          />
        </Surface><Surface width={256} height={171}>
          <Saturation
            factor={0.1}
            image={{ uri: imageUrl }}
          />
        </Surface><Surface width={256} height={171}>
          <Saturation
            factor={0.2}
            image={{ uri: imageUrl }}
          />
        </Surface><Surface width={256} height={171}>
          <Saturation
            factor={0.3}
            image={{ uri: imageUrl }}
          />
        </Surface><Surface width={256} height={171}>
          <Saturation
            factor={0.4}
            image={{ uri: imageUrl }}
          />
        </Surface><Surface width={256} height={171}>
          <Saturation
            factor={0.5}
            image={{ uri: imageUrl }}
          />
        </Surface><Surface width={256} height={171}>
          <Saturation
            factor={0.6}
            image={{ uri: imageUrl }}
          />
        </Surface><Surface width={256} height={171}>
          <Saturation
            factor={0.7}
            image={{ uri: imageUrl }}
          />
        </Surface><Surface width={256} height={171}>
          <Saturation
            factor={0.8}
            image={{ uri: imageUrl }}
          />
        </Surface><Surface width={256} height={171}>
          <Saturation
            factor={0.9}
            image={{ uri: imageUrl }}
          />
        </Surface><Surface width={256} height={171}>
          <Saturation
            factor={1}
            image={{ uri: imageUrl }}
          />
        </Surface>
        {/*<FitImage style={styles.image} source={{ uri: 'assets-library://asset/asset.JPG?id=9F983DBA-EC35-42B8-8773-B597CF782EDD&ext=JPG' }} />*/}
      </ScrollView>
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
