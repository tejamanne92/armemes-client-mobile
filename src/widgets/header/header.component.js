import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

class HeaderComponent extends Component{

    render(){
        
        return(
            <View style={styles.container}>
                <Text style={styles.appName}>AR Memes</Text>
                <Text style={styles.moduleName}>{this.props.moduleName}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        height:90,
        backgroundColor: "#2929a3",
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding:10,
        paddingTop: 25
    },
    appName:{
        fontSize:18,
        color: "#FFF"
    },
    moduleName:{
        fontSize:24,
        color: "#2E2E2E"
    }
})

export default HeaderComponent;