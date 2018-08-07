import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, ScrollView, StyleSheet } from 'react-native';

import {AppHeader, SimpleCard} from '../components';

export class HomeContainer extends Component {
  componentDidMount() {}

  render() {
    return(
      <ScrollView style={styles.container}>
        <View>
        <AppHeader moduleName={"Home"} />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    
  }
})

const mapStateToProps = state => {
  return {
    home: state.home
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer);
