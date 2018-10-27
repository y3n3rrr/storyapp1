import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity,TouchableHighlight, Button, Image, Animated, Dimensions } from 'react-native'
import Sound from 'react-native-sound';
import Footer from '../Components/Footer';

class Page6 extends Component {
    constructor(props) {
        super(props)
        this.fireAudio = new Sound('yanlis.mp3', Sound.MAIN_BUNDLE, (error) => {});
        this.shoesAudio = new Sound('s6ayakkabi.mp3', Sound.MAIN_BUNDLE, (error) => {});
        this.trashAudio = new Sound('s6cop.mp3', Sound.MAIN_BUNDLE, (error) => {});
        this.chairAudio = new Sound('s6tabure.mp3', Sound.MAIN_BUNDLE, (error) => {});
        
        this.pageAudio = new Sound('sayfa6.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
            } else {
                this.pageAudio.play(); // have to put the call to play() in the onload callback
            }
        });
    }
    goToHomePage = () => {
        this.props.setPageNum(0)
    }

    componentWillUnmount(){
        this.fireAudio.release();
        this.pageAudio.release()
    }
    
    onPressTabure = ()=>{
        this.chairAudio.play(); // have to put the call to play() in the onload callback
    }

    onPressAyakkabi = ()=>{
        this.shoesAudio.play(); // have to put the call to play() in the onload callback
    }
    
    onPressCopKovasi = ()=>{
        this.trashAudio.play(); // have to put the call to play() in the onload callback
    }
    
    render() {
        return (
            <ImageBackground style={styles.container} imageStyle={{ resizeMode: 'stretch' }} source={require('../../assets/6sayfa/6sayfa_Taslak.png')}>
                <View style={{ margin:10}}>
                    <TouchableOpacity onPress={() => this.goToHomePage()}>
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

                <Footer Score = {this.props.Score} setPageNum={this.props.setPageNum} currentPage={this.props.currentPage} />
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
