import React, { Component, PropTypes } from 'react'
import {
  Button,
  CameraRoll,
  Image,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native';
import FitImage from 'react-native-fit-image';

export default class PhotoGallery extends Component {

  constructor(props) {
    super(props)
    var controls = props.controls
    this.state = {
      imagesArray: [],
      selected: '',
      fetchParams: { first: 2 },
      groupTypes: 'SavedPhotos',
    }
    this.fetchImages = this.fetchImages.bind(this)
    this.logError = this.logError.bind(this)
    this.selectImage = this.selectImage.bind(this)
    this.displayGallery = this.displayGallery.bind(this)
  }

  componentDidMount() {
    this.displayGallery();
  }

  // Get photos from the device photo gallery
  displayGallery() {
    CameraRoll.getPhotos({
      first: 10,
      // groupTypes: 'SavedPhotos',
      assetType: 'Photos' }).then(
      (data) => {
        console.log(data);
        this.fetchImages(data);
      },
      (error) => {
        console.warn(error);
      }
    );
  }

  // Callback which processes received images from camera roll and stores them in an array
  fetchImages(data) {
    const assets = data.edges;
    const tmpImagesArray = assets.map(asset => asset.node.image);
    this.setState({
      imagesArray: tmpImagesArray,
    });
  }

  logError(err) {
    console.log(err);
  }

  selectImage(uri) {
    const { onDisplayImage } = this.props
    // define whatever you want to happen when an image is selected here
    this.setState({
      selected: uri,
    });
    console.log('Selected image: ', uri);
    onDisplayImage(uri);
  }

  render() {
    
    return (
        <ScrollView style={styles.container}>
          <View style={styles.imageGrid}>
            {this.state.imagesArray.map((image, index) => {
              return (
                <TouchableHighlight style={styles.imageWrap} key={index} onPress={() => this.selectImage(image.uri)}>
                  <FitImage style={styles.image} source={{ uri: image.uri }} />
                </TouchableHighlight>
              );
            })}
          </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  image: {
    margin: 10,
    resizeMode: "cover",
    borderRadius: 10,
  },
  imageWrap: {
    width: 100,
    height: 100,
  },
});

