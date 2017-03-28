import React, { Component, PropTypes } from 'react'
import { Slider, CameraRoll, Button, StatusBar, Image, View, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, Navigator, BackAndroid } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import FitImage from 'react-native-fit-image';
import Header from '../components/Header'
import { Surface } from "gl-react-native"
const { Image: GLImage } = require("gl-react-image")
var RNFS = require('react-native-fs');

import Saturation from '../components/filters/Saturation'

// Pages
import SelectPage from '../pages/SelectPage'

// Redux
import { actionCreators } from '../redux/appRedux'


// Map Redux states to props
const mapStateToProps = (state) => ({
  imageUrl: state.imageUrl,
})

class EditPage extends Component {

  constructor(props) {
    super(props);
    this.state = { saturation: 1 };

  }

  saveEditedImage() {
    const { imageUrl } = this.props
    var path = RNFS.DocumentDirectoryPath + '/image.png';
    this.refs.surface.captureFrame({ type: 'png', format: 'file', filePath: path, quality: 1 }).then(uri => {
      console.log("DO SOMETHING WITH", uri);
      var promise = CameraRoll.saveToCameraRoll(uri, 'photo');
      promise.then(function (result) {
        console.log('save succeeded ' + result);
      }).catch(function (error) {
        console.log('save failed ' + error);
      });
    });
  }

  render() {
    const { imageUrl } = this.props
    return (
      <ScrollView style={styles.container}>
        <Surface ref="surface" width={256} height={171}>
          <Saturation
            factor={this.state.saturation}
            image={{ uri: imageUrl }}
          />
        </Surface>
        <View>
          <Text>Saturation: {this.state.saturation}</Text>
          <Slider
            value={this.state.saturation}
            minimumValue={0}
            maximumValue={2}
            onValueChange={(saturation) => this.setState({ saturation: saturation })}
          />
        </View>
        <Button
          title="Save"
          color="lightsteelblue"
          onPress={this.saveEditedImage.bind(this)}
        />
        {/*<Surface width={256} height={171}>
          <Saturation
            factor={0.2}
            image={{ uri: imageUrl }}
          />
        </Surface><Surface width={256} height={171}>
          <Saturation
            factor={0.4}
            image={{ uri: imageUrl }}
          />
        </Surface><Surface width={256} height={171}>
          <Saturation
            factor={0.6}
            image={{ uri: imageUrl }}
          />
        </Surface><Surface width={256} height={171}>
          <Saturation
            factor={0.8}
            image={{ uri: imageUrl }}
          />
        </Surface><Surface width={256} height={171}>
          <Saturation
            factor={1}
            image={{ uri: imageUrl }}
          />
        </Surface>*/}
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
