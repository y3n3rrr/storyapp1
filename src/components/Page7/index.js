import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity,TouchableHighlight, Button, Image, Animated, Dimensions } from 'react-native'
import Sound from 'react-native-sound';

class Page7 extends Component {
    constructor(props) {
        super(props)
        this.fireAudio = new Sound('fire_audio.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
            } 
        });
        this.state={
            showKosiImage:true,
            showKosiGif:false,
        }
    }
    onPressLearnMore = () => {
    }
    componentWillUnmount(){
       
    }
    onPressKosi = ()=>{
        this.fireAudio.play();
        <Image source={require('../../assets/10SayfaResim/soru.gif')} />
        this.setState({showKosiImage:false, showKosiGif:true,})
        setTimeout(()=>{
            this.fireAudio.stop();
            this.setState({showKosiImage:true, showKosiGif:false,})
        }, 2000)
         // have to put the call to play() in the onload callback
    }
    render() {
       
        return (
            <ImageBackground style={styles.container} imageStyle={{ resizeMode: 'stretch' }} source={require('../../assets/7sayfa/7sayfa_Taslak.png')}>
                <View style={{ margin:10 }}>
                    <TouchableOpacity onPress={() => this.onPressLearnMore()}>
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
    tabure:{
        justifyContent:'space-around',
        marginRight:200
    }
})

//make this component available to the app
export default Page7;
