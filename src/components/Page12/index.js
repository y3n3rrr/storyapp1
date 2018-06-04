import React, { Component } from 'react'
import { Modal, Text, View, ImageBackground, StyleSheet, TouchableOpacity, TouchableHighlight, Button, Image,
    PanResponder, 
    Alert,
    BackHandler, Animated, Dimensions } from 'react-native'

import CantaModal from './CantaModal';
import Tool from './tool';

export class locationInfo {
    width;
    height;
    fx;
    fy;
    px;
    py;
  }



class Page12 extends Component{
constructor(props) {
    super(props)
    this.state = {
        showCekicGif:false,
        modalVisible: false,
        selectedTool:0,
        dropAreaValuesCit: new locationInfo,
    };
}

setdropAreaValuesCit(event){
    this.refs.cit.measure( (fx, fy, width, height, px, py) => {
      this.setState({
        dropAreaValuesCit : {width, height,fx,fy,px,py}
      });
  })
}
    setSelectedTool=(tool)=>{
        if(tool != 2){
            this.setState({showCekicGif:true})
        }else{
            this.setState({selectedTool:tool})
        this.setModalVisible(false)
        }
        
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
                <View style={styles.brokenCitStyle} onLayout={(e)=>this.setdropAreaValuesCit(e)} ref="cit">
                </View>
                <View style={styles.toolContainer}>
                    <Tool selectedTool={this.state.selectedTool} dropAreaValues={this.state.dropAreaValuesCit} />
                </View>
                
                <CantaModal showCekicGif={this.state.showCekicGif} setSelectedTool={this.setSelectedTool} setModalVisible={this.setModalVisible.bind(this)} modalVisible={this.state.modalVisible} />
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
    toolContainer:{
        position: 'relative',
        flex: 9,
        bottom:15,
        marginRight:130,
    },
    brokenCitStyle:{
        backgroundColor:'blue',
        justifyContent:'center',
        justifyContent:'center',
        width:200,
        position:'absolute',
        marginLeft:Dimensions.get('window').width / 2,
        bottom:Dimensions.get('window').height / 3 - 30,
        height:200
    }
})
//make this component available to the app
export default Page12;

