import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';

const SimpleCard = (props) => {
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderColor: '#D4D5D5',
        borderRadius: 2,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        padding: 5,
        flex: 1
    }
})

export { SimpleCard };