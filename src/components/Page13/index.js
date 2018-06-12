import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity, TouchableHighlight, Button, Image, Animated, Dimensions } from 'react-native'
import Sound from 'react-native-sound';


class Page13 extends Component {
    constructor(props) {
        super(props)
        this.kardeYurume = new Sound('karda.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
            } 
        });
        this.state={
            showSoruGif:false,
            isModalVisible: false

        }
        this.pageAudio = new Sound('sayfa13.mp3', Sound.MAIN_BUNDLE, (error) => {
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
        this.pageAudio.stop();
    }
    onPressPofu = () => {
        this.setState({showSoruGif: true})
        setTimeout(()=>{
            this.setState({ showSoruGif:false });
        },3000)
    }
    _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });
    render() {
        
        return (
            <ImageBackground style={styles.container} imageStyle={{ resizeMode: 'stretch' }} source={require('../../assets/13SayfaResim/13sayfa_taslak.png')}>
                <View style={{ margin: 10 }}>
                    <TouchableOpacity onPress={() => this.onPressLearnMore()}>
                        <Image source={require('../../assets/1sayfa/1sayfa_resim/home.png')} />
                    </TouchableOpacity>
                </View>
                
                <View style={styles.pofu}>
                <View style={{position:'absolute', marginLeft:30}}>
                    <Image style={ !this.state.showSoruGif ? {  opacity: 0} : {}} source={require('../../assets/13SayfaResim/soru_isareti.gif')} />
                    </View>
                    <TouchableHighlight underlayColor="rgba(0, 0, 0, 0)" onPress={() => this.onPressPofu()}>
                        <Image source={require('../../assets/13SayfaResim/pofu_dusunceli.png')} />
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
        marginTop:40,
        marginLeft: Dimensions.get('window').width / 4,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    }
})

//make this component available to the app
export default Page13;

