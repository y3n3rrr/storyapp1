import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity, TouchableHighlight, Button, Image, Animated, Dimensions } from 'react-native'
import Sound from 'react-native-sound';
import Footer from '../Components/Footer';

class Page16 extends Component {
    constructor(props) {
        super(props)
        this.kardeYurume = new Sound('karda.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
            } 
        });
        this.lambaAc = new Sound('sayfa16_lambaacma.mp3', Sound.MAIN_BUNDLE, (error) => { this.pageAudio.play();});
        this.lambaKapat = new Sound('sayfa16_lambakapama.mp3', Sound.MAIN_BUNDLE, (error) => {});
        
        
        this.state={
            currentSahne:1,
            showGif:false,
            isDark:false,
            readyToUpdate:false,
        }
        this.pageAudio = new Sound('sayfa16.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
            } else {
                this.pageAudio.play(); // have to put the call to play() in the onload callback
                setTimeout(()=>{this.setState({ readyToUpdate: true })},23000)
            }
        });
    }

    goToHomePage = () => {
        this.props.setPageNum(0)
    }

    onPressLight = () =>{
        if(!this.state.readyToUpdate){

            return;
        }
        let t = !this.state.isDark
        this.setState({isDark: t, showGif:false}, () =>{
            if(this.state.isDark){
                this.setState({ currentSahne: 2 })
                this.lambaAc.stop();
                this.lambaKapat.play();
            }
            else{
                this.lambaKapat.stop();
                this.lambaAc.play();
                this.setState({ currentSahne: 1 })
            }
        })
    }
    componentWillUnmount(){
        this.kardeYurume.release();
    }
   
    render() {
        if(this.state.currentSahne == 1){
            return (
                <ImageBackground style={styles.container} imageStyle={{ resizeMode: 'stretch' }} source={require('../../assets/16SayfaResim/uykulu_surat.png')}>
                    <View style={{ margin: 10, flex:1 }}>
                        <TouchableOpacity onPress={() => this.goToHomePage()}>
                            <Image source={require('../../assets/1sayfa/1sayfa_resim/home.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1 }}>
                    </View>
                    <View style={{ flex: 7, alignItems:'center', marginLeft:Dimensions.get('window').width/2 }}>
                        <TouchableOpacity onPress={() => this.onPressLight()}>
                            <Image style={ this.state.showGif ? { height: 0} : {}} source={require('../../assets/16SayfaResim/lambaDugme_ilk.png')} />
                            <Image style={ !this.state.showGif ? { height: 0} : {}} source={require('../../assets/16SayfaResim/lambaDugmesi_gorunur.gif')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonContainer}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <TouchableOpacity onPress={this.props.prevPage}>
                                <Image source={require('../../assets/1sayfa/1sayfa_resim/geri.png')} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 0, opacity:0, flexDirection: 'row' }}>
                            <TouchableOpacity>
                                <Image source={require('../../assets/1sayfa/1sayfa_resim/ileri.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            )
        }
        else{
            return (
                <ImageBackground style={styles.container} imageStyle={{ resizeMode: 'stretch' }} source={require('../../assets/16SayfaResim/16sayfa_karanlik_goruntu_ornek.png')}>
                    <View style={{ margin: 10,flex:1  }}>
                        <TouchableOpacity onPress={() => this.goToHomePage()}>
                            <Image source={require('../../assets/1sayfa/1sayfa_resim/home.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1 }}>
                    </View>
                    <View style={{ flex: 7, alignItems:'center', marginLeft:Dimensions.get('window').width/2 }}>
                        <TouchableOpacity onPress={() => this.onPressLight()}>
                            <Image style={ !this.state.isDark ? { height: 0} : {}} source={require('../../assets/16SayfaResim/dugme_kapali.png')} />
                        </TouchableOpacity>
                    </View>
                    <Footer setPageNum={this.props.setPageNum} currentPage={this.props.currentPage} />
                </ImageBackground>
            )
        }
        
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
export default Page16;

