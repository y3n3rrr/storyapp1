import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity,TouchableHighlight, Button, Image } from 'react-native'

class HomePage extends Component {
    constructor(props) {
        super(props)
    }
    onPressLearnMore = () => {
        alert("clicked!")
    }

    handleRowPress=(item)=>{
        alert("start clicked!")
        this.props.navigation.navigate('DetailsScreen',item)
    }

    render() {
        return (
            <ImageBackground style={styles.container} imageStyle={{ resizeMode: 'stretch' }} source={require('../../assets/kapak/kapaksayfa_butonsuz.png')}>
                <View style={{ flex:1}}>
                 </View>
                <View style={{ flex:6}}>
                <View style={{ top:10}}>
                <TouchableOpacity onPress={this.props.banaOku}>
                    <Image source={require('../../assets/kapak/banaoku.png')} style={{ marginLeft:100 }} />
                </TouchableOpacity>
                    
                </View>
                <View style={{ bottom:30}}>
                <TouchableOpacity onPress={this.props.banaOku}>
                    <Image source={require('../../assets/kapak/benioku.png')} style={{ marginLeft:100 }} />
                </TouchableOpacity>
                </View>
                </View>
            </ImageBackground>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    },
    buttonContainer: {
        position: 'absolute',
        left: 10,
        right: 10,
        bottom: 10,
        flexDirection: 'row'
    }
})

//make this component available to the app
export default HomePage;
