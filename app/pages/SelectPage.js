import React, { Component, PropTypes } from 'react'
import { Button, StatusBar, Image, View, ScrollView, StyleSheet, Text, TouchableOpacity, Navigator, BackAndroid } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import Header from '../components/Header'
import PhotoGallery from '../components/PhotoGallery'

// Pages
import Home from '../pages/Home'

// Redux
import { actionCreators } from '../redux/appRedux'

// Map Redux states to props
const mapStateToProps = (state) => ({
  imageUrl: state.imageUrl,
})

class SelectPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      transitionOver: false
    };
  }

  componentDidMount() {
    this.didFocusSubscription = this.props.navigator.navigationContext.addListener('didfocus', () => {
      this.setState({
        transitionOver: true
      })});
  }

  componentWillUnmount() {
    this.didFocusSubscription.remove();
  }

  render() {
    return (
      <View style={styles.container}>
        { this.state.transitionOver && <PhotoGallery onDisplayImage={this.gotoNext.bind(this)}/>}
      </View>
    );
  }

  gotoNext(uri) {
    const { dispatch } = this.props
    dispatch(actionCreators.setImageUrl(uri));
    this.props.navigator.push({
      id: 'EditPage',
      name: 'EditPage',
    });
  }
}


const styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1,
  },
})

export default connect(mapStateToProps)(SelectPage)
