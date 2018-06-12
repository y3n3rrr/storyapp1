import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity, TouchableHighlight, Button, Image,
    PanResponder, 
    Alert,
    BackHandler, Animated, Dimensions } from 'react-native'
import Sound from 'react-native-sound';
import Tabure from './tabure'
export class locationInfo {
    width;
    height;
    fx;
    fy;
    px;
    py;
  }

  const images = {
    tabure: {
        sagkarli: require('../../assets/9SayfaResim/9sayfa_tabure_sag_karli.png'),
        solkarli: require('../../assets/9SayfaResim/9sayfa_tabure_sol_karli.png'),
        masa:require('../../assets/9SayfaResim/9sayfa_masa_karli.png'),
        tabureDuzgun: require('../../assets/9SayfaResim/tabure_duzgun.png'),
        masaDuzgun:require('../../assets/9SayfaResim/masa_duzgun.png')
    }
  }; 

class Page9 extends Component {
    constructor(props) {
        super(props)

        this.state={
            showBg2:false,
            showDraggable: false,
            showSagTabure: false,
            showSolTabure: false,
            showMasa: false,
            dropAreaValuesSiluet1: new locationInfo,
            dropAreaValuesSiluet2: new locationInfo,
            dropAreaValuesSiluetMasa: new locationInfo,
            opacity: new Animated.Value(5),
        };
        this.pageAudio = new Sound('sayfa9.mp3', Sound.MAIN_BUNDLE, (error) => {
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
    componentDidMount(){
        setTimeout(()=>{
            this.setState({ showBg2:true, showDraggable:true });
        },1000)
    }

    setDropZoneValues(event){
        this.refs.mycomponent.measure( (fx, fy, width, height, px, py) => {
        //   alert('Component width is: ' + width +
        //   '\nComponent height is: ' + height +
        //   '\nX offset to frame: ' + fx +
        //   '\nY offset to frame: ' + fy +
        //   '\nX offset to page: ' + px +
        //   'Y offset to page: ' + py)
          this.setState({
            dropAreaValues : {width, height,fx,fy,px,py}
          });
      })
    }
    setdropAreaValuesSiluet1(event){
        this.refs.siluetSagTabure.measure( (fx, fy, width, height, px, py) => {
          this.setState({
            dropAreaValuesSiluet1 : {width, height,fx,fy,px,py}
          });
      })
    }
    setdropAreaValuesSiluet2(event){
        this.refs.siluetSolTabure.measure( (fx, fy, width, height, px, py) => {
          this.setState({
            dropAreaValuesSiluet2 : {width, height,fx,fy,px,py}
          });
      })
    }
    setdropAreaValuesSiluetMasa(event){
        this.refs.siluetMasa.measure( (fx, fy, width, height, px, py) => {
          this.setState({
            dropAreaValuesSiluetMasa : {width, height,fx,fy,px,py}
          });
      })
    }
    componentWillMount(){
    }

    showSagTabure = ()=>{
        this.setState({
            showSagTabure : true
          });
    }

    showSolTabure = ()=>{
        this.setState({
            showSolTabure : true
          });
    }
    
    showMasa = ()=>{
        this.setState({
            showMasa : true
          });
    }
    render() {
        
        return (
            <View style={styles.container} >
                <ImageBackground style={ this.state.showBg2 ? { height:0} : styles.container} imageStyle={{ resizeMode: 'stretch' }} source={require('../../assets/9SayfaResim/9sayfa_ilk_sonHali.png')}>
                </ImageBackground>
                <ImageBackground style={ !this.state.showBg2 ? { height:0} : styles.container}  imageStyle={{ resizeMode: 'stretch' }} source={require('../../assets/9SayfaResim/9sayfa_ilk_taslak.png')}>
                <View style={{ margin:10}}>
                    <TouchableOpacity onPress={() => this.onPressLearnMore()}>
                        <Image source={require('../../assets/1sayfa/1sayfa_resim/home.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.siluetContainer}>
                    <View style={styles.leftSiluet} onLayout={(e)=>this.setdropAreaValuesSiluet1(e)} ref="siluetSagTabure">
                        <Image style = {this.state.showSagTabure ? { height:0} : {}} source={require('../../assets/9SayfaResim/9sayfa_siluet_tabure.png')} />
                        <Image style = {!this.state.showSagTabure ? { height:0} : {}} source={require('../../assets/9SayfaResim/tabure_duzgun.png')} />
                    </View>
                    <View style={styles.masaSiluet} onLayout={(e)=>this.setdropAreaValuesSiluetMasa(e)} ref="siluetMasa">
                        <Image style = {this.state.showMasa ? { height:0} : {}} source={require('../../assets/9SayfaResim/9sayfa_siluet_masa.png')} />
                        <Image style = {!this.state.showMasa ? { height:0} : {}} source={require('../../assets/9SayfaResim/masa_duzgun.png')} />
                    </View>
                    <View style={styles.rightSiluet} onLayout={(e)=>this.setdropAreaValuesSiluet2(e)} ref="siluetSolTabure">
                        <Image style = {this.state.showSolTabure ? { height:0} : {}} source={require('../../assets/9SayfaResim/9sayfa_siluet_tabure.png')} />
                        <Image style = {!this.state.showSolTabure ? { height:0} : {}} source={require('../../assets/9SayfaResim/tabure_duzgun.png')} />
                    </View>
                </View>
                <View style={ !this.state.showBg2 ? { height:0} : styles.thirdSiluet}>
                    <Image  source={require('../../assets/9SayfaResim/9sayfa_siluet_tabure.png')} />
                </View>
                <View style={styles.tabureContainer}>
                    <View style={styles.leftTabure}>
                        <Tabure showTabureDuzgun={()=> this.showSagTabure()} showDraggable={this.state.showDraggable} dropAreaValues={this.state.dropAreaValuesSiluet1} 
                            ImageURL={images.tabure.solkarli} 
                            ImageURLKarli={images.tabure.solkarli} 
                            ImageURLDuzgun={images.tabure.tabureDuzgun} 
                        />
                    </View>
                    <View style={!this.state.showDraggable ? { height:0} : styles.masaStyle}>
                        <Tabure showTabureDuzgun={()=> this.showMasa()} showDraggable={this.state.showDraggable} dropAreaValues={this.state.dropAreaValuesSiluetMasa} 
                              ImageURL={images.tabure.masa} 
                              ImageURLKarli={images.tabure.masa}  
                              ImageURLDuzgun={images.tabure.masaDuzgun} 
                        />
                    </View>
                    <View style={styles.rightSiluet}>
                        <Tabure showTabureDuzgun={()=> this.showSolTabure()} showDraggable={this.state.showDraggable} dropAreaValues={this.state.dropAreaValuesSiluet2}
                        ImageURL={images.tabure.sagkarli} 
                        ImageURLKarli={images.tabure.sagkarli} 
                        ImageURLDuzgun={images.tabure.tabureDuzgun} 
                         />
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
            </View>
            
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

    TabureStyle: {
        position:"relative",
          justifyContent: 'center',
          alignItems: 'center',
    },
    masaStyle: {
        position:"relative",
          justifyContent: 'center',
          alignItems: 'center',
    },
    siluetContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        flex:2,
        flexDirection:'row', 
    },
    tabureContainer:{
        flex:1,
        bottom:200,
        flexDirection:'row', 
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        
    },
    leftTabure: {
        position:"relative",
        justifyContent: 'center',
        alignItems: 'center',
    },
    rightTabure: {
        position:"relative",
        justifyContent: 'center',
        alignItems: 'center',
    },
    trash: {
        width: 75,
        resizeMode:'cover',
        height: 75
    },
    thirdSiluet:{
        bottom:200,
        position:"relative",
        justifyContent: 'flex-start',
        alignItems: 'center',
    }
})

//make this component available to the app
export default Page9;

