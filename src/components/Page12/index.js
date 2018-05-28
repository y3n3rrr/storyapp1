import React, { Component } from 'react'
import { Modal, Text, View, ImageBackground, StyleSheet, TouchableOpacity, TouchableHighlight, Button, Image,
    PanResponder, 
    Alert,
    BackHandler, Animated, Dimensions } from 'react-native'

import Sound from 'react-native-sound';
import DialogAndroid from 'react-native-dialogs';


  
class Page12 extends Component{
constructor(props) {
    super(props)
    this.state = {
        modalVisible: false,
    };
}
        
setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

        _toggleModal = () =>{
            let options = {
                title: 'Hello, World!',
                content: 'I\'m just simple Dialog',
                positiveText: 'OK',
                negativeText: 'Cancel'
              };
              
              let showDialog = function () {
                var dialog = new DialogAndroid();
                dialog.set(options);
                dialog.show();
              }
              
        }
          

    render() {

        return (
            <View>
                   <ImageBackground style={styles.container} imageStyle={{ resizeMode: 'stretch' }} source={require('../../assets/13SayfaResim/13sayfa_taslak.png')}>
                <View style={{ margin: 10 }}>
                    <TouchableOpacity onPress={() => this.onPressLearnMore()}>
                        <Image source={require('../../assets/1sayfa/1sayfa_resim/home.png')} />
                    </TouchableOpacity>
                </View>
                <View>
                <TouchableOpacity onPress={this._toggleModal}>
                    <Text>Show Modal</Text>
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
            </View>
         
            
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
export default Page12;

