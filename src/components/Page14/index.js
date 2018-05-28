import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity, TouchableHighlight, Button, Image, Animated, Dimensions } from 'react-native'
import Sound from 'react-native-sound';


class Page14 extends Component {
    constructor(props) {
        super(props)
        this.kardeYurume = new Sound('karda.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
            } 
        });
        this.state={
            showSoruGif:false
        }
    }
    onPressLearnMore = () => {
    }
    componentWillUnmount(){
        this.kardeYurume.stop();
    }
    onPressPofu = () => {
        this.setState({showSoruGif: true})
        setTimeout(()=>{
            this.setState({ showSoruGif:false });
        },3000)
    }
   
    render() {
        
        return (
            <ImageBackground style={styles.container} imageStyle={{ resizeMode: 'stretch' }} source={require('../../assets/14SayfaResim/14sayfa_taslak.png')}>
                <View style={{ margin: 10 }}>
                    <TouchableOpacity onPress={() => this.onPressLearnMore()}>
                        <Image source={require('../../assets/1sayfa/1sayfa_resim/home.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <TouchableOpacity onPress={this.props.prevPage}>
                            <Image source={require('../../assets/1sayfa/1sayfa_resim/geri.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0, flexDirection: 'row' }}>
                        <TouchableOpacity onPress={this.props.nextPage}>
                            <Image source={require('../../assets/1sayfa/1sayfa_resim/ileri.png')} />
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
        position: 'relative',
    },
    buttonContainer: {
        position: 'absolute',
        left: 10,
        right: 10,
        bottom: 10,
        flexDirection: 'row'
    },
    pofu: {
        alignItems: 'center',
        bottom: 0,
        marginLeft: Dimensions.get('window').width / 4,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    }
})

//make this component available to the app
export default Page14;

