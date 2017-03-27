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
    // get photos from the device photo gallery
    // CameraRoll.getPhotos(this.state.fetchParams, this.fetchImages, this.logError);
    this.displayGallery();
  }

  displayGallery() {
    // get photos from the device photo gallery
    // CameraRoll.getPhotos(this.state.fetchParams, this.fetchImages, this.logError);

    CameraRoll.getPhotos({
      first: 10,
      groupTypes: 'SavedPhotos',
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

  // callback which processes received images from camera roll and stores them in an array
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
    onDisplayImage();
  }

  render() {
    
    return (
        <ScrollView style={styles.container}>
          <View style={styles.imageGrid}>
            {this.state.imagesArray.map((image, index) => {
              return (
                <TouchableHighlight key={index} onPress={() => this.selectImage(image.uri)}>
                  <Image style={styles.image} source={{ uri: image.uri }} />
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
    width: 100,
    height: 100,
    margin: 10,
  },
});

