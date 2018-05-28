import React, { Component } from 'react'
import { Modal, Text, View, ImageBackground, StyleSheet, TouchableOpacity, TouchableHighlight, Button, Image,
    PanResponder, 
    Alert,
    BackHandler, Animated, Dimensions } from 'react-native'

import Sound from 'react-native-sound';


  
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
    render() {
        return (
            <View style={styles.container} >
                <ImageBackground style={ styles.container}  imageStyle={{ resizeMode: 'stretch' }} source={require('../../assets/12SayfaResim/sahne1/12sayfa_taslak.png')}>
                <View style={{ margin:10}}>
                    <TouchableOpacity onPress={() => this.onPressLearnMore()}>
                        <Image source={require('../../assets/1sayfa/1sayfa_resim/home.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{flex:2}}>
                </View>
                <View style={{flex:7, alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>this.setModalVisible(true)}>
                        <Image source={require('../../assets/12SayfaResim/sahne1/canta_ilk.png')} />
                    </TouchableOpacity>
                </View>
             
                <Modal transparent={true}
       visible={this.state.modalVisible}
       onRequestClose={this.closeModal}>
  <View style={{
          flex: 1,
          flexDirection: 'column',
          backgroundColor:"#00000080",
          justifyContent: 'center',
          alignItems: 'center'}}>
    <View style={{
            width: 300,
            height: 300,backgroundColor: '#fff', padding: 20}}>
                        <TouchableOpacity onPress={()=> this.setModalVisible(!this.state.modalVisible)}> 
                        <Text>Close Modal </Text>
                        </TouchableOpacity>
    </View>
  </View>
</Modal>
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
    },
    ModalStyle:{
        backgroundColor:'#aaa',
        height:150,
        width:150,
        justifyContent:'center',
        backgroundColor:'transparent',

        alignItems:'center'
    }
})
//make this component available to the app
export default Page12;

