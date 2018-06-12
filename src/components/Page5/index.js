import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity,TouchableHighlight, Button, Image, Animated, Dimensions } from 'react-native'
import Sound from 'react-native-sound';

class Page5 extends Component {
    constructor(props) {
        super(props)
        this.state={
            isDoorOpen:true
        }
        this.pageAudio = new Sound('sayfa5.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
            } else {
                this.pageAudio.play(); // have to put the call to play() in the onload callback
            }
        });
    }
    
    componentWillUnmount(){
        this.pageAudio.stop()
    }

    onPressLearnMore = () => {
    }
    onPressDoor = ()=>{
        let doorState = this.state.isDoorOpen
        this.setState({
            isDoorOpen: !doorState
        })
    }
    render() {
       
        return (
            <ImageBackground style={styles.container} imageStyle={{ resizeMode: 'stretch' }} source={require('../../assets/5sayfa/5sayfa_taslak.png')}>
                <View style={{ margin:10}}>
                    <TouchableOpacity onPress={() => this.onPressLearnMore()}>
                        <Image source={require('../../assets/1sayfa/1sayfa_resim/home.png')} />
                    </TouchableOpacity>
                </View>
                
                <View style={{alignItems:'center', marginBottom:180, marginLeft:210, justifyContent: 'center',flex:3}}>
                <View style={styles.door}>
                    <TouchableHighlight onPress={()=>this.onPressDoor()}>
                        <Image style = { this.state.isDoorOpen ? { height:0} : {}}  source={require('../../assets/5sayfa/kapiAcik.png')}  />
                    </TouchableHighlight>
                    <TouchableHighlight onPress = {()=>this.onPressDoor()}>
                        <Image style={ !this.state.isDoorOpen ? { height:0} : {}} source={require('../../assets/5sayfa/kapiKapali.png')}  />
                    </TouchableHighlight>
                </View>
                <View style={styles.pofuStyles}>
                    <Image source={require('../../assets/5sayfa/pofu_saskin.png')}  />
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
    door: {
        position:'absolute'
    }
})

//make this component available to the app
export default Page5;
