import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity,TouchableHighlight, Button, Image, Animated, Dimensions } from 'react-native'
import Sound from 'react-native-sound';
import Footer from '../Components/Footer';

class Page3 extends Component {
    constructor(props) {
        super(props)
        this.state={
            showBg:false
        }
        this.windAudio = new Sound('ruzgar.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
            } else {
                this.windAudio.play(); // have to put the call to play() in the onload callback
            }
        });
          this.fireAudio = new Sound('ates.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
            } else {
                this.fireAudio.play(); // have to put the call to play() in the onload callback
            }
        });
        this.pageAudio2 = new Sound('s3p2.mp3', Sound.MAIN_BUNDLE, (error) => {});
        this.pageAudio = new Sound('s3p1.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
            } else {
                this.pageAudio.play(()=>{
                    this.pageAudio2.play();
                    this.setState({showBg:true})
                }); // have to put the call to play() in the onload callback
            }
        });
        
    }

    goToHomePage = () => {
        this.props.setPageNum(0)
    }
    componentWillUnmount(){
        this.pageAudio.release()
        this.pageAudio2.release()
        this.windAudio.release();
        this.fireAudio.release();
    }
    render() {
       
        return (
            <View style={styles.container}>
                <ImageBackground style={ this.state.showBg ? { height:0} : styles.container} imageStyle={{ resizeMode: 'stretch' }} source={require('../../assets/3sayfa/3sayfa_uyuma.png')}>
                </ImageBackground>
                <ImageBackground style={!this.state.showBg ?  { height:0} : styles.container } imageStyle={{ resizeMode: 'stretch' }} source={require('../../assets/3sayfa/3sayfa_uyanmis.png')}>
                <View style={{ margin:10}}>
                <TouchableOpacity onPress={() => this.goToHomePage()}>
                    <Image source={require('../../assets/1sayfa/1sayfa_resim/home.png')} />
                </TouchableOpacity>
                </View>
             
                <Footer Score = {this.props.Score} setPageNum={this.props.setPageNum} currentPage={this.props.currentPage} />
            </ImageBackground>
            </View>
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
        bottom:10,
        justifyContent: 'flex-end',
        position:'absolute',
        marginLeft : Dimensions.get('window').width/2 - 20
    }
})

//make this component available to the app
export default Page3;
