import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity,TouchableHighlight, Button, Image } from 'react-native'
// Import the react-native-sound module
import Sound from 'react-native-sound';

      
class Page1 extends Component {
    constructor(props) {
        super(props)
        // Enable playback in silence mode
        this.btnSound  = new Sound('yildiz_ses.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
              alert('failed to load the sound:'+ error);
              return;
            }
          });

          this.pageAudio = new Sound('sayfa1.mp3', Sound.MAIN_BUNDLE, (error) => {
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
        this.pageAudio.stop()
    }
    onPressStar = () =>{
        // Play the sound with an onEnd callback
        this.btnSound.play((success) => {
            if (success) {
                console.log('successfully finisdhed playing');
            } else {
                alert('Star1 Sound Error!')
            // reset the player to its uninitialized state (android only)
            // this is the only option to recover after an error occured and use the player again
            this.btnSound.reset();
            }
        });
    }
    render() {
        return (
            <ImageBackground style={styles.container} imageStyle={{ resizeMode: 'cover' }} source={require('../../assets/1sayfa/1sayfa_resim/birinciSayfa.png')}>
                <View style={{ margin:10}}>
                <TouchableOpacity onPress={() => this.onPressLearnMore()}>
                <Image
                        source={require('../../assets/1sayfa/1sayfa_resim/home.png')}
                    />
            </TouchableOpacity>
                    
                </View>
                <View style={{ justifyContent: 'space-around', marginRight:50, flexDirection:'row' }}>
                <TouchableOpacity onPress={()=>this.onPressStar()}>
                    <Image source={require('../../assets/1sayfa/1sayfa_resim/yildiz.png')} style={{ margin:30, width: 25, height: 25 }} />
                </TouchableOpacity>
                
                    <Image source={require('../../assets/1sayfa/1sayfa_resim/moonAnimasyon.gif')} style={{ width: 50, height: 50 }} />
                    <TouchableOpacity onPress={()=>this.onPressStar()}>
                    <Image onPress={()=> this.onPressStar}  source={require('../../assets/1sayfa/1sayfa_resim/yildiz.png')} style={{marginBottom:100, width: 25, height: 25 }} />
                </TouchableOpacity>
                    
                </View>
                <View style={styles.buttonContainer}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                    </View>
                 
                    <View style={{ flex: 0, flexDirection: 'row' }}>
                    <TouchableOpacity onPress={this.props.nextPage}>
                        <Image 
                            source={require('../../assets/1sayfa/1sayfa_resim/ileri.png')}
                        /></TouchableOpacity>
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
export default Page1;
