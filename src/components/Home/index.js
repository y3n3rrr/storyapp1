import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity,TouchableHighlight, Button, Image } from 'react-native'

import Page1 from '../Page1'
import Page2 from '../Page2'
class HomePage extends Component {
    constructor(props) {
        super(props)
    }
    onPressLearnMore = () => {
        alert("clicked!")
    }

    handleRowPress=(item)=>{
        this.props.navigation.navigate('DetailsScreen',item)
    }

    render() {
        return (
            <ImageBackground style={styles.container} imageStyle={{ resizeMode: 'cover' }} source={require('../../assets/1sayfa/1sayfa_resim/birinciSayfa.png')}>
                <View style={{ margin:10}}>
                
                <TouchableOpacity onPress={() => this.onPressLearnMore()}>
                <Image
                        source={require('../../assets/1sayfa/1sayfa_resim/home.png')}
                    />
</TouchableOpacity>
                    
                </View>
                <View style={{ justifyContent: 'space-around', marginRight:50, flexDirection:'row' }}>
                    <Image source={require('../../assets/1sayfa/1sayfa_resim/yildiz.png')} style={{ margin:30, width: 25, height: 25 }} />
                    <Image source={require('../../assets/1sayfa/1sayfa_resim/moonAnimasyon.gif')} style={{ width: 50, height: 50 }} />
                    <Image source={require('../../assets/1sayfa/1sayfa_resim/yildiz.png')} style={{marginBottom:100, width: 25, height: 25 }} />
                </View>
                <View style={styles.buttonContainer}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Image
                            source={require('../../assets/1sayfa/1sayfa_resim/geri.png')}
                        />
                    </View>
                 
                    <View style={{ flex: 0, flexDirection: 'row' }}>
                        <Image
                            source={require('../../assets/1sayfa/1sayfa_resim/ileri.png')}
                        />
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
