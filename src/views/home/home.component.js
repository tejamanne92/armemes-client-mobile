import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import HeaderContainer from '../../widgets/header/header.container'

export class HomeComponent extends Component {
  componentDidMount() {}

  render() {
    return(
      <View style={styles.container}>
        <HeaderContainer moduleName={"Home"} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
})

export default HomeComponent;
