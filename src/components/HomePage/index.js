import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity,TouchableHighlight, Button, Image } from 'react-native'
import Sound from 'react-native-sound';

class HomePage extends Component {
    constructor(props) {
        super(props)
        //bensound-littleidea baslik

        this.pageAudio = new Sound('baslik.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
            } else {
                this.pageAudio.play(); // have to put the call to play() in the onload callback
            }
        });
    }
    
    componentWillUnmount(){
        this.pageAudio.release();
    }
    onPressLearnMore = () => {
        alert("clicked!")
    }
    componentDidMount(){
        <Image source={require('../../assets/10SayfaResim/soru.gif')} />
        this.setState({showKosiImage:false, showKosiGif:true,})
    }
    handleRowPress=(item)=>{
        alert("start clicked!")
        this.props.navigation.navigate('DetailsScreen',item)
    }

    foo=(_isreadme)=>{
        this.props.setPageNum(1)
        this.props.setReadMe(_isreadme)
    }

    render() {
        return (
            <ImageBackground style={styles.container} imageStyle={{ resizeMode: 'stretch' }} source={require('../../assets/kapak/kapaksayfa_butonsuz.png')}>
                <View style={{ flex:1}}>
                 </View>
                <View style={{ flex:6}}>
                <View style={{ top:10}}>
                <TouchableOpacity onPress={()=> this.foo(false)}>
                    <Image source={require('../../assets/kapak/banaoku.png')} style={{ marginLeft:100 }} />
                </TouchableOpacity>
                    
                </View>
                <View style={{ bottom:30}}>
                <TouchableOpacity onPress={()=>this.foo(true)}>
                    <Image source={require('../../assets/kapak/benioku.png')} style={{ marginLeft:100 }} />
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
