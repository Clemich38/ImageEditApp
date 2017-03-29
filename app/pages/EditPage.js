import React, { Component, PropTypes } from 'react'
import { PixelRatio, Dimensions, Slider, CameraRoll, Button, StatusBar, Image, View, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, Navigator, BackAndroid } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import FitImage from 'react-native-fit-image';
import Header from '../components/Header'
import { Surface } from "gl-react-native"
const { Image: GLImage } = require("gl-react-image")
var RNFS = require('react-native-fs');

import AdjustFilter from '../components/filters/AdjustFilter'

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
    this.state = {
      saturation: 1,
      brightness: 1,
      contrast: 1,
      hue: 0,
      sepia: 0,
      gray: 0,
      mixFactor: 0,
      width:1,
      height: 1,
      transitionOver: false};
  }

  resetState = () => {
    this.setState({
      saturation: 1,
      brightness: 1,
      contrast: 1,
      hue: 0,
      sepia: 0,
      gray: 0,
      mixFactor: 0 })
  }

  updateImageSize() {
    Image.getSize(this.props.imageUrl, (width, height) => {
      let winWidth = Dimensions.get('window').width;
      let newHeight = height * winWidth / width;
      this.setState({
        width: winWidth,
        height: newHeight
      });
    });
  }

  componentDidMount() {
    this.didFocusSubscription = this.props.navigator.navigationContext.addListener('didfocus', () => {
      this.updateImageSize();
      this.setState({
        transitionOver: true
      })
    });
  }

  componentWillUnmount() {
    this.didFocusSubscription.remove();
  }

  saveEditedImage() {
    const { imageUrl } = this.props
    var path = RNFS.DocumentDirectoryPath + '/image.png';
    this.refs.surface.captureFrame({ type: 'png', format: 'file', filePath: path, quality: 1 }).then(uri => {
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
      this.state.transitionOver && <ScrollView style={styles.container}>

        <Surface ref="surface" style={styles.cover} width={this.state.width} height={this.state.height}>
          <AdjustFilter
            saturation={this.state.saturation}
            brightness={this.state.brightness}
            contrast={this.state.contrast}
            hue={this.state.hue}
            sepia={this.state.sepia}
            gray={this.state.gray}
            mixFactor={this.state.mixFactor}
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
          <Text>brightness: {this.state.brightness}</Text>
          <Slider
            value={this.state.brightness}
            minimumValue={0}
            maximumValue={2}
            onValueChange={(brightness) => this.setState({ brightness: brightness })}
          />
          <Text>contrast: {this.state.contrast}</Text>
          <Slider
            value={this.state.contrast}
            minimumValue={0}
            maximumValue={2}
            onValueChange={(contrast) => this.setState({ contrast: contrast })}
          />
          <Text>hue: {this.state.hue}</Text>
          <Slider
            value={this.state.hue}
            minimumValue={0}
            maximumValue={6}
            onValueChange={(hue) => this.setState({ hue: hue })}
          />
          <Text>sepia: {this.state.sepia}</Text>
          <Slider
            value={this.state.sepia}
            minimumValue={0}
            maximumValue={1}
            onValueChange={(sepia) => this.setState({ sepia: sepia })}
          />
          <Text>gray: {this.state.gray}</Text>
          <Slider
            value={this.state.gray}
            minimumValue={0}
            maximumValue={1}
            onValueChange={(gray) => this.setState({ gray: gray })}
          />
        </View>
        <Button
          title="Save"
          color="lightsteelblue"
          onPress={this.saveEditedImage.bind(this)}
        />
        <Button
          title="Reset"
          color="lightsteelblue"
          onPress={this.resetState}
        />
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
  image: {
    resizeMode: "contain"
  },
  cover: {
    // position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }

})

export default connect(mapStateToProps)(EditPage)
