import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity,TouchableHighlight, Button, Image, Animated, Dimensions } from 'react-native'
import Sound from 'react-native-sound';
import Footer from '../Components/Footer';

class Page7 extends Component {
    constructor(props) {
        super(props)
        this.kosiAudio = new Sound('sayfa7_kosi_zorlanma.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
            } 
        });
        this.state={
            showKosiImage:true,
            showKosiGif:false,
        }
        this.pageAudio = new Sound('sayfa7.mp3', Sound.MAIN_BUNDLE, (error) => {
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
        this.kosiAudio.release()
        this.pageAudio.release()
    }
    onPressKosi = ()=>{
        this.kosiAudio.play();
        <Image source={require('../../assets/10SayfaResim/soru.gif')} />
        this.setState({showKosiImage:false, showKosiGif:true,})
        setTimeout(()=>{
            this.kosiAudio.stop();
            this.setState({showKosiImage:true, showKosiGif:false,})
        }, 2000)
         // have to put the call to play() in the onload callback
    }
    render() {
       
        return (
            <ImageBackground style={styles.container} imageStyle={{ resizeMode: 'stretch' }} source={require('../../assets/7sayfa/7sayfa_Taslak.png')}>
                <View style={{ margin:10 }}>
                    <TouchableOpacity onPress={() => this.goToHomePage()}>
                        <Image source={require('../../assets/1sayfa/1sayfa_resim/home.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{flex:1}}></View>
                <View style={{flex:2, flexDirection:'row', alignItems:'flex-start', justifyContent:'flex-end'}}>
                <View style={styles.tabure}>
                <TouchableHighlight underlayColor="rgba(0, 0, 0, 0)" onPress={()=>this.onPressKosi()}>
                        <Image style={ this.state.showKosiImage ? { } : {opacity: 0, height:0 }}  source={require('../../assets/7sayfa/kosi_ilk.png')}  />
                    </TouchableHighlight>
                        <Image style={ this.state.showKosiGif ? {  } : { opacity: 0, height:0}}  source={require('../../assets/7sayfa/kosi_zorlanma.gif')}  />
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
    tabure:{
        justifyContent:'space-around',
        marginRight:200
    }
})

//make this component available to the app
export default Page7;
