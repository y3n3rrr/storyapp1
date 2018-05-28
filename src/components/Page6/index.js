import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity,TouchableHighlight, Button, Image, Animated, Dimensions } from 'react-native'
import Sound from 'react-native-sound';

class Page6 extends Component {
    constructor(props) {
        super(props)
        this.fireAudio = new Sound('fire_audio.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
            } 
            this.windAudio = new Sound('wind_audio.mp3', Sound.MAIN_BUNDLE, (error) => {
                if (error) {
                    console.log('failed to load the sound', error);
                } 
            });
        });
    }
    onPressLearnMore = () => {
    }
    componentWillUnmount(){
        this.fireAudio.stop();
        this.windAudio.stop();
    }
    onPressTabure = ()=>{
        this.fireAudio.play(); // have to put the call to play() in the onload callback
    }
    onPressAyakkabi = ()=>{
        this.windAudio.play(); // have to put the call to play() in the onload callback
    }
    render() {
       
        return (
            <ImageBackground style={styles.container} imageStyle={{ resizeMode: 'stretch' }} source={require('../../assets/6sayfa/6sayfa_Taslak.png')}>
                <View style={{ margin:10}}>
                    <TouchableOpacity onPress={() => this.onPressLearnMore()}>
                        <Image source={require('../../assets/1sayfa/1sayfa_resim/home.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{flex:1}}></View>
                <View style={{flex:1, flexDirection:'row', alignItems:'flex-start', justifyContent:'space-around'}}>
                <View style={styles.tabure}>
                        <TouchableOpacity onPress={()=>this.onPressTabure()}>
                            <Image source={require('../../assets/6sayfa/tabure.png')}  />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.ayakkabi}>
                        <TouchableOpacity onPress={()=>this.onPressAyakkabi()}>
                            <Image source={require('../../assets/6sayfa/ayakkabi.png')}  />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.copKovasi}>
                        <TouchableOpacity onPress={()=>this.onPressCopKovasi()}>
                            <Image  source={require('../../assets/6sayfa/copKovasi.png')}  />
                        </TouchableOpacity>
                    </View>
                  
                </View>

                <View style={styles.buttonContainer}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <TouchableOpacity onPress={this.props.prevPage}>
                            <Image source={require('../../assets/1sayfa/1sayfa_resim/geri.png')}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0, flexDirection: 'row' }}>
                        <TouchableOpacity onPress={this.props.nextPage}>
                            <Image source={require('../../assets/1sayfa/1sayfa_resim/ileri.png')}/>
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
    pofuStyles:{
        alignItems: 'center',
        bottom:80,
        paddingRight:30,
        justifyContent: 'flex-end',
        position:'absolute',
        marginLeft : Dimensions.get('window').width/2 - 20
    },
})

//make this component available to the app
export default Page6;
