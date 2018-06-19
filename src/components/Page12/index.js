import React, { Component } from 'react'
import { Modal, Text, View, ImageBackground, StyleSheet, TouchableOpacity, TouchableHighlight, Button, Image,
    PanResponder, 
    Alert,
    BackHandler, Animated, Dimensions } from 'react-native'

import CantaModal from './CantaModal';
import Tool from './tool';
import Sound from 'react-native-sound';


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

    this.citAudio = new Sound('fire_audio.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            console.log('failed to load the sound', error);
        } 
        this.windAudio = new Sound('wind_audio.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
            } 
        });
    });

    this.state = {
        showTool:true,
        showSahne3:false,
        showCekicGif:false,
        modalVisible: false,
        selectedTool:0,
        dropAreaValuesCit1: new locationInfo,
        dropAreaValuesCit2: new locationInfo,

        showSolCitGif:false,
        showSagCitGif:false,

        showSolCitSiluet:false,
        showSagCitSiluet:false,

        showSolDikCit:false,
        showSagDikCit:false,

        solCitMargin:Dimensions.get('window').width / 2 + 50,
        solCitBottom:Dimensions.get('window').height / 3 + 10,

        sagCitMargin:Dimensions.get('window').width / 2 + 140,
        sagCitBottom:Dimensions.get('window').height / 3 + 10,
    };
    this.pageAudio = new Sound('sayfa12_1_pofu.mp3', Sound.MAIN_BUNDLE, (error) => {});
    this.pageAudio2 = new Sound('sayfa12_2_takimcanta.mp3', Sound.MAIN_BUNDLE, (error) => {});
    this.pageAudio3 = new Sound('sayfa12_3_aracsecimi.mp3', Sound.MAIN_BUNDLE, (error) => {});
    this.pageAudio4 = new Sound('sayfa12_4_tamiretme.mp3', Sound.MAIN_BUNDLE, (error) => {});
    this.yanlisSound = new Sound('yanlis.mp3', Sound.MAIN_BUNDLE, (error) => {});
    this.citCak1 = new Sound('sayfa12_cekic_3tak1', Sound.MAIN_BUNDLE, (error) => {});
    this.citCak2 = new Sound('sayfa12_cekic_3tak2', Sound.MAIN_BUNDLE, (error) => {});

    
    this._mounted= true;
    
    setTimeout(()=>{
        if(this._mounted){
            this.pageAudio.play();
            setTimeout(()=>{
                if(this._mounted)
                    this.pageAudio2.play();
            },3000)
        }
    },5000)
}
componentWillUnmount(){
    this._mounted=false;
    this.citAudio.stop();
    this.pageAudio.stop();
    this.pageAudio2.stop();
    this.pageAudio3.stop();
    this.pageAudio4.stop();
}
setdropAreaValuesCit1(event){
    this.refs.cit1.measure( (fx, fy, width, height, px, py) => {
      this.setState({
        dropAreaValuesCit1 : {width, height,fx,fy,px,py}
      });
  })
}
setdropAreaValuesCit2(event){
    this.refs.cit2.measure( (fx, fy, width, height, px, py) => {
      this.setState({
        dropAreaValuesCit2 : {width, height,fx,fy,px,py}
      });
  })
}
    setSelectedTool=(tool)=>{
        this._mounted = false
        if(tool != 2){
            this.yanlisSound.play();
            this.setState({showCekicGif:true})
        }else{
            this.setState({selectedTool:tool, showSahne3:true})
        this.setModalVisible(false)
        this.pageAudio4.play();
        
    }
        
}
        
    setModalVisible(visible) {
        this._mounted = false
        this.pageAudio.stop();
        this.pageAudio2.stop();
        if(visible){
            this.pageAudio3.play();
        }
        this.setState({modalVisible: visible});
    }

    componentDidMount(){
        setTimeout(()=>{
            let t = !this.state.showSolCitGif    
            this.setState({showSolCitGif:t})
        }, 4000)
    }
    onPressSolCit = ()=>{
        this.citCak1.play()
        this.setState({showSolCitGif:false, showSolCitSiluet:true, showSolDikCit:true, showTool:false})
    }
    onPressSagCit = ()=>{
        this.citCak1.play()
        this.setState({showSagCitSiluet:true, showSagDikCit:true, showTool:false})
    }

    dikCitCakilabilir = (cit) => {
        if(cit == 1)
            this.setState({dikSolCitCakilabilir:true, dikSagCitCakilabilir:false})
        if(cit == 2)
            this.setState({dikSolCitCakilabilir:false, dikSagCitCakilabilir:true})
        else
            this.setState({dikSolCitCakilabilir:false, dikSagCitCakilabilir:false})
    }
    
    onPressDikCit= (e) =>{
        this.citCak2.play();
        if(e == 1){
            this.setState({showSolCitSiluet:false, solCitMargin:Dimensions.get('window').width / 2 + 45, solCitBottom:Dimensions.get('window').height / 3 + 15})
        }else{
            this.setState({showSagCitSiluet:false,  sagCitMargin:Dimensions.get('window').width / 2 + 140, sagCitBottom:Dimensions.get('window').height / 3 + 20})
        }

    }
    render() {
        if(!this.state.showSahne3){
            return (
                <View style={styles.container} >
                    <ImageBackground style={ styles.container}  imageStyle={{ resizeMode: 'stretch' }} source={require('../../assets/12SayfaResim/sahne1/12sayfa_taslak.png')}>
                    <View style={{ margin:10}}>
                        <TouchableOpacity onPress={() => this.onPressLearnMore()}>
                            <Image source={require('../../assets/1sayfa/1sayfa_resim/home.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.sahne3Title}> 
                    <Text style={{fontSize:20, fontWeight:'600'}}>Şimdi de kırılan çitleri onaralım Kösi</Text>
                    <Text style={{fontSize:20, fontWeight:'600'}}>Kösi'ye takım çantasını açmasında yardım eder misin?</Text>
                    </View>
                    <View style={{flex:2}}> 
                    </View>
                    <View style={{flex:7, alignItems:'center'}}>
                        <TouchableOpacity onPress={()=>this.setModalVisible(true)}>
                            <Image source={require('../../assets/12SayfaResim/sahne1/canta_ilk.png')} />
                        </TouchableOpacity>
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
        else{
            return (
                <View style={styles.container} >
                    <ImageBackground style={ styles.container}  imageStyle={{ resizeMode: 'stretch' }} source={require('../../assets/12SayfaResim/sahne3/12sayfa_3sahne_taslak.png')}>
                    <View style={{ margin:10}}>
                        <TouchableOpacity onPress={() => this.onPressLearnMore()}>
                            <Image source={require('../../assets/1sayfa/1sayfa_resim/home.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.sahne3Title}> 
                    <Text style={{fontSize:20, fontWeight:'600'}}>Citleri tamir ederken bize yardim eder misin?</Text>
                    </View>
                    <View style={styles.brokenCit1Style} onLayout={(e)=>this.setdropAreaValuesCit1(e)} ref="cit1">
                    </View>
                    <View style={styles.brokenCit2Style} onLayout={(e)=>this.setdropAreaValuesCit2(e)} ref="cit2">
                    </View>
                    <View style={{flex:4}}>
                    </View>
                    <View style={{flex:2}}>
                    </View>
                    <View style={styles.toolContainer}>
                        <Tool showTool={this.state.showTool} selectedTool={this.state.selectedTool}  dikCitCakilabilir={this.dikCitCakilabilir} dropAreaValues1={this.state.dropAreaValuesCit1} dropAreaValues2={this.state.dropAreaValuesCit2} />
                    </View>
                    <View>
                    {!this.state.showSolDikCit && <TouchableOpacity ref="yerdekiSolCit" style={styles.citSol} onPress={() => this.onPressSolCit()}>
                        <Image style={ this.state.showSolCitGif ? { height: 0} : {}}  source={require('../../assets/12SayfaResim/sahne3/cit_sol.png')}/>
                        <Image style={ !this.state.showSolCitGif ? { height: 0} : {}} source={require('../../assets/12SayfaResim/sahne3/cit_sol_gorunur.gif')} />
                    </TouchableOpacity> }
                    {!this.state.showSagDikCit && <TouchableOpacity style={styles.citSag} onPress={() => this.onPressSagCit()}>
                        <Image style={ this.state.showSagCitGif  ? { height: 0} : {}} source={require('../../assets/12SayfaResim/sahne3/cit_sag.png')} />
                        <Image style={ !this.state.showSagCitGif ? { height: 0} : {}} source={require('../../assets/12SayfaResim/sahne3/cit_sag_gorunur.gif')} />
                    </TouchableOpacity>}
                    
                        <Image style={ this.state.showSolCitSiluet ? styles.citSiluetSol : { height: 0}}  source={require('../../assets/12SayfaResim/sahne3/12sayfa_cit_siluet.png')} />
                        <Image style={ this.state.showSagCitSiluet ? styles.citSiluetSag : { height: 0}} source={require('../../assets/12SayfaResim/sahne3/12sayfa_cit_siluet.png')} />
                    <TouchableOpacity style={{position: 'absolute',
                        marginLeft:this.state.solCitMargin,
                        bottom:this.state.solCitBottom}} onPress={() => this.onPressDikCit(1)}>
                        <Image style={ !this.state.showSolDikCit ? { height: 0} : {}} source={require('../../assets/12SayfaResim/sahne3/cit.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.SagDikCit} onPress={() => this.onPressDikCit(2)}>
                        <Image style={ !this.state.showSagDikCit ? { height: 0} : {}} source={require('../../assets/12SayfaResim/sahne3/cit.png')} />
                    </TouchableOpacity>
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
    brokenCit1Style: {
        justifyContent:'center',
        width:50,
        position:'absolute',
        marginLeft:Dimensions.get('window').width / 2 + 45,
        bottom:Dimensions.get('window').height / 3 + 10,
        height:200
    },
    brokenCit2Style: {
        justifyContent:'center',
        width:50,
        position:'absolute',
        marginLeft:Dimensions.get('window').width / 2 + 140,
        bottom:Dimensions.get('window').height / 3 + 10,
        height:200
    },
    sahne3Title: {
        alignItems:'center',
    },
    citSol: {
        position: 'absolute',
        marginLeft:Dimensions.get('window').width / 3,
        bottom:Dimensions.get('window').height / 5 - 30,
    },
    citSag: {
        position: 'absolute',
        marginLeft:Dimensions.get('window').width / 2 + 200,
        bottom:Dimensions.get('window').height / 6 - 50,
    },
    citSiluetSol: {
        position: 'absolute',
        marginLeft:Dimensions.get('window').width / 2 + 40,
        bottom:Dimensions.get('window').height / 3 + 20,
    },
    citSiluetSag: {
        position: 'absolute',
        marginLeft:Dimensions.get('window').width / 2 + 130,
        bottom:Dimensions.get('window').height / 3 + 20,
    },
    SolDikCit:{
        position: 'absolute',
        marginLeft:Dimensions.get('window').width / 2 + 50,
        bottom:Dimensions.get('window').height / 3 + 10,
    },SagDikCit:{
        position: 'absolute',
        marginLeft:Dimensions.get('window').width / 2 + 140,
        bottom:Dimensions.get('window').height / 3 + 10,
    },
})
//make this component available to the app
export default Page12;

