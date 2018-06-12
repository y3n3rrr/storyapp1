import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity, TouchableHighlight, Button, Image, Animated, Dimensions } from 'react-native'
import Sound from 'react-native-sound';


class Page10 extends Component {
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
        this.pageAudio = new Sound('sayfa10.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
            } else {
                this.pageAudio.play(); // have to put the call to play() in the onload callback
            }
        });
    }
    onPressLearnMore = () => {
    }
    componentWillUnmount(){
        this.kardeYurume.stop();
        this.pageAudio.stop()
    }
    onPressKosi = () => {
        this.setState({showSoruGif: true})
        setTimeout(()=>{
            this.setState({ showSoruGif:false });
        },3000)
    }
    onPressPofu = () => {
        this.kardeYurume.play();
    }
    render() {
        
        return (
            <ImageBackground style={styles.container} imageStyle={{ resizeMode: 'stretch' }} source={require('../../assets/10SayfaResim/10sayfa_taslak.png')}>
                <View style={{ margin: 10 }}>
                    <TouchableOpacity onPress={() => this.onPressLearnMore()}>
                        <Image source={require('../../assets/1sayfa/1sayfa_resim/home.png')} />
                    </TouchableOpacity>
                </View>

                
                <View style={styles.kosi}>
                    <Image style={ !this.state.showSoruGif ? { opacity: 0} : {}} source={require('../../assets/10SayfaResim/soru.gif')} />
                    <TouchableHighlight underlayColor="rgba(0, 0, 0, 0)" onPress={() => this.onPressKosi()}>
                        <Image source={require('../../assets/10SayfaResim/kosi.png')} />
                    </TouchableHighlight>
                </View>
                <View style={styles.pofu}>
                    <TouchableHighlight underlayColor="rgba(0, 0, 0, 0)" onPress={() => this.onPressPofu()}>
                        <Image source={require('../../assets/10SayfaResim/pofu.png')} />
                    </TouchableHighlight>
                </View>
                <View style={{ flex: 1 }}></View>
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
        paddingRight: 20,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginLeft: Dimensions.get('window').width / 2 - 20
    },
    kosi: {
        alignItems:'center',
        justifyContent:'space-around',
        top: 60,
        right: 150,
    }
})

//make this component available to the app
export default Page10;

